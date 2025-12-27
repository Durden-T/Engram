/**
 * Engram API 配置类型定义
 */

// ==================== LLM 预设 ====================

/**
 * LLM 预设配置
 */
export interface LLMPreset {
    /** 唯一标识 */
    id: string;
    /** 预设名称 */
    name: string;
    /** 配置源：使用酒馆当前配置、酒馆的 connection_profile 或自定义 */
    source: 'tavern' | 'tavern_profile' | 'custom';
    /** 选择的酒馆 connection_profile ID（仅当 source === 'tavern_profile' 时有效） */
    tavernProfileId?: string;
    /** 自定义 API 配置（仅当 source === 'custom' 时有效） */
    custom?: CustomAPIConfig;
    /** 模型采样参数 */
    parameters: SamplingParameters;
    /** 上下文设置 */
    context: ContextSettings;
    /** 是否为默认预设 */
    isDefault?: boolean;
    /** 创建时间 */
    createdAt: number;
    /** 更新时间 */
    updatedAt: number;
}


/**
 * 自定义 API 配置
 */
export interface CustomAPIConfig {
    /** API 端点 URL */
    apiUrl: string;
    /** API Key */
    apiKey: string;
    /** 模型名称 */
    model: string;
    /** API 类型/协议 */
    apiSource: APISource;
}

/**
 * 支持的 API 类型
 */
export type APISource = 'openai' | 'anthropic' | 'ollama' | 'vllm' | 'azure' | 'custom';

/**
 * 模型采样参数
 */
export interface SamplingParameters {
    /** 温度 (0-2) */
    temperature: number;
    /** Top-P 采样 (0-1) */
    topP: number;
    /** 最大输出 tokens */
    maxTokens: number;
    /** 频率惩罚 (-2 到 2) */
    frequencyPenalty: number;
    /** 存在惩罚 (-2 到 2) */
    presencePenalty: number;
}

/**
 * 上下文设置
 */
export interface ContextSettings {
    /** 使用多少条聊天历史 (-1 表示全部) */
    maxChatHistory: number;
    /** 是否包含世界书设定 */
    includeWorldInfo: boolean;
    /** 世界书 token 预算 */
    worldInfoBudget: number;
}

// ==================== 向量化配置 ====================

/**
 * 向量化配置
 */
export interface VectorConfig {
    /** 向量源 */
    source: VectorSource;
    /** API 端点（部分源需要） */
    apiUrl?: string;
    /** API Key（部分源需要） */
    apiKey?: string;
    /** 模型名称 */
    model?: string;
    /** 向量维度 */
    dimensions?: number;
}

/**
 * 支持的向量源
 */
export type VectorSource =
    | 'transformers'  // 本地 transformers
    | 'openai'        // OpenAI Embeddings API
    | 'ollama'        // Ollama
    | 'vllm'          // vLLM
    | 'cohere'        // Cohere
    | 'jina'          // Jina AI
    | 'voyage';       // Voyage AI

// ==================== Rerank 配置 ====================

/**
 * Rerank 配置
 */
export interface RerankConfig {
    /** 是否启用 */
    enabled: boolean;
    /** API 端点 */
    url: string;
    /** API Key */
    apiKey: string;
    /** 模型名称 */
    model: string;
    /** 返回的结果数量 */
    topN: number;
    /** 混合评分权重 (0-1, 0=纯向量, 1=纯Rerank) */
    hybridAlpha: number;
}

// ==================== 完整配置 ====================

/**
 * Engram API 配置（完整）
 */
export interface EngramAPISettings {
    /** LLM 预设列表 */
    llmPresets: LLMPreset[];
    /** 当前选中的 LLM 预设 ID */
    selectedPresetId: string | null;
    /** 向量化配置 */
    vectorConfig: VectorConfig;
    /** Rerank 配置 */
    rerankConfig: RerankConfig;
}

// ==================== 默认值 ====================

/**
 * 默认采样参数
 */
export const DEFAULT_SAMPLING_PARAMETERS: SamplingParameters = {
    temperature: 0.7,
    topP: 0.95,
    maxTokens: 2048,
    frequencyPenalty: 0,
    presencePenalty: 0,
};

/**
 * 默认上下文设置
 */
export const DEFAULT_CONTEXT_SETTINGS: ContextSettings = {
    maxChatHistory: 10,
    includeWorldInfo: true,
    worldInfoBudget: 2048,
};

/**
 * 默认向量化配置
 */
export const DEFAULT_VECTOR_CONFIG: VectorConfig = {
    source: 'transformers',
};

/**
 * 默认 Rerank 配置
 */
export const DEFAULT_RERANK_CONFIG: RerankConfig = {
    enabled: false,
    url: '',
    apiKey: '',
    model: '',
    topN: 5,
    hybridAlpha: 0.5,
};

/**
 * 创建默认 LLM 预设
 */
export function createDefaultLLMPreset(name: string = '默认预设'): LLMPreset {
    const now = Date.now();
    return {
        id: `preset_${now}`,
        name,
        source: 'tavern',
        parameters: { ...DEFAULT_SAMPLING_PARAMETERS },
        context: { ...DEFAULT_CONTEXT_SETTINGS },
        isDefault: true,
        createdAt: now,
        updatedAt: now,
    };
}

/**
 * 获取默认 API 设置
 */
export function getDefaultAPISettings(): EngramAPISettings {
    return {
        llmPresets: [createDefaultLLMPreset()],
        selectedPresetId: null,
        vectorConfig: { ...DEFAULT_VECTOR_CONFIG },
        rerankConfig: { ...DEFAULT_RERANK_CONFIG },
    };
}
