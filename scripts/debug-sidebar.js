/**
 * Debug Sidebar Script V2 - Deep Dive
 * 复制此脚本到控制台运行，用于查找样式污染源。
 */

(function debugSidebarV2() {
    console.group("🔍 Engram Sidebar Debugger V2 (Deep Dive)");
    const root = document.getElementById('engram-layout-root');
    if (!root) return console.error("❌ Root #engram-layout-root NOT found!");

    const aside = root.querySelector('aside');
    if (!aside) return console.error("❌ <aside> element NOT found!");

    // 1. 基础状态检查
    const computed = window.getComputedStyle(aside);
    console.log(`Checking Element:`, aside);
    console.log(`Current Computed Visibility: %c${computed.visibility}`, 'font-weight:bold;color:red');
    console.log(`Current ClassList: ${aside.className}`);

    // 2. 污染源搜查 (CSI: CSS Scene Investigation)
    console.group("🕵️ CSS Rules Investigation");
    let pollutedRuleFound = false;

    try {
        // 遍历所有样式表查找 .hidden 定义
        for (const sheet of document.styleSheets) {
            try {
                const rules = sheet.cssRules || sheet.rules;
                if (!rules) continue;

                for (const rule of rules) {
                    if (rule.selectorText && rule.selectorText.includes('.hidden')) {
                        // 检查是否有 visibility 设置
                        if (rule.style && rule.style.visibility === 'hidden') {
                            console.warn("⚠️ FOUND SUSPICIOUS RULE:", rule.cssText);
                            console.warn("   Located in stylesheet href:", sheet.href || 'Inline <style>');
                            pollutedRuleFound = true;
                        }
                    }
                }
            } catch (e) {
                // 跨域样式表可能无法访问，忽略
            }
        }
    } catch (e) {
        console.error("Error inspecting stylesheets:", e);
    }

    if (!pollutedRuleFound) {
        console.log("ℹ️ No explicit '.hidden { visibility: hidden }' rule found in accessible stylesheets.");
        console.log("   It might be in a cross-origin stylesheet or applying via a more specific selector.");
    }
    console.groupEnd();

    // 3. 实验性修复验证
    console.group("🧪 Experimental Fix Verification");

    // Test A: Remove 'hidden' class
    if (aside.classList.contains('hidden')) {
        console.log("Test A: Removing '.hidden' class from classList...");
        aside.classList.remove('hidden');
        const newStyle = window.getComputedStyle(aside);
        console.log(`   -> New Visibility: ${newStyle.visibility}`);

        if (newStyle.visibility === 'visible') {
            console.log("   ✅ CONCLUSION: The '.hidden' class IS the polluter.");
        } else {
            console.log("   ❌ The '.hidden' class removal did not fix it. Something else is setting visibility.");
        }

        // Restore
        aside.classList.add('hidden');
    } else {
        console.log("Element does not have 'hidden' class, skipping Test A.");
    }

    // Test B: Force Inline Visibility
    console.log("Test B: Forcing inline 'visibility: visible'...");
    const oldVisibility = aside.style.visibility;
    aside.style.visibility = 'visible';
    const newStyleB = window.getComputedStyle(aside);
    console.log(`   -> New Visibility: ${newStyleB.visibility}`);
    if (newStyleB.visibility === 'visible' && computed.visibility !== 'visible') {
        console.log("   ✅ Inline style overrides it. Recommendation: Use inline style or stronger selector.");
    }

    // Cleanup
    aside.style.visibility = oldVisibility;

    console.groupEnd();
    console.groupEnd();
})();
