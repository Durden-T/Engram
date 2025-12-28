/**
 * RegexRuleList - 正则规则列表组件
 */
import React from 'react';
import { CheckCircle, XCircle, Edit2, Trash2, Plus, RefreshCw } from 'lucide-react';
import type { RegexRule } from '../../core/summarizer/RegexProcessor';

interface RegexRuleListProps {
    rules: RegexRule[];
    selectedId: string | null;
    onSelect: (id: string) => void;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onAdd: () => void;
    onReset: () => void;
}

export const RegexRuleList: React.FC<RegexRuleListProps> = ({
    rules,
    selectedId,
    onSelect,
    onToggle,
    onDelete,
    onAdd,
    onReset,
}) => {
    const enabledCount = rules.filter(r => r.enabled).length;

    return (
        <div className="flex flex-col gap-3">
            {/* 头部 */}
            <div className="flex items-center justify-between">
                <h3 className="m-0 text-sm font-semibold text-foreground">
                    正则规则 ({enabledCount}/{rules.length})
                </h3>
                <div className="flex gap-1">
                    <button
                        className="p-1.5 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors text-muted-foreground"
                        onClick={onReset}
                        title="重置为默认"
                    >
                        <RefreshCw size={14} />
                    </button>
                    <button
                        className="inline-flex items-center gap-1.5 px-2 py-1.5 rounded-md text-sm transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
                        onClick={onAdd}
                    >
                        <Plus size={14} />
                        新建
                    </button>
                </div>
            </div>

            {/* 规则列表 */}
            <div className="flex flex-col gap-2">
                {rules.map((rule) => (
                    <div
                        key={rule.id}
                        className={`p-3 cursor-pointer bg-card border border-border rounded-lg transition-all duration-200 hover:border-ring-50 ${selectedId === rule.id ? 'bg-primary-5 border-primary-50' : ''
                            }`}
                        onClick={() => onSelect(rule.id)}
                    >
                        <div className="flex items-start gap-2">
                            {/* 启用状态 */}
                            <button
                                className={`p-1 rounded transition-colors ${rule.enabled
                                        ? 'text-green-500 hover:bg-green-500/20'
                                        : 'text-muted-foreground hover:bg-muted'
                                    }`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onToggle(rule.id);
                                }}
                                title={rule.enabled ? '已启用' : '已禁用'}
                            >
                                {rule.enabled ? (
                                    <CheckCircle size={16} />
                                ) : (
                                    <XCircle size={16} />
                                )}
                            </button>

                            {/* 名称和描述 */}
                            <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-foreground truncate">
                                    {rule.name}
                                </div>
                                {rule.description && (
                                    <div className="text-xs text-muted-foreground mt-0.5 truncate">
                                        {rule.description}
                                    </div>
                                )}
                            </div>

                            {/* 操作按钮 */}
                            <button
                                className="p-1.5 rounded-md hover:bg-destructive hover:text-destructive-foreground transition-colors text-muted-foreground opacity-0 group-hover:opacity-100"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onDelete(rule.id);
                                }}
                                title="删除"
                            >
                                <Trash2 size={14} />
                            </button>
                        </div>

                        {/* 正则预览 */}
                        <div className="mt-2 px-2 py-1 bg-muted-20 rounded text-xs font-mono text-muted-foreground truncate">
                            /{rule.pattern}/{rule.flags}
                        </div>
                    </div>
                ))}

                {rules.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground text-sm">
                        暂无正则规则
                    </div>
                )}
            </div>
        </div>
    );
};

export default RegexRuleList;
