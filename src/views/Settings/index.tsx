// 设置页面视图
import React from 'react';
import { Settings as SettingsIcon } from 'lucide-react';
import { ThemeSelector } from './components/ThemeSelector';

export const Settings: React.FC = () => {
    return (
        <div className="engram-settings">
            <div className="engram-page-header">
                <SettingsIcon size={24} />
                <h2>设置</h2>
            </div>
            <div className="engram-page-content">
                <div className="space-y-6">
                    <section className="bg-card rounded-lg p-6 border border-border shadow-sm">
                        <ThemeSelector />
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Settings;
