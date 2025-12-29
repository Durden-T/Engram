/**
 * SummarizerService - 剧情总结核心服务
 * 
 * 提供楼层监听、总结触发、世界书写入等功能
 * 
 * 修复：
 * 1. 使用 chat_metadata 存储 lastSummarizedFloor（每聊天独立）
 * 2. 正确获取当前楼层数（context.chat.length）
 * 3. 监听聊天切换事件以重置状态
 */

import { EventBus, TavernEventType, MessageService, WorldInfoService } from '../../infrastructure/tavern';
import { TextProcessor, textProcessor } from './TextProcessor';
import { LLMAdapter, llmAdapter } from './LLMAdapter';
import { RegexProcessor, regexProcessor } from './RegexProcessor';
import { ModelLogger } from '../../infrastructure/logger/ModelLogger';
import { SettingsManager } from '../../infrastructure/SettingsManager';
import type {
    SummarizerConfig,
    SummarizerStatus,
    SummaryResult,
    SummarizeRequest,
} from './types';
import { DEFAULT_SUMMARIZER_CONFIG } from './types';

/** 备用总结提示词模板（APIPresets 无启用模板时使用） */
const FALLBACK_SUMMARY_PROMPT = {
    system: `你是一个专业的剧情总结助手。你的任务是将对话内容提炼为简洁的剧情摘要。

要求：
1. 保留关键情节和转折点
2. 提取重要的角色互动和情感变化
3. 使用第三人称叙述
4. 保持简洁，避免冗余
5. 直接输出摘要内容，不要添加前缀或解释`,

    user: `{{worldbookContext}}请将以下对话内容总结为剧情摘要：

{{chatHistory}}

---
请输出简洁的剧情摘要：`,
};

/** 元数据 key */
const METADATA_KEY = 'engram';

/**
 * 获取 SillyTavern 上下文
 */
function getSTContext(): {
    chat: unknown[];
    chatId: string;
    characterId: number;
} | null {
    try {
        // @ts-expect-error - SillyTavern 全局对象
        return window.SillyTavern?.getContext?.() || null;
    } catch {
        return null;
    }
}

/**
 * 获取 chat_metadata
 */
function getChatMetadata(): Record<string, unknown> | null {
    try {
        // 优先从 context 获取
        // @ts-expect-error - SillyTavern 全局对象
        const context = window.SillyTavern?.getContext?.();
        if (context?.chat_metadata) {
            return context.chat_metadata;
        }
        // 备用：直接访问全局变量
        // @ts-expect-error - SillyTavern 全局变量
        return window.chat_metadata || null;
    } catch {
        return null;
    }
}

/**
 * 保存聊天（防抖）
 */
function saveChatDebounced(): void {
    try {
        // @ts-expect-error - SillyTavern 全局函数
        window.saveChatDebounced?.();
    } catch {
        console.warn('[Engram] saveChatDebounced 不可用');
    }
}

/**
 * SummarizerService 类
 * 核心总结服务
 */
export class SummarizerService {
    private config: SummarizerConfig;
    private textProcessor: TextProcessor;
    private llmAdapter: LLMAdapter;

    private currentChatId: string | null = null;
    private isRunning = false;
    private isSummarizing = false;
    private unsubscribeMessage: (() => void) | null = null;
    private unsubscribeChat: (() => void) | null = null;
    private summaryHistory: SummaryResult[] = [];

    constructor(
        config?: Partial<SummarizerConfig>,
        processor?: TextProcessor,
        adapter?: LLMAdapter
    ) {
        this.config = { ...DEFAULT_SUMMARIZER_CONFIG, ...config };
        this.textProcessor = processor || textProcessor;
        this.llmAdapter = adapter || llmAdapter;
    }

    // ==================== 元数据操作 ====================

    /**
     * 从当前聊天元数据获取值
     */
    private getFromChatMetadata(key: string): unknown {
        const metadata = getChatMetadata();
        if (!metadata) {
            // chat_metadata 在某些情况下不可用（如未选择角色），静默返回
            return undefined;
        }

        // 初始化结构
        if (!metadata.extensions) {
            metadata.extensions = {};
        }
        // @ts-expect-error - 动态访问
        if (!metadata.extensions[METADATA_KEY]) {
            // @ts-expect-error - 动态访问
            metadata.extensions[METADATA_KEY] = {};
        }

        // @ts-expect-error - 动态访问
        return metadata.extensions[METADATA_KEY][key];
    }

