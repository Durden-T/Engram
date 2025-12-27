// 主布局容器
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar/index';

interface LayoutProps {
    children: React.ReactNode;
    currentPath: string;
    onNavigate: (path: string) => void;
    isFullscreen: boolean;
    onToggleFullscreen: () => void;
    isSidebarOpen: boolean;
    onToggleSidebar: () => void;
    onCloseSidebar: () => void;
    isMobile: boolean;
    onClose?: () => void;
}

const Layout: React.FC<LayoutProps> = ({
    children,
    currentPath,
    onNavigate,
    isFullscreen,
    onToggleFullscreen,
    isSidebarOpen,
    onToggleSidebar,
    onCloseSidebar,
    isMobile,
    onClose,
}) => {
    return (
        <div className={`flex flex-col h-full w-full bg-[rgba(30,30,35,0.95)] text-slate-200 overflow-hidden ${isFullscreen ? 'fixed top-0 left-0 right-0 bottom-0 z-[10000]' : ''}`}>
            <Header
                isFullscreen={isFullscreen}
                onToggleFullscreen={onToggleFullscreen}
                onToggleSidebar={onToggleSidebar}
                isMobile={isMobile}
                onClose={onClose}
                onNavigate={onNavigate}
            />

            <div className="flex flex-1 min-h-0 overflow-hidden relative">
                <Sidebar
                    currentPath={currentPath}
                    onNavigate={onNavigate}
                    isOpen={isSidebarOpen}
                    onClose={onCloseSidebar}
                    isMobile={isMobile}
                />

                <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 min-w-0 min-h-0">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
