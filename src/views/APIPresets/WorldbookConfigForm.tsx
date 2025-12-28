/**
 * 世界书配置表单
 * 复用 FormField 组件
 */
import React from 'react';
import { Book, Globe } from 'lucide-react';
import type { WorldbookConfig } from './types';

interface WorldbookConfigFormProps {
    config: WorldbookConfig;
    onChange: (config: WorldbookConfig) => void;
}

export const WorldbookConfigForm: React.FC<WorldbookConfigFormProps> = ({
    config,
    onChange,
}) => {
    const handleToggle = (key: keyof WorldbookConfig) => {
        onChange({
            ...config,
            [key]: !config[key],
        });
    };

    return (
        <div className="space-y-6">
            {/* 页面标题 */}
            <div className="flex items-center gap-3 mb-6">
                <Book className="w-5 h-5 text-blue-400" />
                <h3 className="text-lg font-medium text-white">世界书配置</h3>
            </div>

            {/* 配置项 */}
            <div className="space-y-4">
                {/* 启用世界书 */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10">
                    <div className="flex items-center gap-3">
                        <Book className="w-4 h-4 text-blue-400" />
                        <div>
                            <div className="text-sm font-medium text-white">启用世界书</div>
                            <div className="text-xs text-white/50">
                                总结时注入始终激活（蓝灯）的世界书条目
                            </div>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={() => handleToggle('enabled')}
                        className={`relative w-11 h-6 rounded-full transition-colors ${config.enabled ? 'bg-blue-500' : 'bg-white/20'
                            }`}
                    >
                        <span
                            className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${config.enabled ? 'translate-x-5' : ''
                                }`}
                        />
                    </button>
                </div>

                {/* 包含全局世界书 */}
                <div className={`flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/10 ${!config.enabled ? 'opacity-50' : ''}`}>
                    <div className="flex items-center gap-3">
                        <Globe className="w-4 h-4 text-green-400" />
                        <div>
                            <div className="text-sm font-medium text-white">包含全局世界书</div>
                            <div className="text-xs text-white/50">
                                关闭后只读取角色世界书和聊天世界书
                            </div>
                        </div>
                    </div>
                    <button
                        type="button"
                        disabled={!config.enabled}
                        onClick={() => handleToggle('includeGlobal')}
                        className={`relative w-11 h-6 rounded-full transition-colors ${config.includeGlobal && config.enabled ? 'bg-green-500' : 'bg-white/20'
                            } ${!config.enabled ? 'cursor-not-allowed' : ''}`}
                    >
                        <span
                            className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${config.includeGlobal ? 'translate-x-5' : ''
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* 说明 */}
            <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <div className="text-sm text-blue-300">
                    <strong>说明：</strong>总结时会自动获取所有始终激活（constant=true）的世界书条目作为背景设定注入到提示词中。
                </div>
            </div>
        </div>
    );
};

export default WorldbookConfigForm;