    /**
     * 保存值到当前聊天元数据
     */
    private saveToChatMetadata(key: string, value: unknown): void {
        const metadata = getChatMetadata();
        if (!metadata) {
            // chat_metadata 不可用，静默返回
            return;
        }

        // 初始化结构
        if (!metadata.extensions) {
            metadata.extensions = {};
        }
        // @ts-expect-error - 动态访问
        if (!metadata.extensions[METADATA_KEY]) {
            // @ts-expect-error - 动态访问
            metadata.extensions[METADATA_KEY] = {};
        }

        // @ts-expect-error - 动态访问
        metadata.extensions[METADATA_KEY][key] = value;

        this.log('debug', `已保存到 chat_metadata: ${key} = ${value}`);

        // 触发保存
        saveChatDebounced();
    }

    /**
     * 获取上次总结的楼层（从聊天元数据）
     */
    private getLastSummarizedFloor(): number {
        const value = this.getFromChatMetadata('lastSummarizedFloor');
        return typeof value === 'number' ? value : 0;
    }

    /**
     * 设置上次总结的楼层（保存到聊天元数据）
     */
    private setLastSummarizedFloor(floor: number): void {
        this.saveToChatMetadata('lastSummarizedFloor', floor);
    }

    // ==================== 楼层计算 ====================

    /**
     * 获取当前真实楼层数
     */
    private getCurrentFloor(): number {
        const context = getSTContext();
        if (!context?.chat) {
            return 0;
        }
        // 楼层从0开始计数，所以 length - 1 是最后一楼的索引
        return context.chat.length;
    }

    /**
     * 获取当前聊天 ID
     */
    private getCurrentChatId(): string | null {
        const context = getSTContext();
        return context?.chatId || null;
    }

    // ==================== 生命周期 ====================

    /**
     * 启动服务，开始监听事件
     */
    start(): void {
        if (this.isRunning) {
            this.log('warn', '服务已在运行');
            return;
        }

        // 初始化当前聊天状态
        this.initializeForCurrentChat();

        // 监听消息接收事件
        if (this.config.triggerMode === 'auto') {
            this.unsubscribeMessage = EventBus.on(
                TavernEventType.MESSAGE_RECEIVED,
                this.handleMessageReceived.bind(this)
            );
            this.log('debug', `已订阅事件: ${TavernEventType.MESSAGE_RECEIVED}`);
        }

        // 监听聊天切换事件
        this.unsubscribeChat = EventBus.on(
            TavernEventType.CHAT_CHANGED,
            this.handleChatChanged.bind(this)
        );
        this.log('debug', `已订阅事件: ${TavernEventType.CHAT_CHANGED}`);

        this.isRunning = true;

        const status = this.getStatus();
        this.log('info', '服务已启动', status);
    }

    /**
     * 停止服务
     */
    stop(): void {
        if (this.unsubscribeMessage) {
            this.unsubscribeMessage();
            this.unsubscribeMessage = null;
        }
        if (this.unsubscribeChat) {
            this.unsubscribeChat();
            this.unsubscribeChat = null;
        }
        this.isRunning = false;
        this.log('info', '服务已停止');
    }

    /**
     * 为当前聊天初始化状态
     */
    private initializeForCurrentChat(): void {
        const chatId = this.getCurrentChatId();
        const currentFloor = this.getCurrentFloor();
        const lastSummarized = this.getLastSummarizedFloor();

        this.currentChatId = chatId;

        this.log('info', '初始化当前聊天状态', {
            chatId,
            currentFloor,
            lastSummarizedFloor: lastSummarized,
            pendingFloors: currentFloor - lastSummarized,
        });

        // 如果从未总结过（lastSummarized=0），初始化为当前楼层
        if (lastSummarized === 0 && currentFloor > 0) {
            this.log('info', '首次初始化，设置基准为当前楼层', { currentFloor });
            this.setLastSummarizedFloor(currentFloor);
        }
    }

    // ==================== 事件处理 ====================

