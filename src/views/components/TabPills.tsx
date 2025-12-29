/**
 * TabPills - 主导航标签组件
 * 支持 sticky 固定在页面顶部
 */
import React from 'react';


export interface Tab {
    id: string;
    label: string;
    icon?: React.ReactNode;
}

interface TabPillsProps {
    tabs: Tab[];
    activeTab: string;
    onChange: (id: string) => void;
    sticky?: boolean;
    top?: number | string; // 允许自定义吸顶距离
    className?: string;
}

export const TabPills: React.FC<TabPillsProps> = ({ tabs, activeTab, onChange, sticky = true, top = 0, className = '' }) => (
    <div
        className={`
            flex overflow-x-auto gap-2 mb-6 pb-1 no-scrollbar border-b border-border
            ${sticky ? 'sticky z-10 bg-background py-2 -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-12 lg:px-12' : 'px-0'}
            ${className}
        `}
        style={sticky ? { top } : undefined}
    >
        {tabs.map((tab) => (
            <button
                key={tab.id}
                onClick={() => onChange(tab.id)}
                className={`flex items-center gap-2 whitespace-nowrap px-4 py-2 text-sm transition-all relative ${activeTab === tab.id
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                    }`}
            >
                {tab.icon && <span className="w-4 h-4">{tab.icon}</span>}
                {tab.label}
                {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-primary shadow-[0_0_10px_var(--primary)]"></div>
                )}
            </button>
        ))}
    </div>
);

