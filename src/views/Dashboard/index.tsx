import React, { useEffect, useState } from 'react';
import { StatsCard } from './components/StatsCard';
import { Database, Cpu, Server, Terminal as TermIcon, Zap } from 'lucide-react';
import { Logger } from '../../infrastructure/logger';
import type { LogEntry } from '../../infrastructure/logger/types';
import { getSTContext } from '../../infrastructure/adapter/STBridge';
import styles from './styles/index.module.css';

interface DashboardProps {
    onNavigate: (path: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [stContext, setStContext] = useState(getSTContext());
    const [uptime, setUptime] = useState(0);

    // 订阅前3条日志
    useEffect(() => {
        // 初始化
        setLogs(Logger.getLogs().slice(0, 3));

        // 订阅更新
        const unsubscribe = Logger.subscribe((newLog) => {
            setLogs(prev => [newLog, ...prev].slice(0, 3));
        });
        return unsubscribe;
    }, []);

    // 运行时间计时器
    useEffect(() => {
        const timer = setInterval(() => {
            setUptime(prev => prev + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // 格式化时间
    const formatUptime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    const characterName = stContext?.name2 || 'Unknown';
    const userName = stContext?.name1 || 'User';

    return (
        <div className={styles.engramDashboard}>
            <div className={styles.engramDashboardGrid}>

                {/* 1. Status Monitors (环境监测) - 顶部横向三列 */}
                <div className={styles.dashboardStatsRow}>
                    <StatsCard
                        title="ACTIVE MODEL"
                        value={stContext ? 'Connected' : 'Offline'}
                        subtext={stContext ? `Chatting with ${characterName}` : 'Waiting for connection...'}
                        icon={Server}
                        highlight={!!stContext}
                    />
                    <StatsCard
                        title="MEMORY NODES"
                        value="0"
                        subtext="Graph Database"
                        icon={Database}
                    />
                    <StatsCard
                        title="SYSTEM UPTIME"
                        value={formatUptime(uptime)}
                        subtext="Session Duration"
                        icon={Cpu}
                    />
                </div>

                {/* 3. Quick Actions (快捷入口) - 下方 */}
                <div className={`${styles.dashboardCell} ${styles.cellActions}`}>
                    <div className={styles.cellHeader}>
                        <Zap size={16} />
                        <span>QUICK ACTIONS</span>
                    </div>
                    <div className={styles.actionsGrid}>
                        <button className={styles.actionTile} onClick={() => onNavigate('/memory')}>
                            <span className={styles.tileIcon}>📜</span>
                            <span className={styles.tileLabel}>Memory Stream</span>
                        </button>
                        <button className={styles.actionTile} onClick={() => onNavigate('/graph')}>
                            <span className={styles.tileIcon}>🕸️</span>
                            <span className={styles.tileLabel}>Knowledge Graph</span>
                        </button>
                        <button className={styles.actionTile} onClick={() => onNavigate('/brain')}>
                            <span className={styles.tileIcon}>🧠</span>
                            <span className={styles.tileLabel}>Brain Console</span>
                        </button>
                        <button className={styles.actionTile} onClick={() => onNavigate('/settings')}>
                            <span className={styles.tileIcon}>⚙️</span>
                            <span className={styles.tileLabel}>Settings</span>
                        </button>
                    </div>
                </div>

                {/* 4. Mini Terminal (迷你终端) - 右下 */}
                <div className={`${styles.dashboardCell} ${styles.cellTerminal}`}>
                    <div className={styles.cellHeader}>
                        <TermIcon size={16} />
                        <span>SYSTEM LOGS</span>
                        <button className={styles.miniLink} onClick={() => onNavigate('/dev')}>VIEW ALL</button>
                    </div>
                    <div className={styles.miniTerminalContent}>
                        {logs.length === 0 ? (
                            <div className={styles.miniLogEmpty}>No activity recorded</div>
                        ) : (
                            logs.map(log => (
                                <div key={log.id} className={`${styles.miniLogLine} ${styles['level-' + log.level]}`}>
                                    <span className={styles.logTime}>[{new Date(log.timestamp).toLocaleTimeString([], { hour12: false })}]</span>
                                    <span className={styles.logMsg}>{log.message}</span>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
