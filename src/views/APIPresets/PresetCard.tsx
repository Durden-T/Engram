/**
 * 预设卡片组件
 */
import React from 'react';
import { Edit2, Copy, Trash2, Check, Server, Cloud } from 'lucide-react';
import type { LLMPreset } from './types';

interface PresetCardProps {
    preset: LLMPreset;
    isSelected: boolean;
    onSelect: () => void;
    onEdit: () => void;
    onCopy: () => void;
    onDelete: () => void;
}

export const PresetCard: React.FC<PresetCardProps> = ({
    preset,
    isSelected,
    onSelect,
    onEdit,
    onCopy,
    onDelete,
}) => {
    const SourceIcon = preset.source === 'tavern' || preset.source === 'tavern_profile' ? Server : Cloud;
    const sourceLabel = preset.source === 'tavern'
        ? '酒馆当前'
        : preset.source === 'tavern_profile'
            ? '酒馆配置'
            : '自定义';
    const modelName = preset.source === 'custom'
        ? preset.custom?.model || '未设置'
        : '使用当前';

    return (
        <div
            className={`p-3 cursor-pointer bg-card border border-border rounded-lg shadow-sm transition-all duration-200 hover:border-ring-50 hover:shadow-md ${isSelected ? 'bg-primary-5 border-primary-50' : ''
                }`}
            onClick={onSelect}
        >
            <div className="flex items-start gap-2.5">
                <div
                    className={`w-8 h-8 flex items-center justify-center rounded-md ${isSelected ? 'bg-primary-20 text-primary' : 'bg-secondary text-secondary-foreground'
                        }`}
                >
                    <SourceIcon size={16} />
                </div>
                <div className="flex-1 min-w-0">
                    <h4 className="m-0 text-[14px] font-medium text-foreground flex items-center gap-2">
                        {preset.name}
                        {preset.isDefault && (
                            <span className="px-2 py-[2px] text-[10px] bg-primary-20 text-primary rounded-sm">
                                默认
                            </span>
                        )}
                    </h4>
                    <p className="mt-1 text-[12px] text-muted-foreground">
                        <span>{sourceLabel}</span>
                        <span className="mx-1">·</span>
                        <span>{modelName}</span>
                    </p>
                </div>
                {isSelected && (
                    <div className="text-primary">
                        <Check size={16} />
                    </div>
                )}
            </div>

            <div className="flex gap-2 mt-2.5 flex-wrap">
                <span className="px-2 py-[2px] text-[10px] bg-muted text-muted-foreground rounded-sm font-mono">
                    T: {preset.parameters.temperature}
                </span>
                <span className="px-2 py-[2px] text-[10px] bg-muted text-muted-foreground rounded-sm font-mono">
                    P: {preset.parameters.topP}
                </span>
                <span className="px-2 py-[2px] text-[10px] bg-muted text-muted-foreground rounded-sm font-mono">
                    Max: {preset.parameters.maxTokens}
                </span>
            </div>

            <div className="flex gap-1 mt-2.5 pt-2.5 border-t border-border" onClick={(e) => e.stopPropagation()}>
                <button
                    className="p-1.5 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors text-muted-foreground"
                    onClick={onEdit}
                    title="编辑"
                >
                    <Edit2 size={14} />
                </button>
                <button
                    className="p-1.5 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors text-muted-foreground"
                    onClick={onCopy}
                    title="复制"
                >
                    <Copy size={14} />
                </button>
                <button
                    className="p-1.5 rounded-md hover:bg-destructive hover:text-destructive-foreground transition-colors text-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={onDelete}
                    title="删除"
                    disabled={preset.isDefault}
                >
                    <Trash2 size={14} />
                </button>
            </div>
        </div>
    );
};
