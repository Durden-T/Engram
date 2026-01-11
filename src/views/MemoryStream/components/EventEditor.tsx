/**
 * EventEditor - 事件编辑面板
 *
 * V0.8.5:
 * - KV 自动烧录进 summary（始终开启）
 * - 编辑即时反馈到父组件
 */
import React, { useState, useEffect, useCallback, useImperativeHandle, forwardRef } from 'react';
import type { EventNode } from '@/services/types/graph';
import { Trash2, ArrowLeft, Save } from 'lucide-react';
import { Divider } from '@/components/layout/Divider';

// ==================== 类型定义 ====================

interface EventEditorProps {
    event: EventNode | null;
    isFullScreen?: boolean;
    /** 编辑回调（暂存修改，不立即保存） */
    onSave?: (id: string, updates: Partial<EventNode>) => void;
    onDelete?: (id: string) => void;
    onClose?: () => void;
}

/** 暴露给父组件的方法 */
export interface EventEditorHandle {
    save: () => void;
    isDirty: () => boolean;
}

// ==================== 样式 ====================

const inputStyle: React.CSSProperties = {
    background: 'transparent',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1px solid var(--border)',
    borderRadius: 0,
    boxShadow: 'none',
    outline: 'none',
    padding: '8px 0',
    fontSize: '14px',
    width: '100%',
    color: 'var(--foreground, inherit)',
};

const textareaStyle: React.CSSProperties = {
    ...inputStyle,
    resize: 'vertical',
    minHeight: '80px',
};

// ==================== KV 烧录函数 ====================

/**
 * 根据 KV 字段自动生成 summary
 */
function generateSummaryFromKV(kv: Partial<EventNode['structured_kv']>): string {
    const parts: string[] = [];

    // 时间和地点
    if (kv.time_anchor && kv.location) {
        parts.push(`【${kv.time_anchor}·${kv.location}】`);
    } else if (kv.time_anchor) {
        parts.push(`【${kv.time_anchor}】`);
    } else if (kv.location) {
        parts.push(`【${kv.location}】`);
    }

    // 人物
    if (kv.role && kv.role.length > 0) {
        parts.push(kv.role.join('、'));
    }

    // 事件
    if (kv.event) {
        parts.push(kv.event);
    }

    // 逻辑标签
    if (kv.logic && kv.logic.length > 0) {
        parts.push(`(${kv.logic.join('/')})`);
    }

    return parts.join(' ');
}

// ==================== 组件 ====================

