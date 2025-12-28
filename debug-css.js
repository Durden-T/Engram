/**
 * Engram CSS 深度调试脚本
 * 查找阻止按钮样式的根本原因
 */

(function debugButtonStyles() {
    console.log('=== 按钮样式深度调试 ===\n');

    const panelRoot = document.getElementById('engram-panel-root');
    if (!panelRoot) {
        console.error('❌ 找不到 #engram-panel-root');
        return;
    }

    // 找一个有 border 类的按钮
    const buttons = panelRoot.querySelectorAll('button');
    console.log(`找到 ${buttons.length} 个按钮\n`);

    // 创建测试按钮
    const testBtn = document.createElement('button');
    testBtn.className = 'border border-red-500';
    testBtn.textContent = 'Test';
    testBtn.id = 'engram-test-button';
    panelRoot.appendChild(testBtn);

    console.log('📋 测试按钮创建成功，className:', testBtn.className);

    // 检查计算样式
    const computed = window.getComputedStyle(testBtn);
    console.log('computed border:', computed.border);
    console.log('computed borderWidth:', computed.borderWidth);
    console.log('computed borderStyle:', computed.borderStyle);
    console.log('computed borderColor:', computed.borderColor);

    // 检查 CSS 规则覆盖情况
    console.log('\n🔍 检查匹配的 CSS 规则：\n');

    // 使用 Chrome DevTools API 获取匹配规则（如果可用）
    if (window.getMatchedCSSRules) {
        const rules = window.getMatchedCSSRules(testBtn);
        if (rules) {
            Array.from(rules).forEach((rule, i) => {
                console.log(`规则 ${i}:`, rule.selectorText, '{', rule.style.cssText, '}');
            });
        }
    } else {
        console.log('getMatchedCSSRules 不可用，使用手动检查...\n');

        // 手动检查样式表中匹配的规则
        const matchedRules = [];
        for (let i = 0; i < document.styleSheets.length; i++) {
            try {
                const sheet = document.styleSheets[i];
                const rules = sheet.cssRules || sheet.rules;
                if (!rules) continue;

                for (let j = 0; j < rules.length; j++) {
                    const rule = rules[j];
                    if (rule.selectorText) {
                        try {
                            if (testBtn.matches(rule.selectorText)) {
                                matchedRules.push({
                                    selector: rule.selectorText,
                                    specificity: getSpecificity(rule.selectorText),
                                    border: rule.style.border || rule.style.borderWidth,
                                    source: sheet.href || 'inline'
                                });
                            }
                        } catch (e) {
                            // 某些伪类选择器会报错
                        }
                    }
                }
            } catch (e) {
                // 跨域样式表
            }
        }

        // 按 specificity 排序
        matchedRules.sort((a, b) => b.specificity - a.specificity);

        console.log('匹配测试按钮的规则（按优先级排序）：\n');
        matchedRules.slice(0, 15).forEach((r, i) => {
            const borderInfo = r.border ? ` [border: ${r.border}]` : '';
            console.log(`  ${i + 1}. [${r.specificity}] ${r.selector}${borderInfo}`);
            console.log(`     来源: ${r.source.split('/').pop()}`);
        });
    }

    // 检查内联样式是否被 CSS 覆盖
    console.log('\n� 测试内联样式：');
    testBtn.style.setProperty('border', '2px solid red', 'important');
    const afterInline = window.getComputedStyle(testBtn);
    console.log('设置 border: 2px solid red !important');
    console.log('结果 borderWidth:', afterInline.borderWidth);
    console.log('结果 borderColor:', afterInline.borderColor);
    console.log('生效:', afterInline.borderWidth === '2px' ? '✅' : '❌');

    // 清理
    testBtn.remove();

    // 辅助函数：简单计算 specificity
    function getSpecificity(selector) {
        let a = 0, b = 0, c = 0;
        // ID 选择器
        a = (selector.match(/#[a-zA-Z][a-zA-Z0-9_-]*/g) || []).length;
        // 类、属性、伪类选择器
        b = (selector.match(/\.[a-zA-Z][a-zA-Z0-9_-]*/g) || []).length;
        b += (selector.match(/\[[^\]]+\]/g) || []).length;
        b += (selector.match(/:[a-zA-Z][a-zA-Z0-9_-]*/g) || []).length;
        // 元素、伪元素选择器
        c = (selector.match(/^[a-zA-Z]+|[ >+~][a-zA-Z]+/g) || []).length;
        c += (selector.match(/::[a-zA-Z][a-zA-Z0-9_-]*/g) || []).length;

        return a * 100 + b * 10 + c;
    }

    console.log('\n=== 调试完成 ===');
})();
