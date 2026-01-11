/**
 * MemoryStream 滚动容器诊断脚本
 *
 * 在浏览器控制台运行此脚本来检查滚动容器的计算样式
 * 复制粘贴到控制台执行
 */

(function debugScrollContainers() {
    console.log('🔍 MemoryStream 滚动诊断开始...\n');

    // 找到 MemoryStream 根元素
    const root = document.querySelector('#engram-panel-root');
    if (!root) {
        console.error('❌ 找不到 #engram-panel-root');
        return;
    }

    // 辅助函数：获取关键样式
    function getKeyStyles(el) {
        const cs = getComputedStyle(el);
        return {
            display: cs.display,
            flexDirection: cs.flexDirection,
            height: cs.height,
            maxHeight: cs.maxHeight,
            minHeight: cs.minHeight,
            overflow: cs.overflow,
            overflowX: cs.overflowX,
            overflowY: cs.overflowY,
            flex: cs.flex,
            position: cs.position,
        };
    }

    // 辅助函数：检查元素
    function checkElement(selector, name) {
        const el = root.querySelector(selector);
        if (!el) {
            console.warn(`⚠️ 找不到 ${name} (${selector})`);
            return null;
        }

        const styles = getKeyStyles(el);
        const rect = el.getBoundingClientRect();

        console.group(`📦 ${name}`);
        console.log('选择器:', selector);
        console.log('类名:', el.className);
        console.log('尺寸:', `${Math.round(rect.width)} x ${Math.round(rect.height)}`);
        console.log('scrollHeight:', el.scrollHeight, 'clientHeight:', el.clientHeight);
        console.log('可滚动:', el.scrollHeight > el.clientHeight ? '✅ 是' : '❌ 否');
        console.table(styles);
        console.groupEnd();

        return { el, styles, rect };
    }

    // 检查从根到滚动容器的整个链
    console.group('📊 容器链分析');

    // 1. 根容器
    const rootStyles = getKeyStyles(root);
    console.log('🌳 #engram-panel-root');
    console.table(rootStyles);

    // 2. 寻找主要布局容器
    const containers = root.querySelectorAll('[class*="flex"]');
    console.log(`\n找到 ${containers.length} 个 flex 容器\n`);

    // 寻找可能的滚动容器
    const scrollContainers = root.querySelectorAll('[class*="overflow"]');
    console.log(`找到 ${scrollContainers.length} 个 overflow 容器:`);

    scrollContainers.forEach((el, i) => {
        const cs = getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        const canScroll = el.scrollHeight > el.clientHeight;

        console.log(`  ${i + 1}. [${cs.overflowY}] ${Math.round(rect.width)}x${Math.round(rect.height)} scroll:${el.scrollHeight} client:${el.clientHeight} ${canScroll ? '✅' : '❌'}`);
        console.log(`     class: ${el.className.substring(0, 80)}...`);
    });

    console.groupEnd();

    // 3. 深度分析 - 从根向下遍历
    console.group('\n🔬 高度链分析 (从根到内容)');

    let current = root;
    let depth = 0;
    const maxDepth = 15;

    while (current && depth < maxDepth) {
        const cs = getComputedStyle(current);
        const rect = current.getBoundingClientRect();

        const heightInfo = {
            computed: cs.height,
            actual: Math.round(rect.height),
            scrollHeight: current.scrollHeight,
            overflow: cs.overflowY,
        };

        const tag = current.tagName.toLowerCase();
        const id = current.id ? `#${current.id}` : '';
        const cls = current.className ? `.${current.className.split(' ')[0]}` : '';

        console.log(`${'  '.repeat(depth)}${tag}${id}${cls} → h:${heightInfo.computed} (${heightInfo.actual}px) overflow:${heightInfo.overflow}`);

        // 找下一个有高度的子元素
        const children = Array.from(current.children);
        const nextChild = children.find(c => {
            const rect = c.getBoundingClientRect();
            return rect.height > 0;
        });

        if (!nextChild) break;
        current = nextChild;
        depth++;
    }

    console.groupEnd();

    // 4. 问题诊断
    console.group('\n💡 可能的问题');

    // 检查是否有元素使用了 h-full 但父元素没有固定高度
    const hFullElements = root.querySelectorAll('[class*="h-full"]');
    hFullElements.forEach((el, i) => {
        const parent = el.parentElement;
        if (parent) {
            const parentCs = getComputedStyle(parent);
            const parentRect = parent.getBoundingClientRect();
            if (parentCs.height === 'auto' || parentRect.height === 0) {
                console.warn(`⚠️ h-full 元素 ${i + 1} 的父元素高度是 auto 或 0:`, el);
            }
        }
    });

    // 检查 flex-1 是否有 min-h-0
    const flex1Elements = root.querySelectorAll('[class*="flex-1"]');
    flex1Elements.forEach((el, i) => {
        const cs = getComputedStyle(el);
        if (cs.minHeight !== '0px') {
            console.warn(`⚠️ flex-1 元素 ${i + 1} 缺少 min-h-0 (当前 min-height: ${cs.minHeight}):`, el);
        }
    });

    console.groupEnd();

    console.log('\n✅ 诊断完成');
})();
