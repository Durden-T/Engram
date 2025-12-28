// 头部组件
import React from 'react';
import { Menu, X } from 'lucide-react';
import { CommandPalette } from './CommandPalette';

interface HeaderProps {
    onToggleSidebar: () => void;
    isMobile: boolean;
    onClose?: () => void;
    onNavigate: (path: string) => void;
}

const Header: React.FC<HeaderProps> = ({
    onToggleSidebar,
    isMobile,
    onClose,
    onNavigate,
}) => {
    return (
        <header className="h-14 flex items-center justify-between px-4 border-b border-border bg-sidebar text-sidebar-foreground z-50 transition-colors duration-300">
            <div className="flex items-center gap-3">
                {isMobile && (
                    <button
                        className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                        onClick={onToggleSidebar}
                        title="菜单"
                    >
                        <Menu size={20} />
                    </button>
                )}
                <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Engram
                </span>
            </div>

            {/* Command Palette (居中) */}
            <div className="flex-1 max-w-xl mx-4 flex justify-center">
                <CommandPalette onNavigate={onNavigate} />
            </div>

            <div className="flex items-center gap-2">
                <button
                    className="p-2 rounded-md hover:bg-destructive hover:text-destructive-foreground transition-colors"
                    onClick={onClose}
                    title="关闭"
                >
                    <X size={18} />
                </button>
            </div>
        </header>
    );
};

export default Header;
