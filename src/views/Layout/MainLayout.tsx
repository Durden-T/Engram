import React, { useState } from 'react';
import {
    LayoutDashboard,
    BrainCircuit,
    Network,
    Settings2,
    Database,
    Terminal,
    ArrowUpRight,
    X
} from 'lucide-react';
import { GlobalStyles } from './GlobalStyles';
import Header from './Header';
import { EngramIcon } from './EngramIcon';

// Navigation Items Configuration
const NAV_ITEMS = [
    { id: 'dashboard', label: '仪表盘', icon: LayoutDashboard },
    { id: 'memory', label: '记忆流', icon: BrainCircuit },
    { id: 'graph', label: '神经图谱', icon: Network },
    { id: 'processing', label: '数据处理', icon: ArrowUpRight },
    { id: 'presets', label: 'API 预设', icon: Database },
    { id: 'devlog', label: '开发日志', icon: Terminal },
    { id: 'settings', label: '系统设置', icon: Settings2 },
];

interface MainLayoutProps {
    children: React.ReactNode;
    activeTab: string;
    setActiveTab: (tab: string) => void;
    onClose: () => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, activeTab, setActiveTab, onClose }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="flex flex-col absolute inset-0 w-full h-full bg-background text-foreground overflow-hidden font-sans selection:bg-primary/30 selection:text-primary" id="engram-layout-root">
            <GlobalStyles />

            {/* Unified Header (Responsive) */}
            <Header
                onToggleSidebar={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                isMobile={false}
                onClose={onClose}
                onNavigate={(path) => setActiveTab(path.replace('/', ''))}
            />

            <div className="flex flex-1 overflow-hidden relative">
                {/* Sidebar (Desktop Only) - Compact Icon Mode - Using [display:none] to avoid .hidden class pollution from ST */}
                <aside className="[display:none] md:flex w-16 flex-shrink-0 bg-sidebar flex-col z-40 items-center pt-4 border-r border-border/50">
                    <nav className="flex-1 w-full flex flex-col items-center gap-4 overflow-y-auto no-scrollbar">
                        {NAV_ITEMS.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeTab === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    title={item.label}
                                    className={`
                                        w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 group
                                        ${isActive
                                            ? 'text-primary scale-110'
                                            : 'text-muted-foreground/60 hover:text-foreground hover:bg-muted/10'}
                                    `}
                                >
                                    <Icon size={22} strokeWidth={isActive ? 2 : 1.5} />
                                </button>
                            );
                        })}
                    </nav>

                    {/* Bottom Logo can be here if needed, but Header has it now */}
                    <div className="pb-4 opacity-50"><EngramIcon size={16} /></div>
                </aside>

                {/* Mobile Menu Overlay (Drawer Style) */}
                {isMobileMenuOpen && (
                    <div
                        className="fixed inset-0 z-50 flex justify-start"
                        style={{ height: '100dvh', width: '100vw' }} // Prevent height collapse on mobile
                    >
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* Drawer Content */}
                        <div
                            id="mobile-menu-drawer"
                            className="relative w-64 max-w-[80vw] h-full bg-sidebar border-r border-border shadow-2xl flex flex-col p-6 animate-in slide-in-from-left duration-300"
                            style={{ height: '100dvh' }}
                        >
                            <div className="flex justify-between items-center mb-8">
                                <span className="text-lg font-semibold text-sidebar-foreground/80">导航</span>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 -mr-2 rounded-md hover:bg-sidebar-accent text-muted-foreground hover:text-sidebar-accent-foreground transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <nav className="space-y-4 flex-1 overflow-y-auto">
                                {NAV_ITEMS.map((item) => {
                                    const isActive = activeTab === item.id;
                                    return (
                                        <button
                                            key={item.id}
                                            onClick={() => { setActiveTab(item.id); setIsMobileMenuOpen(false); }}
                                            className={`
                                                w-full flex items-center gap-4 px-4 py-3 rounded-xl text-left transition-all duration-200
                                                ${isActive
                                                    ? 'bg-primary/10 text-primary font-medium'
                                                    : 'text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground'}
                                            `}
                                        >
                                            <item.icon size={22} className={isActive ? 'text-primary' : 'text-muted-foreground/70'} />
                                            <span>{item.label}</span>
                                        </button>
                                    );
                                })}
                            </nav>

                            <div className="mt-auto pt-6 border-t border-border/20">
                                <div className="flex items-center gap-3 px-2 text-xs text-muted-foreground/50">
                                    <EngramIcon size={14} />
                                    <span>Engram v0.1.0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content Area */}
                <main className="flex-1 flex flex-col relative w-full overflow-hidden bg-background">
                    <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-8 lg:p-12 scroll-smooth">
                        <div className="max-w-6xl mx-auto min-h-full pb-20">
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};
