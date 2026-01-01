/**
 * ThemeContext - 主题上下文
 * 
 * 内部使用 Zustand store，保持向后兼容的 Provider API
 * 推荐直接使用 useThemeStore 以获得更好的性能
 */

import React from 'react';
import { useThemeStore } from '@/stores/themeStore';

// 保持向后兼容的 hook
export function useTheme() {
    const theme = useThemeStore(state => state.theme);
    const setTheme = useThemeStore(state => state.setTheme);
    const isDarkMode = useThemeStore(state => state.isDarkMode);
    return { theme, setTheme, isDarkMode };
}

// ThemeProvider 现在只是透传 children，实际状态由 Zustand 管理
export function ThemeProvider({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

