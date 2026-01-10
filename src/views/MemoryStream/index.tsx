/**
 * MemoryStream - 记忆流视图
 *
 * Master-Detail 布局 (3:7 比例)：
 * - 桌面端：左侧列表 + 右侧编辑面板
 * - 移动端：列表全屏，点击进入编辑全屏
 */
import React, { useState, useEffect, useMemo } from 'react';
import { PageTitle } from "@/components/common/PageTitle";
import { Divider } from "@/components/layout/Divider";
import { Tab } from "@/components/ui/TabPills";
import { LayoutTabs } from "@/components/layout/LayoutTabs";
import { useMemoryStore } from '@/stores/memoryStore';
import type { EventNode } from '@/services/types/graph';
import { EventCard } from './components/EventCard';
import { EventEditor } from './components/EventEditor';
import { Search, Trash2, RefreshCw, Brain, List, GitBranch } from 'lucide-react';

// 响应式断点
const DESKTOP_BREAKPOINT = 768;

// Tab 配置
const VIEW_TABS: Tab[] = [
    { id: 'list', label: '列表', icon: <List size={14} /> },
    { id: 'graph', label: '图谱', icon: <GitBranch size={14} /> },
];

type ViewTab = 'list' | 'graph';

export const MemoryStream: React.FC = () => {
    // 状态
    const [events, setEvents] = useState<EventNode[]>([]);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [checkedIds, setCheckedIds] = useState<Set<string>>(new Set());
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth < DESKTOP_BREAKPOINT);
    const [showEditor, setShowEditor] = useState(false);
    const [viewTab, setViewTab] = useState<ViewTab>('list');

    // Store
    const store = useMemoryStore.getState();

    // 响应式检测
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < DESKTOP_BREAKPOINT);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // 加载事件
    const loadEvents = async () => {
        setIsLoading(true);
        try {
            const allEvents = await store.getAllEvents();
            // 按时间倒序
            setEvents(allEvents.sort((a, b) => b.timestamp - a.timestamp));
        } catch (e) {
            console.error('[MemoryStream] Failed to load events:', e);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadEvents();
    }, []);

    // 过滤事件
    const filteredEvents = useMemo(() => {
        if (!searchQuery.trim()) return events;
        const q = searchQuery.toLowerCase();
        return events.filter(e =>
            e.summary.toLowerCase().includes(q) ||
            e.structured_kv.event?.toLowerCase().includes(q) ||
            e.structured_kv.role?.some(r => r.toLowerCase().includes(q))
        );
    }, [events, searchQuery]);

    // 选中的事件
    const selectedEvent = useMemo(() =>
        events.find(e => e.id === selectedId) || null,
        [events, selectedId]
    );

    // 选择事件
    const handleSelect = (id: string) => {
        setSelectedId(id);
        if (isMobile) {
            setShowEditor(true);
        }
    };

    // 勾选事件
    const handleCheck = (id: string, checked: boolean) => {
        const newSet = new Set(checkedIds);
        if (checked) {
            newSet.add(id);
        } else {
            newSet.delete(id);
        }
        setCheckedIds(newSet);
    };

    // 保存事件
    const handleSave = async (id: string, updates: Partial<EventNode>) => {
        // TODO: 实现 store.updateEvent
        console.log('[MemoryStream] Save event:', id, updates);
        // 临时：直接更新本地状态
        setEvents(prev => prev.map(e =>
            e.id === id ? { ...e, ...updates } as EventNode : e
        ));
        if (isMobile) {
            setShowEditor(false);
        }
    };

    // 删除事件
    const handleDelete = async (id: string) => {
        await store.deleteEvents([id]);
        setEvents(prev => prev.filter(e => e.id !== id));
        setSelectedId(null);
        setShowEditor(false);
    };

    // 批量删除
    const handleBatchDelete = async () => {
        if (checkedIds.size === 0) return;
        if (!confirm(`确定删除选中的 ${checkedIds.size} 个事件吗？`)) return;

        await store.deleteEvents(Array.from(checkedIds));
        setEvents(prev => prev.filter(e => !checkedIds.has(e.id)));
        setCheckedIds(new Set());
    };

    // 关闭编辑器
    const handleCloseEditor = () => {
        setShowEditor(false);
        if (isMobile) {
            setSelectedId(null);
        }
    };

    // 移动端全屏编辑器
    if (isMobile && showEditor && selectedEvent) {
        return (
            <EventEditor
                event={selectedEvent}
                isFullScreen={true}
                onSave={handleSave}
                onDelete={handleDelete}
                onClose={handleCloseEditor}
            />
        );
    }

    return (
        <div className="flex flex-col h-full animate-in fade-in">
            <PageTitle title="记忆编辑" subtitle="查看和管理记忆事件" />
            <Divider className="mb-6" />

            {/* Tab 导航 */}
            {/* Tab 导航 - 自动 Portal */}
            <LayoutTabs
                tabs={VIEW_TABS}
                activeTab={viewTab}
                onChange={(id) => setViewTab(id as ViewTab)}
                actions={
                    <div className="flex items-center gap-2">
                        {/* 刷新按钮 */}
                        <button
                            onClick={loadEvents}
                            className="p-1.5 hover:bg-accent rounded-md text-muted-foreground hover:text-foreground transition-colors"
                            title="刷新"
                        >
                            <RefreshCw size={14} className={isLoading ? 'animate-spin' : ''} />
                        </button>

                        {/* 批量删除 */}
                        {checkedIds.size > 0 && (
                            <button
                                onClick={handleBatchDelete}
                                className="flex items-center gap-1 px-2 py-1 text-xs text-destructive hover:bg-destructive/10 rounded-md"
                            >
                                <Trash2 size={12} />
                                删除 ({checkedIds.size})
                            </button>
                        )}
                    </div>
                }
            />

            {/* 列表视图 */}
            {viewTab === 'list' && (
                <>
                    {/* 搜索框 */}
                    <div className="relative mb-4">
                        <Search size={14} className="absolute left-0 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="搜索事件..."
                            style={{
                                background: 'transparent',
                                border: 'none',
                                borderBottom: '1px solid var(--border)',
                                borderRadius: 0,
                                outline: 'none',
                                padding: '8px 0 8px 24px',
                                fontSize: '14px',
                                width: '100%',
                                color: 'var(--foreground)',
                            }}
                            className="placeholder:text-muted-foreground/40 focus:border-primary transition-colors"
                        />
                    </div>

                    {/* 主内容区 - Master-Detail 布局 3:7 */}
                    <div className="flex-1 flex overflow-hidden gap-6">
                        {/* 左侧：事件列表 */}
                        <div className={`
                            ${isMobile ? 'w-full' : 'w-[30%] min-w-[240px]'}
                            overflow-y-auto no-scrollbar
                            ${!isMobile ? 'border-r border-border/50 pr-4' : ''}
                        `}>
                            {isLoading ? (
                                <div className="flex flex-col items-center justify-center h-48 text-muted-foreground gap-2">
                                    <RefreshCw size={24} className="animate-spin" />
                                    <p className="text-sm font-light">加载中...</p>
                                </div>
                            ) : filteredEvents.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-48 text-muted-foreground gap-4">
                                    <Brain size={48} className="opacity-20" />
                                    <p className="text-sm font-light">
                                        {searchQuery ? '没有找到匹配的事件' : '暂无记忆事件'}
                                    </p>
                                </div>
                            ) : (
                                <div className={isMobile ? '' : 'space-y-1'}>
                                    {filteredEvents.map(event => (
                                        <EventCard
                                            key={event.id}
                                            event={event}
                                            isSelected={event.id === selectedId}
                                            isCompact={isMobile}
                                            checked={checkedIds.has(event.id)}
                                            onSelect={() => handleSelect(event.id)}
                                            onCheck={(checked) => handleCheck(event.id, checked)}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* 右侧：编辑面板（仅桌面端）- 占 70% */}
                        {!isMobile && (
                            <div className="w-[70%] overflow-y-auto no-scrollbar">
                                <EventEditor
                                    event={selectedEvent}
                                    isFullScreen={false}
                                    onSave={handleSave}
                                    onDelete={handleDelete}
                                    onClose={() => setSelectedId(null)}
                                />
                            </div>
                        )}
                    </div>
                </>
            )}

            {/* 图谱视图 - 占位 */}
            {viewTab === 'graph' && (
                <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground gap-4">
                    <GitBranch size={48} className="opacity-20" />
                    <p className="text-sm font-light">图谱可视化功能开发中...</p>
                </div>
            )}
        </div>
    );
};

export default MemoryStream;
