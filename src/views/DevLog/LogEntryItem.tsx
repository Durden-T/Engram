/**
 * LogEntryItem - 单条日志渲染组件
 *
 * 支持展开/折叠查看附加数据
 */

import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { LogEntry, LogLevel, LogLevelConfig } from '../../infrastructure/logger';

interface LogEntryItemProps {
    entry: LogEntry;
}

/**
 * 格式化时间为 HH:MM:SS
 */
function formatTime(timestamp: number): string {
    const date = new Date(timestamp);
    return date.toTimeString().slice(0, 8);
}

// 级别样式映射
const LEVEL_STYLES: Record<LogLevel, string> = {
    [LogLevel.DEBUG]: 'text-muted-foreground',
    [LogLevel.INFO]: 'text-blue-400',
    [LogLevel.SUCCESS]: 'text-green-400',
    [LogLevel.WARN]: 'text-yellow-400',
    [LogLevel.ERROR]: 'text-red-400',
};

export const LogEntryItem: React.FC<LogEntryItemProps> = ({ entry }) => {
    const [expanded, setExpanded] = useState(false);
    const hasData = entry.data !== undefined;
    const levelConfig = LogLevelConfig[entry.level];
    const levelClass = LEVEL_STYLES[entry.level] || '';

    return (
        <div className="mb-0.5">
            <div
                className={`flex items-start gap-2 px-1 py-0.5 rounded-sm transition-colors hover:bg-muted-50 ${hasData ? 'cursor-pointer' : ''}`}
                onClick={() => hasData && setExpanded(!expanded)}
            >
                {/* 展开箭头 */}
                <span className="flex items-center text-muted-foreground shrink-0">
                    {hasData ? (
                        expanded ? (
                            <ChevronDown size={12} />
                        ) : (
                            <ChevronRight size={12} />
                        )
                    ) : (
                        <span style={{ width: 12, display: 'inline-block' }} />
                    )}
                </span>

                {/* 时间戳 */}
                <span className="text-muted-foreground shrink-0">[{formatTime(entry.timestamp)}]</span>

                {/* 模块标签 */}
                <span className="text-purple-400 shrink-0 whitespace-pre">[{entry.module.padEnd(16)}]</span>

                {/* 级别图标和标签 */}
                <span className={`shrink-0 whitespace-pre ${levelClass}`}>
                    {levelConfig.icon} {levelConfig.label.padEnd(7)}
                </span>

                {/* 消息内容 */}
                <span className="text-foreground break-words">{entry.message}</span>
            </div>

            {/* 展开的数据详情 */}
            {expanded && hasData && (
                <div className="ml-8 px-3 py-2 bg-muted-30 border-l-2 border-border rounded-r-sm">
                    <pre className="m-0 text-muted-foreground text-sm whitespace-pre-wrap break-words">{JSON.stringify(entry.data, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default LogEntryItem;
