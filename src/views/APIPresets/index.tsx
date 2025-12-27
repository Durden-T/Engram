/**
 * API 预设管理视图
 * 用于管理 LLM 预设、向量化配置和 Rerank 配置
 */
import React, { useState, useEffect } from 'react';
import { Key, Cpu, Layers, Plus, Save } from 'lucide-react';
import {
    PresetCard,
    LLMPresetForm,
    VectorConfigForm,
    RerankConfigForm,
} from './components';
import type {
    EngramAPISettings,
    LLMPreset,
    VectorConfig,
    RerankConfig,
} from './types';
import {
    getDefaultAPISettings,
    createDefaultLLMPreset,
    DEFAULT_VECTOR_CONFIG,
    DEFAULT_RERANK_CONFIG,
} from './types';
import styles from './styles.module.css';

// 标签页类型
type TabType = 'llm' | 'vector' | 'rerank';

// 标签页配置
const TABS: { id: TabType; label: string; icon: React.ElementType }[] = [
    { id: 'llm', label: 'LLM 预设', icon: Key },
    { id: 'vector', label: '向量化', icon: Cpu },
    { id: 'rerank', label: 'Rerank', icon: Layers },
];

interface APIPresetsProps {
    onNavigate?: (path: string) => void;
}

export const APIPresets: React.FC<APIPresetsProps> = () => {
    // 当前标签页
    const [activeTab, setActiveTab] = useState<TabType>('llm');

    // 配置状态
    const [settings, setSettings] = useState<EngramAPISettings>(getDefaultAPISettings);

    // 编辑状态
    const [editingPreset, setEditingPreset] = useState<LLMPreset | null>(null);
    const [hasChanges, setHasChanges] = useState(false);

    // 加载保存的配置
    useEffect(() => {
        // TODO: 从 extension_settings 加载
        // const saved = extension_settings.engram?.apiSettings;
        // if (saved) setSettings(saved);
    }, []);

    // ==================== LLM 预设操作 ====================

    const handleSelectPreset = (preset: LLMPreset) => {
        setSettings((prev) => ({
            ...prev,
            selectedPresetId: preset.id,
        }));
        setEditingPreset(preset);
    };

    const handleAddPreset = () => {
        const newPreset = createDefaultLLMPreset(`预设 ${settings.llmPresets.length + 1}`);
        newPreset.isDefault = false;
        setSettings((prev) => ({
            ...prev,
            llmPresets: [...prev.llmPresets, newPreset],
            selectedPresetId: newPreset.id,
        }));
        setEditingPreset(newPreset);
        setHasChanges(true);
    };

    const handleUpdatePreset = (updated: LLMPreset) => {
        setSettings((prev) => ({
            ...prev,
            llmPresets: prev.llmPresets.map((p) =>
                p.id === updated.id ? updated : p
            ),
        }));
        setEditingPreset(updated);
        setHasChanges(true);
    };

    const handleCopyPreset = (preset: LLMPreset) => {
        const copy: LLMPreset = {
            ...preset,
            id: `preset_${Date.now()}`,
            name: `${preset.name} (副本)`,
            isDefault: false,
            createdAt: Date.now(),
            updatedAt: Date.now(),
        };
        setSettings((prev) => ({
            ...prev,
            llmPresets: [...prev.llmPresets, copy],
        }));
        setHasChanges(true);
    };

    const handleDeletePreset = (preset: LLMPreset) => {
        if (preset.isDefault) return;
        setSettings((prev) => ({
            ...prev,
            llmPresets: prev.llmPresets.filter((p) => p.id !== preset.id),
            selectedPresetId:
                prev.selectedPresetId === preset.id ? null : prev.selectedPresetId,
        }));
        if (editingPreset?.id === preset.id) {
            setEditingPreset(null);
        }
        setHasChanges(true);
    };

    // ==================== 其他配置操作 ====================

    const handleVectorConfigChange = (config: VectorConfig) => {
        setSettings((prev) => ({ ...prev, vectorConfig: config }));
        setHasChanges(true);
    };

    const handleRerankConfigChange = (config: RerankConfig) => {
        setSettings((prev) => ({ ...prev, rerankConfig: config }));
        setHasChanges(true);
    };

    // ==================== 保存 ====================

    const handleSave = () => {
        // TODO: 保存到 extension_settings
        // extension_settings.engram = extension_settings.engram || {};
        // extension_settings.engram.apiSettings = settings;
        // saveSettingsDebounced();
        console.log('保存配置:', settings);
        setHasChanges(false);
    };

    // ==================== 渲染 ====================

    return (
        <div className={styles.container}>
            {/* 页面头部 */}
            <div className="engram-page-header">
                <Key size={24} />
                <h2>API 配置</h2>
                {hasChanges && (
                    <button className="engram-btn engram-btn-primary" onClick={handleSave}>
                        <Save size={16} />
                        保存更改
                    </button>
                )}
            </div>

            {/* 标签页 */}
            <div className="engram-tabs">
                {TABS.map((tab) => (
                    <button
                        key={tab.id}
                        className={`engram-tab ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {React.createElement(tab.icon, { size: 16 })}
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* 内容区域 */}
            <div className={styles.content}>
                {/* LLM 预设标签页 */}
                {activeTab === 'llm' && (
                    <div className={styles.llmTab}>
                        {/* 左侧：预设列表 */}
                        <div className={styles.presetList}>
                            <div className={styles.presetListHeader}>
                                <h3>预设列表</h3>
                                <button
                                    className="engram-btn engram-btn-ghost"
                                    onClick={handleAddPreset}
                                >
                                    <Plus size={16} />
                                    新建
                                </button>
                            </div>
                            <div className={styles.presetListItems}>
                                {settings.llmPresets.map((preset) => (
                                    <PresetCard
                                        key={preset.id}
                                        preset={preset}
                                        isSelected={settings.selectedPresetId === preset.id}
                                        onSelect={() => handleSelectPreset(preset)}
                                        onEdit={() => {
                                            setEditingPreset(preset);
                                            setSettings((prev) => ({
                                                ...prev,
                                                selectedPresetId: preset.id,
                                            }));
                                            setEditingPreset(preset);
                                        }}
                                        onCopy={() => handleCopyPreset(preset)}
                                        onDelete={() => handleDeletePreset(preset)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* 右侧：编辑表单 */}
                        <div className={styles.presetEditor}>
                            {editingPreset ? (
                                <LLMPresetForm
                                    preset={editingPreset}
                                    onChange={handleUpdatePreset}
                                />
                            ) : (
                                <div className={styles.emptyState}>
                                    <Key size={48} />
                                    <p>选择或创建一个预设开始配置</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* 向量化标签页 */}
                {activeTab === 'vector' && (
                    <div className="engram-vector-tab">
                        <VectorConfigForm
                            config={settings.vectorConfig}
                            onChange={handleVectorConfigChange}
                        />
                    </div>
                )}

                {/* Rerank 标签页 */}
                {activeTab === 'rerank' && (
                    <div className="engram-rerank-tab">
                        <RerankConfigForm
                            config={settings.rerankConfig}
                            onChange={handleRerankConfigChange}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default APIPresets;
