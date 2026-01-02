/**
 * LLMAdapter - LLM 调用适配器
 * 
 * 封装对 SillyTavern/TavernHelper LLM API 的调用
 * 
 * 通用服务：可被 Summarizer、RAG、Graph 等模块复用
 */

/** LLM 生成请求 */
export interface LLMRequest {
    /** 系统提示词 */
    systemPrompt: string;
    /** 用户提示词 */
    userPrompt: string;
    /** 预设 ID */
    presetId?: string;
}

/** LLM 生成响应 */
export interface LLMResponse {
    /** 生成内容 */
    content: string;
    /** 是否成功 */
    success: boolean;
    /** 错误信息 */
    error?: string;
    /** Token 使用量 */
    tokenUsage?: {
        prompt: number;
        completion: number;
        total: number;
    };
}

/**
 * 获取 TavernHelper API
 */
function getTavernHelper(): {
    generate?: (options: unknown) => Promise<string>;
    generateRaw?: (options: unknown) => Promise<string>;
} | null {
    try {
        // @ts-expect-error - TavernHelper 全局对象
        return window.TavernHelper || null;
    } catch {
        return null;
    }
}

/**
 * LLMAdapter 类
 * 封装 LLM 调用
 */
export class LLMAdapter {
    /**
     * 调用 LLM 生成
     * @param request 请求参数
     */
    async generate(request: LLMRequest): Promise<LLMResponse> {
        const helper = getTavernHelper();

        if (!helper?.generateRaw && !helper?.generate) {
            return {
                success: false,
                content: '',
                error: 'TavernHelper 不可用',
            };
        }

        try {
            let content: string;

            if (helper.generateRaw) {
                // 使用 generateRaw 进行完全自定义
                content = await helper.generateRaw({
                    ordered_prompts: [
                        { role: 'system', content: request.systemPrompt },
                        { role: 'user', content: request.userPrompt },
                    ],
                });
            } else if (helper.generate) {
                // fallback: 使用 generate
                content = await helper.generate({
                    user_input: request.userPrompt,
                    system_prompt: request.systemPrompt,
                    should_stream: false,
                    max_chat_history: 0,
                });
            } else {
                throw new Error('无可用的生成 API');
            }

            return {
                success: true,
                content: content || '',
            };
        } catch (e) {
            const errorMsg = e instanceof Error ? e.message : String(e);
            console.error('[Engram] LLMAdapter 调用失败:', e);

            return {
                success: false,
                content: '',
                error: errorMsg,
            };
        }
    }

    /**
     * 检查 LLM API 是否可用
     */
    isAvailable(): boolean {
        const helper = getTavernHelper();
        return !!(helper?.generate || helper?.generateRaw);
    }

    /**
     * 估算文本 Token 数（简单估算）
     * @param text 文本
     */
    estimateTokens(text: string): number {
        // 简单估算：中文约 2 字符/token，英文约 4 字符/token
        // 这里取平均值 3
        return Math.ceil(text.length / 3);
    }
}

/** 默认实例 */
export const llmAdapter = new LLMAdapter();

export default LLMAdapter;
