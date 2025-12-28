/**
 * 提示词模板卡片组件
 */
import React, { useRef } from 'react';
import { FileText, Copy, Trash2, Download, Upload, Check } from 'lucide-react';
import type { PromptTemplate, PromptCategory, PromptTemplateSingleExport } from './types';
import { PROMPT_CATEGORIES, createPromptTemplate } from './types';

interface PromptTemplateCardProps {
    template: PromptTemplate;
    isSelected?: boolean;
    onSelect?: () => void;
    onCopy?: () => void;
    onDelete?: () => void;
    onToggleEnabled?: (enabled: boolean) => void;
    onImport?: (template: PromptTemplate) => void;
}

/**
 * 获取分类标签颜色类名
 */
function getCategoryColorClass(category: PromptCategory): string {
    switch (category) {
        case 'text_summary':
            return 'bg-sky-500/20 text-sky-400';
        case 'vector_summary':
            return 'bg-violet-500/20 text-violet-400';
        case 'trim':
            return 'bg-amber-500/20 text-amber-400';
        case 'query_enhance':
            return 'bg-emerald-500/20 text-emerald-400';
        default:
            return 'bg-neutral-500/20 text-neutral-400';
    }
}

/**
 * 获取分类标签文本
 */
function getCategoryLabel(category: PromptCategory): string {
    return PROMPT_CATEGORIES.find((c: { value: PromptCategory; label: string }) => c.value === category)?.label || category;
}

export const PromptTemplateCard: React.FC<PromptTemplateCardProps> = ({
    template,
    isSelected = false,
    onSelect,
    onCopy,
    onDelete,
    onToggleEnabled,
    onImport,
}) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    // 导出单个模板
    const handleExport = (e: React.MouseEvent) => {
        e.stopPropagation();
        const exportData: PromptTemplateSingleExport = {
            version: '1.0',
            exportedAt: Date.now(),
            template: {
                name: template.name,
                category: template.category,
                boundPresetId: template.boundPresetId,
                systemPrompt: template.systemPrompt,
                userPromptTemplate: template.userPromptTemplate,
                outputFormat: template.outputFormat,
                availableVariables: template.availableVariables,
            },
        };

        const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `engram_template_${template.name.replace(/\s+/g, '_')}.json`;
        a.click();
        URL.revokeObjectURL(url);
    };

    // 导入模板（覆盖当前）
    const handleImportClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        fileInputRef.current?.click();
    };

    const handleImportFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file || !onImport) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target?.result as string) as PromptTemplateSingleExport;
                if (data.version && data.template) {
                    const importedTemplate = createPromptTemplate(
                        data.template.name,
                        data.template.category as PromptCategory,
                        {
                            enabled: template.enabled, // 保持当前启用状态
                            isBuiltIn: template.isBuiltIn, // 保持内置状态
                            boundPresetId: data.template.boundPresetId,
                            systemPrompt: data.template.systemPrompt,
                            userPromptTemplate: data.template.userPromptTemplate,
                            outputFormat: data.template.outputFormat,
                            availableVariables: data.template.availableVariables,
                        }
                    );
                    // 保持原 ID
                    importedTemplate.id = template.id;
                    onImport(importedTemplate);
                }
            } catch (err) {
                console.error('导入失败:', err);
            }
        };
        reader.readAsText(file);

        // 重置 input
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    // 切换启用状态
    const handleToggleEnabled = (e: React.MouseEvent) => {
        e.stopPropagation();
        onToggleEnabled?.(!template.enabled);
    };

    return (
        <div
            className={`
                group relative p-3 rounded-lg border cursor-pointer transition-all
                ${isSelected
                    ? 'border-primary bg-primary-5 shadow-[0_0_0_1px_rgb(var(--color-primary))]'
                    : 'border-border-light bg-surface hover:border-border hover:bg-hover'
                }
            `}
            onClick={onSelect}
        >
            {/* 顶部：名称和操作 */}
            <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex items-center gap-2 min-w-0 flex-1">
                    <FileText size={16} className="text-primary flex-shrink-0" />
                    <span className="font-medium text-primary truncate">
                        {template.name}
                    </span>
                </div>

                {/* 操作按钮组 */}
                <div className="flex items-center gap-1">
                    {/* 启用按钮 */}
                    <button
                        className={`p-1.5 rounded transition-colors ${template.enabled
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : 'text-muted hover:text-primary hover:bg-hover'
                            }`}
                        onClick={handleToggleEnabled}
                        title={template.enabled ? '已启用' : '点击启用'}
                    >
                        <Check size={14} />
                    </button>

                    {/* 导入 */}
                    <button
                        className="p-1.5 rounded text-muted hover:text-primary hover:bg-hover opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={handleImportClick}
                        title="导入"
                    >
                        <Upload size={14} />
                    </button>

                    {/* 导出 */}
                    <button
                        className="p-1.5 rounded text-muted hover:text-primary hover:bg-hover opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={handleExport}
                        title="导出"
                    >
                        <Download size={14} />
                    </button>

                    {/* 复制 */}
                    {onCopy && (
                        <button
                            className="p-1.5 rounded text-muted hover:text-primary hover:bg-hover opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={(e) => { e.stopPropagation(); onCopy(); }}
                            title="复制"
                        >
                            <Copy size={14} />
                        </button>
                    )}

                    {/* 删除 */}
                    {onDelete && !template.isBuiltIn && (
                        <button
                            className="p-1.5 rounded text-muted hover:text-red-400 hover:bg-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={(e) => { e.stopPropagation(); onDelete(); }}
                            title="删除"
                        >
                            <Trash2 size={14} />
                        </button>
                    )}
                </div>

                <input
                    ref={fileInputRef}
                    type="file"
                    accept=".json"
                    onChange={handleImportFile}
                    className="hidden"
                />
            </div>

            {/* 分类标签 */}
            <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs px-2 py-0.5 rounded-full ${getCategoryColorClass(template.category)}`}>
                    {getCategoryLabel(template.category)}
                </span>
                {template.isBuiltIn && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-neutral-500/20 text-neutral-400">
                        内置
                    </span>
                )}
            </div>

            {/* 提示词预览 */}
            <p className="text-xs text-muted line-clamp-2 mb-2">
                {template.systemPrompt || '(无系统提示词)'}
            </p>

            {/* 底部：模型绑定信息 */}
            <div className="flex items-center justify-between text-xs text-muted">
                <span>
                    {template.boundPresetId ? `绑定: ${template.boundPresetId}` : '使用默认预设'}
                </span>
                <span className="opacity-60">
                    {template.outputFormat.toUpperCase()}
                </span>
            </div>
        </div>
    );
};

export default PromptTemplateCard;
