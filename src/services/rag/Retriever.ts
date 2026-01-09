/**
 * Retriever Service
 *
 * V0.6: Updated for multi-database architecture
 * Responsible for retrieving relevant memory Events.
 */

import { tryGetDbForChat } from '@/services/database/db';
import { getCurrentChatId } from '@/tavern/context';
import type { EventNode } from '@/services/types/graph';

export interface RetrievalResult {
    entries: string[]; // Formatted entries ready for injection
    nodes: EventNode[]; // Raw nodes
}

export class Retriever {
    /**
     * Search for context
     * @param query User's current message or search query
     * @param limit Max number of entries
     */
    async search(query: string, limit: number = 5): Promise<RetrievalResult> {
        // TODO: Check global config for RAG mode
        // For V0.4 Basic Mode, we rely on "Rolling Strategy"
        const enableRAG = false;

        if (enableRAG) {
            return this.vectorSearch(query, limit);
        } else {
            return this.rollingSearch(limit);
        }
    }

    /**
     * Basic Mode Strategy: "Infinite Context - Rolling Window"
     * Returns:
     * 1. The most recent Level 1 Summary (Overview of the past)
     * 2. The most recent N Level 0 Events (Detail of the present)
     */
    private async rollingSearch(limit: number): Promise<RetrievalResult> {
        const chatId = getCurrentChatId();
        if (!chatId) {
            return { entries: [], nodes: [] };
        }

        // V0.6: 使用 tryGetDbForChat 避免自动创建数据库
        const db = tryGetDbForChat(chatId);
        if (!db) {
            return { entries: [], nodes: [] };
        }

        // 1. Get recent Level 0 (Details)
        const recentEvents = await db.events
            .filter(node => node.level === 0)
            .reverse()
            .limit(limit)
            .toArray();

        // 2. Get latest Level 1 (Macro Context)
        const latestMacro = await db.events
            .filter(node => node.level === 1)
            .reverse()
            .first();

        const nodes: EventNode[] = [...recentEvents];
        if (latestMacro) {
            nodes.unshift(latestMacro);
        }

        // 3. Format entries
        const entries = nodes.map(node => node.summary);

        return { entries, nodes };
    }

    /**
     * Vector Search Mode (Placeholder - Requires embedding)
     */
    private async vectorSearch(query: string, limit: number): Promise<RetrievalResult> {
        console.warn('[Retriever] Vector search not yet implemented');
        // Fallback to rolling search
        return this.rollingSearch(limit);
    }
}

export const retriever = new Retriever();
