/**
 * 提示词模板列表组件
 */
import React from 'react';
import { Plus, FileText } from 'lucide-react';
import { PromptTemplateCard } from './PromptTemplateCard';
import type { PromptTemplate } from './types';
import { createPromptTemplate, PROMPT_CATEGORIES } from './types';

interface PromptTemplateListProps {
    templates: PromptTemplate[];
    selectedId: string | null;
    onSelect: (template: PromptTemplate) => void;
    onAdd: (template: PromptTemplate) => void;
    onUpdate: (template: PromptTemplate) => void;
    onDelete: (template: PromptTemplate) => void;
}

export const PromptTemplateList: React.FC<PromptTemplateListProps> = ({
    templates,
    selectedId,
    onSelect,
    onAdd,
    onUpdate,
    onDelete,
}) => {
    // 新建模板
    const handleAdd = () => {
        const newTemplate = createPromptTemplate(
            `新模板 ${templates.length + 1}`,
            'text_summary'
        );
        onAdd(newTemplate);
        onSelect(newTemplate);
    };

    // 复制模板
    const handleCopy = (template: PromptTemplate) => {
        const copy = createPromptTemplate(
            `${template.name} (副本)`,
            template.category,
            {
                enabled: false, // 副本默认不启用
                boundPresetId: template.boundPresetId,
                systemPrompt: template.systemPrompt,
                userPromptTemplate: template.userPromptTemplate,
                outputFormat: template.outputFormat,
                availableVariables: [...template.availableVariables],
            }
        );
        onAdd(copy);
    };

    // 切换启用状态
    const handleToggleEnabled = (template: PromptTemplate, enabled: boolean) => {
        // 如果启用，同分类的其他模板要禁用（每个分类只有一个启用）
        if (enabled) {
            templates
                .filter(t => t.category === template.category && t.id !== template.id && t.enabled)
                .forEach(t => onUpdate({ ...t, enabled: false }));
        }
        onUpdate({ ...template, enabled });
    };

    // 导入覆盖模板
    const handleImport = (importedTemplate: PromptTemplate) => {
        onUpdate(importedTemplate);
    };

    // 按分类分组
    const groupedTemplates = PROMPT_CATEGORIES.map(category => ({
        ...category,
        templates: templates.filter(t => t.category === category.value),
    })).filter(group => group.templates.length > 0);

    return (
        <div className="flex flex-col gap-4 h-full">
            {/* 头部操作栏 */}
            <div className="flex items-center justify-between gap-2">
                <h3 className="m-0 text-sm font-semibold text-primary">提示词模板</h3>
                <button
                    className="engram-btn engram-btn-ghost"
                    onClick={handleAdd}
                >
                    <Plus size={14} />
                    新建
                </button>
            </div>

            {/* 模板列表 */}
            <div className="flex flex-col gap-4 overflow-y-auto flex-1">
                {groupedTemplates.map((group) => (
                    <div key={group.value}>
                        <div className="text-xs text-muted mb-2 px-1">{group.label}</div>
                        <div className="flex flex-col gap-2">
                            {group.templates.map((template) => (
                                <PromptTemplateCard
                                    key={template.id}
                                    template={template}
                                    isSelected={selectedId === template.id}
                                    onSelect={() => onSelect(template)}
                                    onCopy={() => handleCopy(template)}
                                    onDelete={() => onDelete(template)}
                                    onToggleEnabled={(enabled) => handleToggleEnabled(template, enabled)}
                                    onImport={handleImport}
                                />
                            ))}
                        </div>
                    </div>
                ))}

                {templates.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-8 text-muted gap-2">
                        <FileText size={32} />
                        <p className="text-sm">暂无模板</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PromptTemplateList;
