/**
 * WorldInfoService - SillyTavern 世界书服务封装
 * 
 * 提供世界书操作和 Token 计数功能
 */

/** 世界书条目位置类型 */
export type WorldInfoPosition =
    | 'before_character_definition'
    | 'after_character_definition'
    | 'before_example_messages'
    | 'after_example_messages'
    | 'at_depth';

/** 世界书条目策略类型 */
export type WorldInfoStrategy = 'constant' | 'selective' | 'vectorized';

/** 世界书条目角色 */
export type WorldInfoRole = 'system' | 'assistant' | 'user';

/** 创建世界书条目的参数 */
export interface CreateWorldInfoEntryParams {
    /** 条目名称 */
    name: string;
    /** 条目内容 */
    content: string;
    /** 是否启用 */
    enabled?: boolean;
    /** 是否常亮（蓝灯） */
    constant?: boolean;
    /** 触发关键词 */
    keys?: string[];
    /** 次要关键词 */
    keysSecondary?: string[];
    /** 位置类型 */
    position?: WorldInfoPosition;
    /** 角色 */
    role?: WorldInfoRole;
    /** 深度 */
    depth?: number;
    /** 排序权重 */
    order?: number;
    /** 触发概率 */
    probability?: number;
}

/** 世界书条目 */
export interface WorldInfoEntry {
    uid: number;
    name: string;
    content: string;
    enabled: boolean;
    constant: boolean;
    keys: string[];
    position: WorldInfoPosition;
    depth: number;
    order: number;
    tokenCount?: number;
}

/** 世界书 Token 统计 */
export interface WorldInfoTokenStats {
    totalTokens: number;
    entryCount: number;
    entries: Array<{ name: string; tokens: number }>;
}

/**
 * 获取 SillyTavern 的 tokenizers 模块
 */
async function getTokenCountAsync(text: string): Promise<number> {
    try {
        // @ts-expect-error - SillyTavern 全局对象
        const SillyTavern = window.SillyTavern;
        if (SillyTavern?.getContext) {
            const context = SillyTavern.getContext();
            if (context?.getTokenCountAsync) {
                return await context.getTokenCountAsync(text);
            }
        }

        // fallback: 字符估算 (约 4 字符 = 1 token)
        return Math.ceil(text.length / 4);
    } catch {
        console.warn('[Engram] WorldInfoService: 无法使用酒馆 Token 计数，使用估算');
        return Math.ceil(text.length / 4);
    }
}

/**
 * 获取 TavernHelper API (如果可用)
 */
function getTavernHelper(): {
    getOrCreateChatWorldbook?: (mode: 'current' | 'character') => Promise<string>;
    getWorldbook?: (name: string) => Promise<unknown[]>;
    createWorldbookEntries?: (name: string, entries: unknown[]) => Promise<void>;
    replaceWorldbook?: (name: string, entries: unknown[]) => Promise<void>;
} | null {
    try {
        // @ts-expect-error - TavernHelper 全局对象
        return window.TavernHelper || null;
    } catch {
        return null;
    }
}

/**
 * WorldInfoService 类
 * 提供世界书操作和 Token 计数功能
 */
export class WorldInfoService {
    /**
     * 计算文本的 Token 数量
     * @param text 文本内容
     */
    static async countTokens(text: string): Promise<number> {
        return getTokenCountAsync(text);
    }

    /**
     * 批量计算多段文本的 Token 数量
     * @param texts 文本数组
     */
    static async countTokensBatch(texts: string[]): Promise<number[]> {
        return Promise.all(texts.map(t => getTokenCountAsync(t)));
    }

