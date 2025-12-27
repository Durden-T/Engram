/**
 * 预设卡片组件
 */
import React from 'react';
import { Edit2, Copy, Trash2, Check, Server, Cloud } from 'lucide-react';
import type { LLMPreset } from '../../types';
import styles from './styles.module.css';

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
            className={`${styles.card} ${isSelected ? styles.selected : ''}`}
            onClick={onSelect}
        >
            <div className={styles.header}>
                <div className={styles.icon}>
                    <SourceIcon size={16} />
                </div>
                <div className={styles.info}>
                    <h4 className={styles.name}>
                        {preset.name}
                        {preset.isDefault && <span className={styles.defaultBadge}>默认</span>}
                    </h4>
                    <p className={styles.meta}>
                        <span>{sourceLabel}</span>
                        <span className={styles.divider}>·</span>
                        <span>{modelName}</span>
                    </p>
                </div>
                {isSelected && (
                    <div className={styles.check}>
                        <Check size={16} />
                    </div>
                )}
            </div>

            <div className={styles.params}>
                <span className={styles.paramTag}>T: {preset.parameters.temperature}</span>
                <span className={styles.paramTag}>P: {preset.parameters.topP}</span>
                <span className={styles.paramTag}>Max: {preset.parameters.maxTokens}</span>
            </div>

            <div className={styles.actions} onClick={(e) => e.stopPropagation()}>
                <button className="engram-icon-btn" onClick={onEdit} title="编辑">
                    <Edit2 size={14} />
                </button>
                <button className="engram-icon-btn" onClick={onCopy} title="复制">
                    <Copy size={14} />
                </button>
                <button
                    className={`engram-icon-btn engram-close-btn`}
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