export const EventEditor = forwardRef<EventEditorHandle, EventEditorProps>(({
    event,
    isFullScreen = false,
    onSave,
    onDelete,
    onClose,
}, ref) => {
    // 编辑状态
    const [summary, setSummary] = useState('');
    const [eventType, setEventType] = useState('');
    const [timeAnchor, setTimeAnchor] = useState('');
    const [location, setLocation] = useState('');
    const [roleText, setRoleText] = useState('');
    const [logicText, setLogicText] = useState('');
    const [score, setScore] = useState(0.5);
    const [isDirty, setIsDirty] = useState(false);
    const [lastEventId, setLastEventId] = useState<string | null>(null);

    // 同步事件数据到表单
    useEffect(() => {
        if (event && event.id !== lastEventId) {
            setSummary(event.summary);
            setEventType(event.structured_kv.event || '');
            setTimeAnchor(event.structured_kv.time_anchor || '');
            setLocation(event.structured_kv.location || '');
            setRoleText(event.structured_kv.role?.join(', ') || '');
            setLogicText(event.structured_kv.logic?.join(', ') || '');
            setScore(event.significance_score);
            setIsDirty(false);
            setLastEventId(event.id);
        }
    }, [event, lastEventId]);

    // 构建更新对象
    const buildUpdates = useCallback((): Partial<EventNode> => {
        const kv = {
            event: eventType,
            time_anchor: timeAnchor,
            location,
            role: roleText.split(',').map(s => s.trim()).filter(Boolean),
            logic: logicText.split(',').map(s => s.trim()).filter(Boolean),
            causality: event?.structured_kv?.causality || '',
        };

        // 自动生成 summary
        const autoSummary = generateSummaryFromKV(kv);

        return {
            summary: autoSummary || summary,
            structured_kv: {
                ...(event?.structured_kv || {}),
                ...kv,
            },
            significance_score: score,
        };
    }, [event, eventType, timeAnchor, location, roleText, logicText, score, summary]);

    // 字段变化时立即通知父组件
    const handleFieldChange = useCallback(() => {
        if (!event) return;
        setIsDirty(true);

        // 延迟一点点让 state 更新
        setTimeout(() => {
            const updates = buildUpdates();
            onSave?.(event.id, updates);
        }, 0);
    }, [event, buildUpdates, onSave]);

    // 暴露方法给父组件
    useImperativeHandle(ref, () => ({
        save: handleFieldChange,
        isDirty: () => isDirty,
    }), [handleFieldChange, isDirty]);

    const handleDelete = () => {
        if (confirm('确定删除这个事件吗？此操作不可撤销。')) {
            onDelete?.(event!.id);
        }
    };

    // 更新字段并触发同步
    const updateField = (setter: (v: string) => void, value: string) => {
        setter(value);
        // 使用 setTimeout 确保 state 更新后再同步
        setTimeout(handleFieldChange, 10);
    };

    const updateScore = (value: number) => {
        setScore(value);
        setTimeout(handleFieldChange, 10);
    };

    if (!event) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground gap-2 p-8">
                <p className="text-sm font-light">选择一个事件查看详情</p>
            </div>
        );
    }

    // 共享的表单内容
    const formContent = (
        <>
            {/* 事件类型 */}
            <div className="flex flex-col gap-1">
                <label className="text-xs text-muted-foreground">事件类型</label>
                <input
                    type="text"
                    value={eventType}
                    onChange={(e) => updateField(setEventType, e.target.value)}
                    style={inputStyle}
                    className="placeholder:text-muted-foreground/40 focus:border-primary transition-colors"
                    placeholder="如：任务确认、战斗结束"
                />
            </div>

            {/* 摘要 - 自动生成，只读预览 */}
            <div className="flex flex-col gap-1">
                <label className="text-xs text-muted-foreground">摘要 (自动生成)</label>
                <div
                    className="p-2 text-sm text-foreground/80 bg-muted/30 rounded border border-border/50 min-h-[60px]"
                >
                    {generateSummaryFromKV({
                        event: eventType,
                        time_anchor: timeAnchor,
                        location,
                        role: roleText.split(',').map(s => s.trim()).filter(Boolean),
                        logic: logicText.split(',').map(s => s.trim()).filter(Boolean),
                    }) || <span className="text-muted-foreground/50">填写下方字段自动生成...</span>}
                </div>
            </div>

            {/* 时间锚点 */}
            <div className="flex flex-col gap-1">
                <label className="text-xs text-muted-foreground">时间锚点</label>
                <input
                    type="text"
                    value={timeAnchor}
                    onChange={(e) => updateField(setTimeAnchor, e.target.value)}
                    style={inputStyle}
                    className="placeholder:text-muted-foreground/40 focus:border-primary transition-colors"
                    placeholder="如：太阳历1023年4月4日"
                />
            </div>

            {/* 地点 */}
            <div className="flex flex-col gap-1">
                <label className="text-xs text-muted-foreground">地点</label>
                <input
                    type="text"
                    value={location}
                    onChange={(e) => updateField(setLocation, e.target.value)}
                    style={inputStyle}
                    className="placeholder:text-muted-foreground/40 focus:border-primary transition-colors"
                    placeholder="如：边境公会大厅"
                />
            </div>

            {/* 人物 */}
            <div className="flex flex-col gap-1">
                <label className="text-xs text-muted-foreground">人物（逗号分隔）</label>
                <input
                    type="text"
                    value={roleText}
                    onChange={(e) => updateField(setRoleText, e.target.value)}
                    style={inputStyle}
                    className="placeholder:text-muted-foreground/40 focus:border-primary transition-colors"
                    placeholder="如：{{user}}, 赫伯"
                />
            </div>

            {/* 逻辑标签 */}
            <div className="flex flex-col gap-1">
                <label className="text-xs text-muted-foreground">逻辑标签（逗号分隔）</label>
                <input
                    type="text"
                    value={logicText}
                    onChange={(e) => updateField(setLogicText, e.target.value)}
                    style={inputStyle}
                    className="placeholder:text-muted-foreground/40 focus:border-primary transition-colors"
                    placeholder="如：起点, 伏笔"
                />
            </div>

            {/* 重要性分数 */}
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <label className="text-xs text-muted-foreground">重要性分数</label>
                    <span className="text-xs font-mono text-foreground">{score.toFixed(2)}</span>
                </div>
                <div className="relative h-4 flex items-center group cursor-pointer">
                    <div
                        className="absolute inset-x-0 h-[1px]"
                        style={{ backgroundColor: 'var(--border)' }}
                    />
                    <div
                        className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-muted-foreground/80 rounded-full shadow-sm pointer-events-none transition-transform duration-75 ease-out group-hover:scale-125 group-hover:bg-foreground"
                        style={{ left: `${score * 100}%`, transform: `translate(-50%, -50%)` }}
                    />
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={score}
                        onChange={(e) => updateScore(parseFloat(e.target.value))}
                        className="absolute inset-x-0 w-full h-full opacity-0 cursor-pointer z-10 m-0"
                        style={{ appearance: 'none', WebkitAppearance: 'none' }}
                    />
                </div>
            </div>

            <Divider spacing="md" />

            {/* 只读信息 */}
            <div className="space-y-1 text-xs text-muted-foreground">
                <p>ID: <span className="font-mono">{event.id.substring(0, 8)}...</span></p>
                <p>Level: {event.level}</p>
                {event.source_range && (
                    <p>来源: {event.source_range.start_index}-{event.source_range.end_index}楼</p>
                )}
                <p>创建时间: {new Date(event.timestamp).toLocaleString()}</p>
                <p>
                    状态:
                    {event.is_archived && <span className="ml-1 text-yellow-500">已归档</span>}
                    {event.is_embedded && <span className="ml-1 text-green-500">已嵌入</span>}
                    {!event.is_archived && !event.is_embedded && <span className="ml-1">活跃</span>}
                </p>
            </div>
        </>
    );

    // 全屏模式（移动端）
    if (isFullScreen) {
        return (
            <div className="fixed inset-0 bg-background z-50 flex flex-col" style={{ height: '100dvh' }}>
                {/* 头部 */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-border shrink-0">
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-accent rounded"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <h2 className="text-lg font-light flex-1">编辑事件</h2>
                    <button
                        onClick={handleDelete}
                        className="p-2 text-destructive hover:bg-destructive/10 rounded"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>

                {/* 表单内容 */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {formContent}
                </div>

                {/* 底部操作栏 */}
                <div className="p-4 border-t border-border shrink-0">
                    <button
                        onClick={onClose}
                        className="w-full py-2 text-sm border border-border rounded-md hover:bg-accent"
                    >
                        返回列表
                    </button>
                </div>
            </div>
        );
    }

    // 侧边栏模式（桌面端）
    return (
        <div className="h-full flex flex-col">
            {/* 头部 */}
            <div className="flex items-center gap-2 pb-4 border-b border-border shrink-0">
                <h3 className="text-sm font-medium text-primary flex-1">编辑事件</h3>
                <button
                    onClick={handleDelete}
                    className="p-1.5 text-destructive hover:bg-destructive/10 rounded"
                    title="删除"
                >
                    <Trash2 size={16} />
                </button>
            </div>

            {/* 表单内容 - 独立滚动 */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4 no-scrollbar">
                {formContent}
            </div>
        </div>
    );
});

EventEditor.displayName = 'EventEditor';

export default EventEditor;