    /**
     * 处理消息接收事件
     */
    private async handleMessageReceived(): Promise<void> {
        const currentFloor = this.getCurrentFloor();
        const lastSummarized = this.getLastSummarizedFloor();
        const pendingFloors = currentFloor - lastSummarized;

        this.log('debug', '收到新消息', {
            currentFloor,
            lastSummarized,
            pendingFloors,
            triggerAt: this.config.floorInterval,
        });

        // 检查是否达到触发条件
        if (pendingFloors >= this.config.floorInterval) {
            this.log('info', '达到触发条件，准备总结', {
                pendingFloors,
                interval: this.config.floorInterval,
            });
            await this.triggerSummary();
        }
    }

    /**
     * 处理聊天切换事件
     */
    private handleChatChanged(): void {
        const newChatId = this.getCurrentChatId();

        this.log('info', '聊天已切换', {
            from: this.currentChatId,
            to: newChatId,
        });

        // 重新初始化
        this.initializeForCurrentChat();
    }

    // ==================== 总结逻辑 ====================

    /**
     * 手动/自动触发总结
     */
    async triggerSummary(manual = false): Promise<SummaryResult | null> {
        if (this.isSummarizing) {
            this.log('warn', '正在执行总结，跳过本次触发');
            return null;
        }

        if (!this.config.enabled && !manual) {
            this.log('debug', '自动总结已禁用');
            return null;
        }

        const currentFloor = this.getCurrentFloor();
        const lastSummarized = this.getLastSummarizedFloor();

        this.isSummarizing = true;
        this.log('info', '开始执行总结', {
            floorRange: [lastSummarized + 1, currentFloor],
            manual,
        });

        try {
            // 获取待总结的消息
            const messages = MessageService.getMessages(lastSummarized, currentFloor);

            if (messages.length === 0) {
                this.log('warn', '没有待总结的消息');
                return null;
            }

            // 构建请求
            const request: SummarizeRequest = {
                messages: messages.map(m => ({
                    role: m.role,
                    content: m.content,
                    name: m.name,
                })),
                floorRange: [lastSummarized + 1, currentFloor],
            };

            // 1. 获取聊天记录并应用正则清洗
            const rawChatHistory = MessageService.formatMessagesAsText(messages);
            const cleanedChatHistory = regexProcessor.process(rawChatHistory);
            this.log('debug', '应用正则清洗', {
                originalLength: rawChatHistory.length,
                cleanedLength: cleanedChatHistory.length,
            });

            // 2. 获取世界书内容（使用新方法）
            let worldbookContext = '';
            try {
                const worldInfo = await WorldInfoService.getActivatedWorldInfo();
                if (worldInfo) {
                    worldbookContext = '【背景设定】\n' + worldInfo + '\n\n';
                    this.log('debug', '已加载世界书内容', { length: worldInfo.length });
                }
            } catch (e) {
                this.log('warn', '获取世界书失败', { error: String(e) });
            }

            // 3. 获取提示词模板（优先从 APIPresets 获取）
            const template = SettingsManager.getEnabledPromptTemplate('text_summary');
            const systemPrompt = template?.systemPrompt || FALLBACK_SUMMARY_PROMPT.system;
            const userPromptTemplate = template?.userPromptTemplate || FALLBACK_SUMMARY_PROMPT.user;

            // 构建最终提示词
            const userPrompt = userPromptTemplate
                .replace('{{worldbookContext}}', worldbookContext)
                .replace('{{chatHistory}}', cleanedChatHistory)
                .replace('{{context}}', worldbookContext);  // 兼容两种变量名

            this.log('debug', '使用提示词模板', {
                source: template ? 'APIPresets' : 'fallback',
                templateName: template?.name || 'default'
            });

            // 4. 记录到模型日志并调用 LLM
            const logId = ModelLogger.logSend({
                type: 'summarize',
                systemPrompt,
                userPrompt,
                floorRange: request.floorRange,
            });

            const startTime = Date.now();
            const response = await this.llmAdapter.generate({
                systemPrompt,
                userPrompt,
            });

            // 记录响应
            ModelLogger.logReceive(logId, {
                response: response.content,
                status: response.success ? 'success' : 'error',
                error: response.error,
                duration: Date.now() - startTime,
            });

            if (!response.success) {
                this.log('error', 'LLM 调用失败', { error: response.error });
                this.showNotification('error', `总结失败: ${response.error}`);
                return null;
            }

            // 清洗输出
            const cleanedContent = this.textProcessor.clean(response.content);

            // 计算 Token
            const tokenCount = await WorldInfoService.countTokens(cleanedContent);

            // 创建结果
            const result: SummaryResult = {
                content: cleanedContent,
                tokenCount,
                sourceFloors: request.floorRange,
                timestamp: Date.now(),
                writtenToWorldbook: false,
            };

            // 预览模式处理（暂时跳过，后续实现）
            if (this.config.previewEnabled) {
                this.log('info', '预览模式：等待用户确认', { result });
                // TODO: 弹出预览面板
            }

            // 写入世界书
            const writeSuccess = await this.writeToWorldbook(result);
            result.writtenToWorldbook = writeSuccess;

            // 更新状态 - 保存到聊天元数据
            this.setLastSummarizedFloor(currentFloor);
            this.summaryHistory.push(result);

            this.log('success', '总结完成', {
                tokens: tokenCount,
                floorRange: result.sourceFloors,
                newLastSummarized: currentFloor,
            });

            return result;
        } catch (e) {
            const errorMsg = e instanceof Error ? e.message : String(e);
            this.log('error', '总结执行异常', { error: errorMsg });
            this.showNotification('error', `总结异常: ${errorMsg}`);
            return null;
        } finally {
            this.isSummarizing = false;
        }
    }

