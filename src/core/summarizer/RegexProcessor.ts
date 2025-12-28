/**
 * RegexProcessor - 正则处理器
 * 
 * 提供可配置的正则规则，用于清洗聊天内容
 */

/** 正则规则定义 */
export interface RegexRule {
    /** 唯一 ID */
    id: string;
    /** 规则名称 */
    name: string;
    /** 正则表达式 */
    pattern: string;
    /** 替换文本 */
    replacement: string;
    /** 是否启用 */
    enabled: boolean;
    /** 正则标志 (g, i, m, s) */
    flags: string;
    /** 描述 */
    description?: string;
}

/** 默认正则规则 */
export const DEFAULT_REGEX_RULES: RegexRule[] = [
    {
        id: 'remove-think',
        name: '移除思维链',
        pattern: '<think>[\\s\\S]*?</think>',
        replacement: '',
        enabled: true,
        flags: 'gi',
        description: '移除 <think>...</think> 标签及其内容',
    },
    {
        id: 'remove-inner-monologue',
        name: '移除内心独白',
        pattern: '<inner_monologue>[\\s\\S]*?</inner_monologue>',
        replacement: '',
        enabled: true,
        flags: 'gi',
        description: '移除 <inner_monologue>...</inner_monologue> 标签',
    },
    {
        id: 'remove-system-note',
        name: '移除系统标记',
        pattern: '\\[System:.*?\\]',
        replacement: '',
        enabled: true,
        flags: 'gi',
        description: '移除 [System:...] 格式的系统标记',
    },
    {
        id: 'remove-ooc',
        name: '移除 OOC 标记',
        pattern: '\\(OOC:.*?\\)',
        replacement: '',
        enabled: false,
        flags: 'gi',
        description: '移除 (OOC:...) 格式的元对话',
    },
    {
        id: 'remove-empty-lines',
        name: '合并空行',
        pattern: '\\n{3,}',
        replacement: '\n\n',
        enabled: true,
        flags: 'g',
        description: '将连续3个以上的换行合并为2个',
    },
];

/**
 * 正则处理器类
 */
export class RegexProcessor {
    private rules: RegexRule[] = [];

    constructor(rules?: RegexRule[]) {
        this.rules = rules || [...DEFAULT_REGEX_RULES];
    }

    /**
     * 应用所有启用的规则处理文本
     */
    process(text: string): string {
        let result = text;

        for (const rule of this.rules) {
            if (!rule.enabled) continue;

            try {
                const regex = new RegExp(rule.pattern, rule.flags);
                result = result.replace(regex, rule.replacement);
            } catch (e) {
                console.warn(`[RegexProcessor] 规则 "${rule.name}" 执行失败:`, e);
            }
        }

        return result;
    }

    /**
     * 使用指定规则处理文本（用于预览）
     */
    processWithRule(text: string, rule: RegexRule): string {
        try {
            const regex = new RegExp(rule.pattern, rule.flags);
            return text.replace(regex, rule.replacement);
        } catch (e) {
            console.warn(`[RegexProcessor] 规则执行失败:`, e);
            return text;
        }
    }

    /**
     * 验证正则表达式是否有效
     */
    validatePattern(pattern: string, flags: string): { valid: boolean; error?: string } {
        try {
            new RegExp(pattern, flags);
            return { valid: true };
        } catch (e) {
            return {
                valid: false,
                error: e instanceof Error ? e.message : '无效的正则表达式',
            };
        }
    }

    /**
     * 获取所有规则
     */
    getRules(): RegexRule[] {
        return [...this.rules];
    }

    /**
     * 设置规则
     */
    setRules(rules: RegexRule[]): void {
        this.rules = [...rules];
    }

    /**
     * 添加规则
     */
    addRule(rule: RegexRule): void {
        this.rules.push(rule);
    }

    /**
     * 更新规则
     */
    updateRule(id: string, updates: Partial<RegexRule>): void {
        const index = this.rules.findIndex(r => r.id === id);
        if (index >= 0) {
            this.rules[index] = { ...this.rules[index], ...updates };
        }
    }

    /**
     * 删除规则
     */
    deleteRule(id: string): void {
        this.rules = this.rules.filter(r => r.id !== id);
    }

    /**
     * 启用/禁用规则
     */
    toggleRule(id: string): void {
        const rule = this.rules.find(r => r.id === id);
        if (rule) {
            rule.enabled = !rule.enabled;
        }
    }

    /**
     * 重置为默认规则
     */
    resetToDefaults(): void {
        this.rules = [...DEFAULT_REGEX_RULES];
    }

    /**
     * 获取启用的规则数量
     */
    getEnabledCount(): number {
        return this.rules.filter(r => r.enabled).length;
    }
}

/** 默认实例 */
export const regexProcessor = new RegexProcessor();

export default RegexProcessor;
