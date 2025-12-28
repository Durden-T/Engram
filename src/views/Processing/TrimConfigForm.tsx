/**
 * 精简配置表单组件
 * 用于配置二层总结（精简）的触发条件
 */
import React from 'react';
import { Scissors, Hash, Layers, Calculator } from 'lucide-react';
import type { TrimConfig, TrimTriggerType } from '../APIPresets/types';

interface TrimConfigFormProps {
    config: TrimConfig;
    onChange: (config: TrimConfig) => void;
}

const TRIGGER_OPTIONS: { id: TrimTriggerType; label: string; description: string; icon: React.ElementType }[] = [
    { id: 'token', label: 'Token 数', description: '总结内容达到 Token 上限时触发', icon: Calculator },
    { id: 'floor', label: '楼层数', description: '总结覆盖的楼层达到上限时触发', icon: Layers },
    { id: 'count', label: '总结次数', description: '执行总结的次数达到上限时触发', icon: Hash },
];

export const TrimConfigForm: React.FC<TrimConfigFormProps> = ({
    config,
    onChange,
}) => {
    const handleToggle = () => {
        onChange({ ...config, enabled: !config.enabled });
    };

    const handleTriggerChange = (trigger: TrimTriggerType) => {
        onChange({ ...config, trigger });
    };

    const handleLimitChange = (key: 'tokenLimit' | 'floorLimit' | 'countLimit', value: number) => {
        onChange({ ...config, [key]: value });
    };

    return (
        <div className="space-y-6">
            {/* 页面标题 */}
            <div className="flex items-center gap-3 mb-6">
                <Scissors className="w-5 h-5 text-orange-400" />
                <h3 className="text-lg font-medium text-white">精简配置</h3>
            </div>

            {/* 启用开关 */}
            <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center gap-3">
                    <Scissors className="w-4 h-4 text-orange-400" />
                    <div>
                        <div className="text-sm font-medium text-white">启用精简</div>
                        <div className="text-xs text-white/50">
                            将多次总结压缩为更简洁的摘要
                        </div>
                    </div>
                </div>
                <button
                    type="button"
                    onClick={handleToggle}
                    className={`relative w-11 h-6 rounded-full transition-colors ${config.enabled ? 'bg-orange-500' : 'bg-white/20'
                        }`}
                >
                    <span
                        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${config.enabled ? 'translate-x-5' : ''
                            }`}
                    />
                </button>
            </div>

            {/* 触发器选择 */}
            <div className={config.enabled ? '' : 'opacity-50 pointer-events-none'}>
                <div className="text-sm font-medium text-white mb-3">触发条件</div>
                <div className="grid grid-cols-3 gap-2">
                    {TRIGGER_OPTIONS.map((opt) => (
                        <button
                            key={opt.id}
                            type="button"
                            onClick={() => handleTriggerChange(opt.id)}
                            className={`flex flex-col items-center gap-2 p-3 rounded-lg border transition-colors ${config.trigger === opt.id
                                ? 'border-orange-500 bg-orange-500/10 text-orange-400'
                                : 'border-white/10 bg-white/5 text-white/60 hover:border-white/20'
                                }`}
                        >
                            {React.createElement(opt.icon, { className: 'w-5 h-5' })}
                            <span className="text-sm font-medium">{opt.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* 阈值设置 */}
            <div className={config.enabled ? '' : 'opacity-50 pointer-events-none'}>
                <div className="text-sm font-medium text-white mb-3">阈值设置</div>

                {/* Token 上限 */}
                {config.trigger === 'token' && (
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-white">Token 上限</span>
                            <span className="text-sm font-mono text-orange-400">{config.tokenLimit}</span>
                        </div>
                        <input
                            type="range"
                            min="1024"
                            max="16384"
                            step="512"
                            value={config.tokenLimit}
                            onChange={(e) => handleLimitChange('tokenLimit', Number(e.target.value))}
                            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-orange-500"
                        />
                        <div className="flex justify-between text-xs text-white/40 mt-1">
                            <span>1K</span>
                            <span>8K</span>
                            <span>16K</span>
                        </div>
                    </div>
                )}

                {/* 楼层上限 */}
                {config.trigger === 'floor' && (
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-white">楼层上限</span>
                            <span className="text-sm font-mono text-orange-400">{config.floorLimit}</span>
                        </div>
                        <input
                            type="range"
                            min="10"
                            max="200"
                            step="10"
                            value={config.floorLimit}
                            onChange={(e) => handleLimitChange('floorLimit', Number(e.target.value))}
                            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-orange-500"
                        />
                        <div className="flex justify-between text-xs text-white/40 mt-1">
                            <span>10</span>
                            <span>100</span>
                            <span>200</span>
                        </div>
                    </div>
                )}

                {/* 总结次数上限 */}
                {config.trigger === 'count' && (
                    <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-white">总结次数上限</span>
                            <span className="text-sm font-mono text-orange-400">{config.countLimit}</span>
                        </div>
                        <input
                            type="range"
                            min="2"
                            max="20"
                            step="1"
                            value={config.countLimit}
                            onChange={(e) => handleLimitChange('countLimit', Number(e.target.value))}
                            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-orange-500"
                        />
                        <div className="flex justify-between text-xs text-white/40 mt-1">
                            <span>2</span>
                            <span>10</span>
                            <span>20</span>
                        </div>
                    </div>
                )}
            </div>

            {/* 手动触发按钮 */}
            <div className={config.enabled ? '' : 'opacity-50 pointer-events-none'}>
                <button
                    type="button"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all
                        bg-orange-500 text-white hover:bg-orange-400 active:scale-95"
                    onClick={() => {
                        console.log('手动触发精简...');
                        // TODO: 实现精简逻辑
                    }}
                >
                    <Scissors className="w-4 h-4" />
                    手动精简
                </button>
            </div>

            {/* 说明 */}
            <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
                <div className="text-sm text-orange-300">
                    <strong>说明：</strong>精简会将多次总结内容使用 <code>trim</code> 类型的提示词模板压缩为更简洁的摘要，减少 Token 消耗。
                </div>
            </div>
        </div>
    );
};

export default TrimConfigForm;
