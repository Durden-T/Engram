/**
 * Engram Scrollbar 调试脚本
 * 在浏览器控制台运行此脚本来诊断滚动问题
 */

(function debugScrollbar() {
    console.log('=== Engram Scrollbar 调试 ===\n');

    // 检查关键容器
    const containers = [
        { selector: '.engram-api-presets', name: 'API Presets 容器' },
        { selector: '.engram-api-content', name: 'API 内容区域' },
        { selector: '.engram-llm-tab', name: 'LLM 标签页' },
        { selector: '.engram-preset-list', name: '预设列表' },
        { selector: '.preset-list-items', name: '预设列表项容器' },
        { selector: '.engram-preset-editor', name: '预设编辑器' },
        { selector: '.engram-content', name: 'Engram 内容区' },
        { selector: '.engram-main', name: 'Engram 主区域' },
    ];

    containers.forEach(({ selector, name }) => {
        const el = document.querySelector(selector);
        if (!el) {
            console.log(`❌ ${name} (${selector}): 未找到元素`);
            return;
        }

        const style = getComputedStyle(el);
        const rect = el.getBoundingClientRect();

        const info = {
            '宽度': `${rect.width.toFixed(0)}px`,
            '高度': `${rect.height.toFixed(0)}px`,
            'scrollHeight': `${el.scrollHeight}px`,
            'clientHeight': `${el.clientHeight}px`,
            '可滚动': el.scrollHeight > el.clientHeight ? '✅ 是' : '❌ 否',
            'overflow': style.overflow,
            'overflow-y': style.overflowY,
            'overflow-x': style.overflowX,
            'display': style.display,
            'flex': style.flex,
            'position': style.position,
            'height (CSS)': style.height,
            'max-height': style.maxHeight,
            'min-height': style.minHeight,
        };

        console.group(`${el.scrollHeight > el.clientHeight ? '🟢' : '🔴'} ${name} (${selector})`);
        console.table(info);
        console.groupEnd();
    });

    // 检查父级链
    console.log('\n=== 从 engram-preset-editor 向上检查父级 ===');
    let editor = document.querySelector('.engram-preset-editor');
    if (editor) {
        let current = editor;
        let depth = 0;
        while (current && depth < 10) {
            const style = getComputedStyle(current);
            const shouldBlock = style.overflow === 'hidden' || style.overflowY === 'hidden';
            console.log(
                `${shouldBlock ? '⚠️' : '  '} ${depth}: `,
                current.className || current.tagName,
                `| h=${current.clientHeight}px`,
                `| overflow-y=${style.overflowY}`,
                `| height=${style.height}`
            );
            current = current.parentElement;
            depth++;
        }
    } else {
        console.log('未找到 .engram-preset-editor');
    }

    // 建议
    console.log('\n=== 诊断建议 ===');
    const apiContent = document.querySelector('.engram-api-content');
    if (apiContent) {
        const style = getComputedStyle(apiContent);
        if (style.overflowY === 'hidden') {
            console.warn('⚠️ .engram-api-content 的 overflow-y 是 hidden，这会阻止滚动');
        }
        if (style.height === 'auto' || style.height === '') {
            console.warn('⚠️ .engram-api-content 没有固定高度，flex 容器需要 min-height: 0');
        }
    }

    console.log('\n完成调试。将以上信息提供给开发者。');
})();
