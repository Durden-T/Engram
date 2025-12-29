/**
 * Engram 设置持久化终极调试脚本 v3
 * 
 * 深入分析 SillyTavern 的扩展设置机制
 */

(function debugEngramV3() {
    console.log('========== Engram Debug v3 ==========');

    // 1. 检查两个不同的设置路径
    console.log('\n1. 设置路径对比:');
    const ctx = window.SillyTavern?.getContext?.();

    // 路径 A: window.SillyTavern.extension_settings
    const pathA = window.SillyTavern?.extension_settings;
    console.log('   路径 A (window.SillyTavern.extension_settings):');
    console.log('   - 存在:', !!pathA);
    console.log('   - engram:', pathA?.engram);

    // 路径 B: context.extensionSettings
    const pathB = ctx?.extensionSettings;
    console.log('   路径 B (context.extensionSettings):');
    console.log('   - 存在:', !!pathB);
    console.log('   - engram:', pathB?.engram);

    // 检查是否是同一个对象
    console.log('   - 路径A === 路径B:', pathA === pathB);

    // 2. 列出所有已注册的扩展设置
    console.log('\n2. 已注册的扩展设置:');
    const settingsObj = pathA || pathB;
    if (settingsObj) {
        const keys = Object.keys(settingsObj).sort();
        console.log('   共', keys.length, '个扩展');
        keys.forEach(k => {
            const val = settingsObj[k];
            const type = typeof val;
            console.log(`   - ${k}: ${type}${type === 'object' && val ? ` (${Object.keys(val).length} keys)` : ''}`);
        });
    }

    // 3. 检查 Engram 是如何被禁用/启用的
    console.log('\n3. Engram 扩展状态:');
    const disabled = settingsObj?.disabledExtensions || [];
    const engramDisabled = disabled.filter(e => e.toLowerCase().includes('engram'));
    console.log('   - 被禁用的 Engram 相关项:', engramDisabled);

    // 4. 尝试创建并保存 engram 设置
    console.log('\n4. 尝试创建 engram 设置:');

    // 确保 extension_settings 存在
    if (!window.SillyTavern) {
        console.log('   ✗ window.SillyTavern 不存在!');
        return;
    }

    if (!window.SillyTavern.extension_settings) {
        window.SillyTavern.extension_settings = {};
        console.log('   创建了 extension_settings 对象');
    }

    // 创建 engram 设置
    if (!window.SillyTavern.extension_settings.engram) {
        window.SillyTavern.extension_settings.engram = {
            theme: 'odysseia',
            hasSeenWelcome: true,
            lastReadVersion: '0.1.0',
            presets: {},
            templates: {},
            promptTemplates: []
        };
        console.log('   ✓ 创建了 engram 设置对象');
    } else {
        window.SillyTavern.extension_settings.engram.hasSeenWelcome = true;
        window.SillyTavern.extension_settings.engram.lastReadVersion = '0.1.0';
        console.log('   ✓ 更新了 hasSeenWelcome 和 lastReadVersion');
    }

    console.log('   当前 engram 设置:', window.SillyTavern.extension_settings.engram);

    // 5. 尝试保存
    console.log('\n5. 尝试保存:');
    if (ctx?.saveSettingsDebounced) {
        ctx.saveSettingsDebounced();
        console.log('   ✓ 调用了 context.saveSettingsDebounced()');
    } else {
        console.log('   ✗ saveSettingsDebounced 不可用');
    }

    // 6. 监听 extension_settings 变化
    console.log('\n6. 设置监视器:');
    const engram = window.SillyTavern.extension_settings.engram;
    let hasSeenWelcome = engram.hasSeenWelcome;

    // 使用 getter/setter 监控变化
    Object.defineProperty(engram, 'hasSeenWelcome', {
        get() { return hasSeenWelcome; },
        set(val) {
            console.log('[监视器] hasSeenWelcome 被设置为:', val);
            console.trace('设置来源');
            hasSeenWelcome = val;
        },
        configurable: true
    });
    console.log('   ✓ hasSeenWelcome 监视器已安装');

    // 7. 延迟验证
    console.log('\n7. 延迟验证 (3秒后):');
    setTimeout(() => {
        console.log('========== 延迟验证结果 ==========');
        const current = window.SillyTavern?.extension_settings?.engram;
        console.log('   engram 设置:', current);
        console.log('   hasSeenWelcome:', current?.hasSeenWelcome);
        console.log('   lastReadVersion:', current?.lastReadVersion);
        console.log('========== 验证完成 ==========');
    }, 3000);

    console.log('\n========== 初始调试完成 ==========');
    console.log('请等待 3 秒查看延迟验证结果');
    console.log('如果刷新后设置丢失，查看监视器日志确定何时被重置');
})();
