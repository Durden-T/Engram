/**
 * Injector Service
 *
 * V0.6: 使用宏而非世界书条目进行 RAG 注入
 * 监听消息事件，触发检索并更新 {{engramRAGSummaries}} 宏缓存
 */

import { EventBus, TavernEventType } from '@/tavern/api';
import { getCurrentChatId } from '@/tavern/context';
import { retriever } from './Retriever';
import { MacroService } from '@/tavern/MacroService';
import { Logger } from '@/lib/logger';

export class Injector {
    private isInitialized = false;

    /**
     * Initialize the Injector
     */
    public init() {
        if (this.isInitialized) return;

        // Hook into relevant events
        EventBus.on(TavernEventType.MESSAGE_RECEIVED, this.handleMessageReceived.bind(this));
        EventBus.on(TavernEventType.CHAT_CHANGED, this.handleChatChanged.bind(this));

        this.isInitialized = true;
        console.log('[Injector] Initialized.');
    }

    /**
     * Handle new user message - trigger RAG retrieval
     */
    private async handleMessageReceived() {
        await this.refreshRAGContext();
    }

    /**
     * Handle chat change - clear RAG cache
     */
    private handleChatChanged() {
        // 切换聊天时清空 RAG 缓存
        MacroService.updateRAGCache('');
    }

    /**
     * Refresh RAG Context - 检索相关记忆并更新宏缓存
     */
    public async refreshRAGContext() {
        try {
            const chatId = getCurrentChatId();
            if (!chatId) {
                return;
            }

            // 使用 retriever 检索相关记忆
            const retrievalResult = await retriever.search('');

            // 如果没有事件，清空 RAG 缓存
            if (retrievalResult.entries.length === 0) {
                MacroService.updateRAGCache('');
                return;
            }

            // 格式化并更新宏缓存
            const contextText = `<engram_rag>\n${retrievalResult.entries.join('\n')}\n</engram_rag>`;
            MacroService.updateRAGCache(contextText);

            Logger.debug('Injector', 'RAG 缓存已更新', {
                entryCount: retrievalResult.entries.length
            });

        } catch (e) {
            console.error('[Injector] Failed to refresh RAG context:', e);
        }
    }
}

export const injector = new Injector();
