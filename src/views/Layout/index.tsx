// 主布局容器
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar/index';

interface LayoutProps {
    children: React.ReactNode;
    currentPath: string;
    onNavigate: (path: string) => void;
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
    isSidebarOpen,
    onToggleSidebar,
    onCloseSidebar,
    isMobile,
    onClose,
}) => {
    return (
        <div className="fixed inset-0 z-[10000] flex flex-col h-full w-full bg-background text-foreground overflow-hidden font-sans">
            <Header
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
