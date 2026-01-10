/**
 * Injector Service V0.7
 *
 * 使用 GENERATE_BEFORE_COMBINE_PROMPTS 事件进行 RAG 注入
 * 这个事件是 await 的，所以我们的异步操作会在 prompt 组合之前完成
 */

import { EventBus, TavernEventType } from '@/tavern/api';
import { getCurrentChatId, getSTContext } from '@/tavern/context';
import { retriever } from './Retriever';
import { MacroService } from '@/tavern/MacroService';
import { Logger } from '@/lib/logger';

/**
 * GENERATE_BEFORE_COMBINE_PROMPTS 事件数据类型
 */
interface GenerateBeforeCombineData {
    api: string;
    combinedPrompt: string | null;
    description: string;
    personality: string;
    persona: string;
    scenario: string;
    char: string;
    user: string;
    worldInfoBefore: string;
    worldInfoAfter: string;
    mesSendString: string;
    finalMesSend: Array<{ message: string; extensionPrompts: string[] }>;
    // ... 其他字段
}

export class Injector {
    private isInitialized = false;

    /**
     * Initialize the Injector
     */
    public init() {
        if (this.isInitialized) return;

        // V0.7: 使用 GENERATE_BEFORE_COMBINE_PROMPTS 进行 RAG 注入
        // 这个事件是 await 的，确保我们的异步操作完成后再继续生成
        EventBus.on(
            TavernEventType.GENERATE_BEFORE_COMBINE_PROMPTS,
            (data: unknown) => this.handleBeforeCombinePrompts(data as GenerateBeforeCombineData)
        );

        // 聊天切换时清空 RAG 缓存
        EventBus.on(TavernEventType.CHAT_CHANGED, this.handleChatChanged.bind(this));

        this.isInitialized = true;
        console.log('[Injector] V0.7 Initialized with GENERATE_BEFORE_COMBINE_PROMPTS hook.');
    }

    /**
     * 获取用户最新消息
     */
    private getLastUserMessage(): string {
        const ctx = getSTContext();
        if (!ctx || !ctx.chat || ctx.chat.length === 0) {
            return '';
        }

        // 从后往前找最近的用户消息
        for (let i = ctx.chat.length - 1; i >= 0; i--) {
            const msg = ctx.chat[i];
            if (msg.is_user && !msg.is_hidden && msg.mes) {
                return msg.mes;
            }
        }

        return '';
    }

    /**
     * V0.7: 核心 RAG 注入逻辑
     * 在 prompt 组合之前触发，此时更新宏缓存
     */
    private async handleBeforeCombinePrompts(_data: GenerateBeforeCombineData) {
        try {
            const chatId = getCurrentChatId();
            if (!chatId) {
                return;
            }

            // 获取用户最新消息作为 RAG query
            const query = this.getLastUserMessage();

            // 使用 retriever 检索相关记忆
            // TODO: 后续实现 vectorSearch，目前使用 rollingSearch
            const retrievalResult = await retriever.search(query);

            // 如果没有事件，清空 RAG 缓存
            if (retrievalResult.entries.length === 0) {
                MacroService.updateRAGCache('');
                return;
            }

            // 格式化并更新宏缓存
            // 注意：这里的结果已经按照 source_range 排序
            const contextText = `<engram_rag>\n${retrievalResult.entries.join('\n')}\n</engram_rag>`;
            MacroService.updateRAGCache(contextText);

            Logger.debug('Injector', 'RAG 缓存已更新 (BEFORE_COMBINE_PROMPTS)', {
                entryCount: retrievalResult.entries.length,
                query: query.slice(0, 50) + (query.length > 50 ? '...' : '')
            });

        } catch (e) {
            console.error('[Injector] Failed to inject RAG context:', e);
        }
    }

    /**
     * Handle chat change - clear RAG cache
     */
    private handleChatChanged() {
        // 切换聊天时清空 RAG 缓存
        MacroService.updateRAGCache('');
    }

    /**
     * 手动刷新 RAG 上下文
     */
    public async refreshRAGContext() {
        const query = this.getLastUserMessage();
        const retrievalResult = await retriever.search(query);

        if (retrievalResult.entries.length === 0) {
            MacroService.updateRAGCache('');
            return;
        }

        const contextText = `<engram_rag>\n${retrievalResult.entries.join('\n')}\n</engram_rag>`;
        MacroService.updateRAGCache(contextText);

        Logger.debug('Injector', 'RAG 缓存已手动刷新', {
            entryCount: retrievalResult.entries.length
        });
    }
}

export const injector = new Injector();
