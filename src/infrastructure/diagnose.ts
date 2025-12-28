/**
 * Diagnose - 诊断脚本
 * 用于定位主题色失效等问题的根源
 */

import { Logger } from './logger';

export function runDiagnostics() {
    console.group('🔍 Engram Diagnostics');

    // 1. 检查样式表注入
    const linkTag = document.getElementById('engram-styles');
    if (linkTag) {
        Logger.info('Diagnostics', '✅ 样式表 link 标签存在', { href: (linkTag as HTMLLinkElement).href });
    } else {
        Logger.error('Diagnostics', '❌ 样式表 link 标签丢失');
    }

    // 2. 检查 CSS 变量 (Root)
    const rootStyles = getComputedStyle(document.documentElement);
    const bgVar = rootStyles.getPropertyValue('--background').trim();
    const primaryVar = rootStyles.getPropertyValue('--primary').trim();

    if (bgVar) {
        Logger.info('Diagnostics', '✅ Root CSS变量存在', {
            '--background': bgVar,
            '--primary': primaryVar
        });
    } else {
        Logger.error('Diagnostics', '❌ Root CSS变量未定义或为空');
    }

    // 3. 检查 Context Wrapper
    const panelRoot = document.getElementById('engram-panel-root');
    if (panelRoot) {
        const computed = getComputedStyle(panelRoot);
        const bgColor = computed.backgroundColor;
        const color = computed.color;

        Logger.info('Diagnostics', '🎨 Panel 样式计算值', {
            'backgroundColor': bgColor,
            'color': color,
            'classes': panelRoot.className
        });

        // 检查是否应用了 Tailwind 类
        if (panelRoot.classList.contains('bg-background')) {
            if (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') {
                Logger.error('Diagnostics', '❌ bg-background 类存在但背景透明 (变量失效)');
            } else {
                Logger.success('Diagnostics', '✅ bg-background 生效');
            }
        }
    } else {
        Logger.warn('Diagnostics', '⚠️ 找不到 #engram-panel-root 面板元素');
    }

    // 4. 这里的测试是为了验证 color-mix 是否被浏览器支持以及 tailwind生成的颜色是否有效
    const testEl = document.createElement('div');
    testEl.style.display = 'none';
    testEl.className = 'bg-primary/50 text-primary-foreground';
    document.body.appendChild(testEl);

    // 给一点时间让浏览器渲染（虽然 display none 可能不会触发重绘，但 computed style 应该能算出来）
    requestAnimationFrame(() => {
        const testComputed = getComputedStyle(testEl);
        Logger.info('Diagnostics', '🧪 Tailwind 混合色测试 (bg-primary/50)', {
            'computedBg': testComputed.backgroundColor // 应该是 rgba(...)
        });
        document.body.removeChild(testEl);
    });

    console.groupEnd();
}