    /**
     * 写入世界书
     */
    private async writeToWorldbook(result: SummaryResult): Promise<boolean> {
        try {
            const worldbookName = await WorldInfoService.getChatWorldbook();
            if (!worldbookName) {
                this.log('warn', '无法获取聊天世界书');
                return false;
            }

            const formattedContent = this.textProcessor.formatAsWorldEntry(
                result.content,
                {
                    floorRange: result.sourceFloors,
                    timestamp: result.timestamp,
                }
            );

            const success = await WorldInfoService.createEntry(worldbookName, {
                name: `剧情摘要_${result.sourceFloors[0]}-${result.sourceFloors[1]}`,
                content: formattedContent,
                enabled: true,
                constant: true,
            });

            if (success) {
                this.log('success', '已写入世界书', { worldbook: worldbookName });
            }

            return success;
        } catch (e) {
            this.log('error', '写入世界书失败', { error: String(e) });
            return false;
        }
    }

    // ==================== 状态查询 ====================

    /**
     * 获取当前状态
     */
    getStatus(): SummarizerStatus {
        const currentFloor = this.getCurrentFloor();
        const lastSummarized = this.getLastSummarizedFloor();

        return {
            running: this.isRunning,
            currentFloor,
            lastSummarizedFloor: lastSummarized,
            pendingFloors: Math.max(0, currentFloor - lastSummarized),
            historyCount: this.summaryHistory.length,
            isSummarizing: this.isSummarizing,
        };
    }

    /**
     * 刷新状态（强制重新读取）
     */
    refreshStatus(): SummarizerStatus {
        this.initializeForCurrentChat();
        return this.getStatus();
    }

    /**
     * 获取配置
     */
    getConfig(): SummarizerConfig {
        return { ...this.config };
    }

    /**
     * 更新配置
     */
    updateConfig(config: Partial<SummarizerConfig>): void {
        this.config = { ...this.config, ...config };
        this.log('info', '配置已更新', { config: this.config });
    }

    /**
     * 获取总结历史
     */
    getHistory(): SummaryResult[] {
        return [...this.summaryHistory];
    }

    /**
     * 重置基准楼层为当前楼层
     */
    resetBaseFloor(): void {
        const currentFloor = this.getCurrentFloor();
        this.setLastSummarizedFloor(currentFloor);
        this.log('info', '已重置基准楼层', { currentFloor });
    }

    // ==================== 工具方法 ====================

    /**
     * 记录日志
     */
    private async log(
        level: 'debug' | 'info' | 'success' | 'warn' | 'error',
        message: string,
        data?: unknown
    ): Promise<void> {
        try {
            const { Logger } = await import('../../infrastructure/logger');
            Logger[level]('Summarizer', message, data);
        } catch {
            console.log(`[Summarizer] ${level}: ${message}`, data);
        }
    }

    /**
     * 显示通知
     */
    private showNotification(type: 'success' | 'error' | 'warning' | 'info', message: string): void {
        try {
            // @ts-expect-error - toastr 全局对象
            const toastr = window.toastr;
            if (toastr?.[type]) {
                toastr[type](message, 'Engram');
            }
        } catch {
            console.log(`[Engram Notification] ${type}: ${message}`);
        }
    }
}

/** 默认实例 */
export const summarizerService = new SummarizerService();

export default SummarizerService;