    /**
     * 获取当前聊天的绑定世界书名称
     * 使用自定义命名规则：角色name2_Engram_聊天文件名
     */
    static async getChatWorldbook(): Promise<string | null> {
        try {
            // 获取上下文信息用于生成自定义名称
            // @ts-expect-error - SillyTavern 全局对象
            const context = window.SillyTavern?.getContext?.();
            if (!context) {
                console.warn('[Engram] WorldInfoService: 无法获取 ST 上下文');
                // 回退到 TavernHelper 默认行为
                const helper = getTavernHelper();
                if (helper?.getOrCreateChatWorldbook) {
                    return await helper.getOrCreateChatWorldbook('current');
                }
                return null;
            }

            const characterName = context.name2 || 'Unknown';
            // chatId 通常就是聊天文件名（不含扩展名）
            const chatFileName = context.chatId || 'chat';

            // 生成自定义世界书名称：角色名_Engram_聊天文件名
            const worldbookName = `${characterName}_Engram_${chatFileName}`
                .replace(/[<>:"/\\|?*]/g, '_')  // 移除非法文件名字符
                .replace(/\s+/g, '_')           // 空格转下划线
                .substring(0, 100);             // 限制长度

            console.debug('[Engram] WorldInfoService: 使用世界书名称', worldbookName);

            // 确保世界书存在（通过创建空条目来初始化）
            const helper = getTavernHelper();
            if (helper?.createWorldbookEntries) {
                try {
                    // createWorldbookEntries 会自动创建不存在的世界书
                    // 传入空数组不会添加条目，只是确保世界书存在
                    await helper.createWorldbookEntries(worldbookName, []);
                } catch (e) {
                    console.debug('[Engram] 世界书可能已存在:', e);
                }
            }

            return worldbookName;
        } catch (e) {
            console.error('[Engram] WorldInfoService: 获取聊天世界书失败', e);
            return null;
        }
    }

    /**
     * 获取世界书的所有条目
     * @param worldbookName 世界书名称
     */
    static async getEntries(worldbookName: string): Promise<WorldInfoEntry[]> {
        const helper = getTavernHelper();
        if (!helper?.getWorldbook) {
            console.warn('[Engram] WorldInfoService: TavernHelper 不可用');
            return [];
        }

        try {
            const entries = await helper.getWorldbook(worldbookName);
            // 简化转换，实际结构可能更复杂
            return (entries as unknown[]).map((e: unknown) => {
                const entry = e as Record<string, unknown>;
                return {
                    uid: entry.uid as number || 0,
                    name: entry.name as string || '',
                    content: entry.content as string || '',
                    enabled: entry.enabled as boolean ?? true,
                    constant: entry.constant as boolean ?? false,
                    keys: (entry.key as string[]) || [],
                    position: (entry.position as WorldInfoPosition) || 'before_character_definition',
                    depth: entry.depth as number || 0,
                    order: entry.order as number || 100,
                };
            });
        } catch (e) {
            console.error('[Engram] WorldInfoService: 获取世界书条目失败', e);
            return [];
        }
    }

    /**
     * 创建新的世界书条目
     * @param worldbookName 世界书名称
     * @param params 条目参数
     */
    static async createEntry(worldbookName: string, params: CreateWorldInfoEntryParams): Promise<boolean> {
        const helper = getTavernHelper();
        if (!helper?.createWorldbookEntries) {
            console.warn('[Engram] WorldInfoService: TavernHelper 不可用');
            return false;
        }

        try {
            const entry = {
                name: params.name,
                content: params.content,
                enabled: params.enabled ?? true,
                strategy: {
                    type: params.constant ? 'constant' : 'selective',
                    keys: params.keys || [],
                    keys_secondary: {
                        logic: 'and_any',
                        keys: params.keysSecondary || [],
                    },
                    scan_depth: 'same_as_global',
                },
                position: {
                    type: params.position || 'before_character_definition',
                    role: params.role || 'system',
                    depth: params.depth || 0,
                    order: params.order || 100,
                },
                probability: params.probability || 100,
            };

            await helper.createWorldbookEntries(worldbookName, [entry]);
            return true;
        } catch (e) {
            console.error('[Engram] WorldInfoService: 创建世界书条目失败', e);
            return false;
        }
    }

    /**
     * 获取世界书的 Token 统计
     * @param worldbookName 世界书名称
     */
    static async getWorldbookTokenStats(worldbookName: string): Promise<WorldInfoTokenStats> {
        const entries = await this.getEntries(worldbookName);

        const entriesWithTokens = await Promise.all(
            entries.map(async (e) => ({
                name: e.name,
                tokens: await this.countTokens(e.content),
            }))
        );

        const totalTokens = entriesWithTokens.reduce((sum, e) => sum + e.tokens, 0);

        return {
            totalTokens,
            entryCount: entries.length,
            entries: entriesWithTokens,
        };
    }

    /**
     * 检查 WorldInfoService 是否可用
     */
    static isAvailable(): boolean {
        return getTavernHelper() !== null;
    }

    /**
     * 检查 Token 计数是否使用酒馆原生 API
     */
    static async isNativeTokenCountAvailable(): Promise<boolean> {
        try {
            // @ts-expect-error - SillyTavern 全局对象
            const SillyTavern = window.SillyTavern;
            if (SillyTavern?.getContext) {
                const context = SillyTavern.getContext();
                return typeof context?.getTokenCountAsync === 'function';
            }
            return false;
        } catch {
            return false;
        }
    }

    /**
     * 获取所有激活的世界书条目内容（用于总结）
     * 使用酒馆原生 getWorldInfoPrompt 进行扫描，获取所有激活的条目
     * 支持：蓝灯（常驻）+ 绿灯（关键词触发）
     * 
     * @param chatMessages 可选，用于关键词扫描的聊天消息
     * @returns 格式化后的世界书内容字符串
     */
    static async getActivatedWorldInfo(chatMessages?: string[]): Promise<string> {
        try {
            // 使用运行时动态导入绕过 Rollup 的静态分析
            const importPath = '/scripts/world-info.js';
            // @ts-expect-error - 动态导入酒馆模块
            const worldInfoModule = await (new Function('path', 'return import(path)'))(importPath);
            const getWorldInfoPrompt = worldInfoModule?.getWorldInfoPrompt;

            if (typeof getWorldInfoPrompt !== 'function') {
                console.warn('[Engram] WorldInfoService: getWorldInfoPrompt 不可用，回退到常驻条目');
                return this.getConstantWorldInfo();
            }

            // 获取聊天消息用于关键词扫描
            let messages = chatMessages;
            if (!messages || messages.length === 0) {
                // 从酒馆上下文获取聊天记录
                // @ts-expect-error - 酒馆全局对象
                const context = window.SillyTavern?.getContext?.();
                if (context?.chat && Array.isArray(context.chat)) {
                    messages = context.chat.map((m: { mes?: string }) => m.mes || '').reverse();
                }
            }

            if (!messages || messages.length === 0) {
                console.warn('[Engram] WorldInfoService: 无聊天消息，回退到常驻条目');
                return this.getConstantWorldInfo();
            }

            // 调用世界书扫描（isDryRun=true 不触发额外事件）
            const maxContext = 8192; // 默认上下文大小
            const result = await getWorldInfoPrompt(messages, maxContext, true, {
                trigger: 'normal'
            });

            // 合并 before 和 after 位置的世界书内容
            const worldInfo = [
                result?.worldInfoBefore || '',
                result?.worldInfoAfter || ''
            ].filter(Boolean).join('\n\n').trim();

            if (worldInfo) {
                console.debug(`[Engram] WorldInfoService: 获取到激活的世界书内容 (${worldInfo.length} 字符)`);
            }

            return worldInfo;
        } catch (e) {
            console.warn('[Engram] WorldInfoService: 获取世界书失败，回退到常驻条目', e);
            return this.getConstantWorldInfo();
        }
    }

    /**
     * 获取常驻激活的世界书条目（蓝灯）
     * 作为 getActivatedWorldInfo 的回退方案
     */
    private static async getConstantWorldInfo(): Promise<string> {
        try {
            const importPath = '/scripts/world-info.js';
            // @ts-expect-error - 动态导入酒馆模块
            const worldInfoModule = await (new Function('path', 'return import(path)'))(importPath);
            const getSortedEntries = worldInfoModule?.getSortedEntries;

            if (typeof getSortedEntries !== 'function') {
                return '';
            }

            const entries = await getSortedEntries();
            if (!entries || !Array.isArray(entries)) {
                return '';
            }

            const constantEntries = entries.filter((e: {
                constant?: boolean;
                disable?: boolean;
                content?: string;
            }) => e.constant === true && e.disable !== true && e.content);

            if (constantEntries.length === 0) {
                return '';
            }

            console.debug(`[Engram] WorldInfoService: 回退获取 ${constantEntries.length} 个常驻条目`);
            return constantEntries.map((e: { content: string }) => e.content).join('\n\n');
        } catch {
            return '';
        }
    }
}

export default WorldInfoService;
