import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface StatsCardProps {
    title: string;
    value: string | number;
    icon: LucideIcon;
    subtext?: string;
    highlight?: boolean;
}

export const StatsCard: React.FC<StatsCardProps> = ({
    title,
    value,
    icon: Icon,
    subtext,
    highlight = false
}) => {
    return (
        <div className={`flex-1 flex flex-col p-4 bg-surface backdrop-blur-md border border-border-light rounded-lg overflow-hidden relative transition-all duration-200 hover:shadow-md hover:border-border-default ${highlight ? 'bg-primary-10 border-primary-30' : ''}`}>
            <div className="flex justify-between items-start mb-3">
                <div className={`p-2 rounded-lg ${highlight ? 'bg-primary-20 text-primary' : 'bg-hover text-text-secondary'}`}>
                    <Icon size={20} />
                </div>
                {highlight && <div className="w-2 h-2 bg-success rounded-full shadow-[0_0_8px_var(--engram-success)]"></div>}
            </div>
            <div>
                <div className="text-2xl font-bold text-primary font-mono">{value}</div>
                <div className="text-[11px] text-muted font-semibold mt-1 tracking-[0.5px]">{title}</div>
                {subtext && <div className="text-[10px] text-disabled mt-0.5">{subtext}</div>}
            </div>
        </div>
    );
};
