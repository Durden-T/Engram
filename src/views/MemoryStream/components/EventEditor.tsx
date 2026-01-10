/**
 * EventEditor - 事件编辑面板
 *
 * 遵循「无框流体」设计：底部衬线输入框
 * 桌面端显示在右侧，移动端全屏显示
 */
import React, { useState, useEffect } from 'react';
import type { EventNode } from '@/services/types/graph';
import { X, Save, Trash2, ArrowLeft } from 'lucide-react';
import { Divider } from '@/components/layout/Divider';

interface EventEditorProps {
    event: EventNode | null;
    isFullScreen?: boolean;
    onSave?: (id: string, updates: Partial<EventNode>) => void;
    onDelete?: (id: string) => void;
    onClose?: () => void;
}

// 底线输入框样式
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

export const EventEditor: React.FC<EventEditorProps> = ({
    event,
    isFullScreen = false,
    onSave,
    onDelete,
    onClose,
}) => {
    // 编辑状态
    const [summary, setSummary] = useState('');
    const [eventType, setEventType] = useState('');
    const [timeAnchor, setTimeAnchor] = useState('');
    const [location, setLocation] = useState('');
    const [roleText, setRoleText] = useState('');
    const [logicText, setLogicText] = useState('');
    const [score, setScore] = useState(0.5);
    const [isDirty, setIsDirty] = useState(false);

    // 同步事件数据到表单
    useEffect(() => {
        if (event) {
            setSummary(event.summary);
            setEventType(event.structured_kv.event || '');
            setTimeAnchor(event.structured_kv.time_anchor || '');
            setLocation(event.structured_kv.location || '');
            setRoleText(event.structured_kv.role?.join(', ') || '');
            setLogicText(event.structured_kv.logic?.join(', ') || '');
            setScore(event.significance_score);
            setIsDirty(false);
        }
    }, [event]);

    if (!event) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground gap-2 p-8">
                <p className="text-sm font-light">选择一个事件查看详情</p>
            </div>
        );
    }

    const handleSave = () => {
        onSave?.(event.id, {
            summary,
            structured_kv: {
                ...event.structured_kv,
                event: eventType,
                time_anchor: timeAnchor,
                location,
                role: roleText.split(',').map(s => s.trim()).filter(Boolean),
                logic: logicText.split(',').map(s => s.trim()).filter(Boolean),
            },
            significance_score: score,
        });
        setIsDirty(false);
    };

    const handleDelete = () => {
        if (confirm('确定删除这个事件吗？此操作不可撤销。')) {
            onDelete?.(event.id);
        }
    };

    const markDirty = () => setIsDirty(true);

    // 共享的表单内容
    const formContent = (
        <>
            {/* 事件类型 */}
            <div className="flex flex-col gap-1">
                <label className="text-xs text-muted-foreground">事件类型</label>
                <input
                    type="text"
                    value={eventType}
                    onChange={(e) => { setEventType(e.target.value); markDirty(); }}
                    style={inputStyle}
                    className="placeholder:text-muted-foreground/40 focus:border-primary transition-colors"
                    placeholder="如：任务确认、战斗结束"
                />
            </div>

            {/* 摘要 */}
            <div className="flex flex-col gap-1">
                <label className="text-xs text-muted-foreground">摘要</label>
                <textarea
                    value={summary}
                    onChange={(e) => { setSummary(e.target.value); markDirty(); }}
                    rows={4}
                    style={textareaStyle}
                    className="placeholder:text-muted-foreground/40 focus:border-primary transition-colors"
                    placeholder="事件摘要..."
                />
            </div>

            {/* 时间锚点 */}
            <div className="flex flex-col gap-1">
                <label className="text-xs text-muted-foreground">时间锚点</label>
                <input
                    type="text"
                    value={timeAnchor}
                    onChange={(e) => { setTimeAnchor(e.target.value); markDirty(); }}
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
                    onChange={(e) => { setLocation(e.target.value); markDirty(); }}
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
                    onChange={(e) => { setRoleText(e.target.value); markDirty(); }}
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
                    onChange={(e) => { setLogicText(e.target.value); markDirty(); }}
                    style={inputStyle}
                    className="placeholder:text-muted-foreground/40 focus:border-primary transition-colors"
                    placeholder="如：起点, 伏笔"
                />
            </div>

            {/* 重要性分数 - 极简滑块 */}
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <label className="text-xs text-muted-foreground">重要性分数</label>
                    <span className="text-xs font-mono text-foreground">{score.toFixed(2)}</span>
                </div>
                <div className="relative h-4 flex items-center group cursor-pointer">
                    {/* 轨道 */}
                    <div
                        className="absolute inset-x-0 h-[1px]"
                        style={{ backgroundColor: 'var(--border)' }}
                    />
                    {/* Thumb */}
                    <div
                        className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-muted-foreground/80 rounded-full shadow-sm pointer-events-none transition-transform duration-75 ease-out group-hover:scale-125 group-hover:bg-foreground"
                        style={{ left: `${score * 100}%`, transform: `translate(-50%, -50%)` }}
                    />
                    {/* 交互层 */}
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={score}
                        onChange={(e) => { setScore(parseFloat(e.target.value)); markDirty(); }}
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
            </div>
        </>
    );

    // 全屏模式（移动端）
    if (isFullScreen) {
        return (
            <div className="fixed inset-0 bg-background z-50 flex flex-col" style={{ height: '100dvh' }}>
                {/* 头部 */}
                <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
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
                <div className="flex gap-3 p-4 border-t border-border">
                    <button
                        onClick={onClose}
                        className="flex-1 py-2 text-sm border border-border rounded-md hover:bg-accent"
                    >
                        取消
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={!isDirty}
                        className={`flex-1 py-2 text-sm rounded-md flex items-center justify-center gap-2
                            ${isDirty
                                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                                : 'bg-muted text-muted-foreground cursor-not-allowed'
                            }`}
                    >
                        <Save size={16} />
                        保存
                    </button>
                </div>
            </div>
        );
    }

    // 侧边栏模式（桌面端）
    return (
        <div className="h-full flex flex-col">
            {/* 头部 */}
            <div className="flex items-center gap-2 pb-4 border-b border-border">
                <h3 className="text-sm font-medium text-primary flex-1">编辑事件</h3>
                <button
                    onClick={handleDelete}
                    className="p-1.5 text-destructive hover:bg-destructive/10 rounded"
                    title="删除"
                >
                    <Trash2 size={16} />
                </button>
                <button
                    onClick={onClose}
                    className="p-1.5 hover:bg-accent rounded"
                    title="关闭"
                >
                    <X size={16} />
                </button>
            </div>

            {/* 表单内容 */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4 no-scrollbar">
                {formContent}
            </div>

            {/* 底部保存按钮 */}
            <div className="pt-4 border-t border-border">
                <button
                    onClick={handleSave}
                    disabled={!isDirty}
                    className={`w-full py-2 text-sm rounded-md flex items-center justify-center gap-2
                        ${isDirty
                            ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                            : 'bg-muted text-muted-foreground cursor-not-allowed'
                        }`}
                >
                    <Save size={16} />
                    保存修改
                </button>
            </div>
        </div>
    );
};

export default EventEditor;
