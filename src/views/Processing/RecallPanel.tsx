/**
 * RecallPanel - RAG 召回配置面板
 *
 * V0.8.5: 提供召回模式选择和 Embedding 参数配置
 */

import React, { useState, useEffect } from 'react';
import { Search, Zap, Battery, Cpu, ArrowRight } from 'lucide-react';
import { SettingsManager } from '@/services/settings/Persistence';
import { FormSection, NumberField, SwitchField, SelectField } from '@/views/APIPresets/components/FormField';
import type { RecallConfig, RecallMode } from '@/services/api/types';
import { DEFAULT_RECALL_CONFIG } from '@/services/api/types';
import { Logger } from '@/lib/logger';

// 召回模式选项
const RECALL_MODE_OPTIONS: { value: RecallMode; label: string; icon: React.ElementType; description: string }[] = [
    { value: 'full', label: '💎 顶配', icon: Search, description: '预处理 + Embedding + Rerank' },
    { value: 'standard', label: '⚡ 标准', icon: Zap, description: 'Embedding + Rerank' },
    { value: 'light', label: '🔋 轻量', icon: Battery, description: '仅 Embedding' },
    { value: 'llm_only', label: '🧱 暴力', icon: Cpu, description: 'LLM 直接召回 (开发中)' },
];

export const RecallPanel: React.FC = () => {
    const [config, setConfig] = useState<RecallConfig>(DEFAULT_RECALL_CONFIG);
    const [rerankEnabled, setRerankEnabled] = useState(false);

    // 加载配置
    useEffect(() => {
        const apiSettings = SettingsManager.get('apiSettings');
        if (apiSettings?.recallConfig) {
            setConfig(apiSettings.recallConfig);
        }
        if (apiSettings?.rerankConfig) {
            setRerankEnabled(apiSettings.rerankConfig.enabled);
        }
    }, []);

    // 保存配置
    const saveConfig = (updates: Partial<RecallConfig>) => {
        const newConfig = { ...config, ...updates };
        setConfig(newConfig);

        const apiSettings = SettingsManager.get('apiSettings');
        if (apiSettings) {
            SettingsManager.set('apiSettings', {
                ...apiSettings,
                recallConfig: newConfig,
            });
            Logger.debug('RecallPanel', '召回配置已保存', newConfig);
        }
    };

    // 更新嵌套的 embedding 配置
    const updateEmbeddingConfig = (updates: Partial<RecallConfig['embedding']>) => {
        saveConfig({
            embedding: { ...config.embedding, ...updates }
        });
    };

    return (
        <div className="space-y-6">
            {/* 启用开关 */}
            <FormSection title="RAG 召回" description="启用基于向量相似度的记忆召回">
                <SwitchField
                    label="启用召回"
                    checked={config.enabled}
                    onChange={(value) => saveConfig({ enabled: value })}
                    description="开启后，发送消息时会自动检索相关记忆"
                />
            </FormSection>

            {config.enabled && (
                <>
                    {/* 召回模式 */}
                    <FormSection title="召回模式" description="选择适合你的召回方案">
                        <div className="grid grid-cols-2 gap-3">
                            {RECALL_MODE_OPTIONS.map((option) => {
                                const isActive = config.mode === option.value;
                                const isDisabled = option.value === 'llm_only';

                                return (
                                    <button
                                        key={option.value}
                                        type="button"
                                        disabled={isDisabled}
                                        onClick={() => saveConfig({ mode: option.value })}
                                        className={`
                                            p-3 rounded-lg border text-left transition-all
                                            ${isActive
                                                ? 'border-primary bg-primary/10 text-foreground'
                                                : 'border-border bg-card text-muted-foreground hover:border-primary/50'
                                            }
                                            ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                                        `}
                                    >
                                        <div className="font-medium text-sm">{option.label}</div>
                                        <div className="text-xs opacity-70 mt-1">{option.description}</div>
                                    </button>
                                );
                            })}
                        </div>
                    </FormSection>

                    {/* Embedding 设置 */}
                    <FormSection title="Embedding 参数" description="调整向量检索行为">
                        <NumberField
                            label="Top-K 初筛"
                            value={config.embedding.topK}
                            onChange={(value) => updateEmbeddingConfig({ topK: value })}
                            min={1}
                            max={100}
                            step={1}
                            description="向量检索返回的最大候选数量"
                        />

                        <NumberField
                            label="最低相似度阈值"
                            value={config.embedding.minScoreThreshold}
                            onChange={(value) => updateEmbeddingConfig({ minScoreThreshold: value })}
                            min={0}
                            max={1}
                            step={0.05}
                            description="低于此阈值的结果将被过滤 (0-1)"
                        />
                    </FormSection>

                    {/* Rerank 状态 */}
                    {(config.mode === 'full' || config.mode === 'standard') && (
                        <FormSection
                            title="Rerank 重排序"
                            description={rerankEnabled ? "已在 API 配置中启用" : "未启用 - 请在 API 配置 → Rerank 中设置"}
                        >
                            <div className={`
                                flex items-center gap-3 p-3 rounded-lg border
                                ${rerankEnabled ? 'border-green-500/30 bg-green-500/10' : 'border-yellow-500/30 bg-yellow-500/10'}
                            `}>
                                <div className={`
                                    w-3 h-3 rounded-full
                                    ${rerankEnabled ? 'bg-green-500' : 'bg-yellow-500'}
                                `} />
                                <div className="flex-1">
                                    <span className="text-sm">
                                        {rerankEnabled ? 'Rerank 已配置并启用' : 'Rerank 未配置'}
                                    </span>
                                </div>
                                {!rerankEnabled && (
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            // 这里可以添加跳转逻辑
                                        }}
                                        className="text-xs text-primary flex items-center gap-1 hover:underline"
                                    >
                                        前往配置 <ArrowRight size={12} />
                                    </a>
                                )}
                            </div>
                        </FormSection>
                    )}

                    {/* 提示信息 */}
                    <div className="text-xs text-muted-foreground p-3 bg-muted/30 rounded-lg">
                        <p className="font-medium mb-1">💡 使用提示</p>
                        <ul className="list-disc list-inside space-y-1 opacity-80">
                            <li>确保已在 "向量化" 页面对事件进行嵌入</li>
                            <li>启用预处理的 Query 增强模板可提高检索效果</li>
                            <li>Rerank 需要额外的 API 服务，但可以提高精度</li>
                        </ul>
                    </div>
                </>
            )}
        </div>
    );
};

export default RecallPanel;
