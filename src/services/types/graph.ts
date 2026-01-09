/**
 * Core Graph Data Types for Engram V0.6
 *
 * Multi-Database Architecture:
 * Each chat_id has its own database, so scope_id is no longer needed.
 */

/**
 * EventNode - The atom of memory
 * Represents a single processed event, either from raw chat or higher-level summary.
 *
 * V0.6: 移除 scope_id - 每个聊天有独立数据库，不需要分区字段
 */
export interface EventNode {
    /** UUID */
    id: string;

    /**
     * Burn-in Text (For Model)
     * High-density text ready for embedding and RAG injection.
     */
    summary: string;

    /**
     * Structured Data (For Machine)
     * JSON object for graph building, filtering, and logic.
     */
    structured_kv: {
        /** 时间锚点 - 保留原文时间格式 */
        time_anchor: string;
        role: string[];
        location: string;
        event: string;
        logic: string[];
        causality: string;
    };

    /**
     * Semantic Vector
     * Optional because "Basic Mode" users might not have embedding models.
     */
    embedding?: number[];

    /** Importance Score (0.0 - 1.0) */
    significance_score: number;

    /**
     * Abstraction Level
     * 0 = Raw Event (from Chat)
     * 1 = Meta Summary (Summary of Summaries)
     * ...
     */
    level: number;

    /** Optional pointer to a parent node (if this node was compressed into a level+1 node) */
    parent_id?: string;

    /** Source Message Range */
    source_range: {
        start_index: number;
        end_index: number;
    };

    timestamp: number;
}

/**
 * EntityNode - Graph Entities
 * Represents static or slowly changing entities (People, Places, Items).
 *
 * V0.6: 移除 scope_id - 每个聊天有独立数据库
 */
export interface EntityNode {
    id: string;
    name: string;
    type: string; // 'Character' | 'Location' | 'Item' | 'Concept'
    description: string;

    /** Associated Event IDs */
    related_events?: string[];

    last_updated_at: number;
}

/**
 * @deprecated V0.6: Scope 不再需要 - 每个聊天有独立数据库
 * 状态信息存储在 meta 表中
 */
export interface Scope {
    id?: number;
    uuid: string;
    chat_id: string;
    character_name: string;
    state: ScopeState;
    created_at: number;
    last_active_at: number;
}

/**
 * ScopeState - 存储在 meta 表中
 */
export interface ScopeState {
    last_summarized_floor: number;
    token_usage_accumulated: number;
    last_compressed_at: number;
    active_summary_order: number;
}

/**
 * 默认 ScopeState
 */
export const DEFAULT_SCOPE_STATE: ScopeState = {
    last_summarized_floor: 0,
    token_usage_accumulated: 0,
    last_compressed_at: 0,
    active_summary_order: 9000,
};
