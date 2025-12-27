/**
 * 通用表单字段组件
 */
import React from 'react';

// ==================== 基础 Props ====================

interface BaseFieldProps {
    label: string;
    description?: string;
    required?: boolean;
    error?: string;
    className?: string;
}

// ==================== 文本输入 ====================

interface TextFieldProps extends BaseFieldProps {
    type?: 'text' | 'password' | 'url';
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    disabled?: boolean;
}

export const TextField: React.FC<TextFieldProps> = ({
    label,
    description,
    required,
    error,
    className,
    type = 'text',
    value,
    onChange,
    placeholder,
    disabled,
}) => {
    return (
        <div className={`mb-4 ${className || ''}`}>
            <label className="block mb-2 text-lg font-medium text-text-primary">
                {label}
                {required && <span className="text-primary ml-0.5">*</span>}
            </label>
            {description && <p className="m-0 mb-2 text-md text-muted">{description}</p>}
            <input
                type={type}
                className={`w-full px-3 py-2.5 bg-input border border-border-default rounded-md text-text-primary text-xl transition-all outline-none focus:border-border-focus focus:ring-2 focus:ring-primary-10 ${error ? '!border-error' : ''}`}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                disabled={disabled}
            />
            {error && <span className="block mt-1 text-md text-error-light">{error}</span>}
        </div>
    );
};

// ==================== 数字输入（带滑块） ====================

interface NumberFieldProps extends BaseFieldProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    showSlider?: boolean;
    disabled?: boolean;
}

export const NumberField: React.FC<NumberFieldProps> = ({
    label,
    description,
    required,
    error,
    className,
    value,
    onChange,
    min = 0,
    max = 100,
    step = 1,
    showSlider = true,
    disabled,
}) => {
    return (
        <div className={`mb-4 ${className || ''}`}>
            <div className="flex items-center justify-between mb-2">
                <label className="block text-lg font-medium text-text-primary">
                    {label}
                    {required && <span className="text-primary ml-0.5">*</span>}
                </label>
                <span className="text-lg text-primary font-mono">{value}</span>
            </div>
            {description && <p className="m-0 mb-2 text-md text-muted">{description}</p>}
            <div className="flex items-center gap-3">
                {showSlider && (
                    <input
                        type="range"
                        className="flex-1 h-1 appearance-none bg-active rounded-sm cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-[image:var(--engram-gradient)] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
                        value={value}
                        onChange={(e) => onChange(parseFloat(e.target.value))}
                        min={min}
                        max={max}
                        step={step}
                        disabled={disabled}
                    />
                )}
                <input
                    type="number"
                    className={`w-full px-3 py-2.5 bg-input border border-border-default rounded-md text-text-primary text-xl transition-all outline-none focus:border-border-focus focus:ring-2 focus:ring-primary-10 w-[80px] text-center ${error ? '!border-error' : ''}`}
                    value={value}
                    onChange={(e) => {
                        const val = parseFloat(e.target.value);
                        if (!isNaN(val)) {
                            onChange(Math.max(min, Math.min(max, val)));
                        }
                    }}
                    min={min}
                    max={max}
                    step={step}
                    disabled={disabled}
                />
            </div>
            {error && <span className="block mt-1 text-md text-error-light">{error}</span>}
        </div>
    );
};

// ==================== 下拉选择 ====================

interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}

interface SelectFieldProps extends BaseFieldProps {
    value: string;
    onChange: (value: string) => void;
    options: SelectOption[];
    placeholder?: string;
    disabled?: boolean;
}

export const SelectField: React.FC<SelectFieldProps> = ({
    label,
    description,
    required,
    error,
    className,
    value,
    onChange,
    options,
    placeholder,
    disabled,
}) => {
    return (
        <div className={`mb-4 ${className || ''}`}>
            <label className="block mb-2 text-lg font-medium text-text-primary">
                {label}
                {required && <span className="text-primary ml-0.5">*</span>}
            </label>
            {description && <p className="m-0 mb-2 text-md text-muted">{description}</p>}
            <select
                className={`w-full px-3 py-2.5 bg-input border border-border-default rounded-md text-text-primary text-xl transition-all outline-none focus:border-border-focus focus:ring-2 focus:ring-primary-10 ${error ? '!border-error' : ''}`}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                disabled={disabled}
            >
                {placeholder && (
                    <option value="" disabled>
                        {placeholder}
                    </option>
                )}
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                        {opt.label}
                    </option>
                ))}
            </select>
            {error && <span className="block mt-1 text-md text-error-light">{error}</span>}
        </div>
    );
};

// ==================== 开关切换 ====================

interface SwitchFieldProps extends BaseFieldProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
}

export const SwitchField: React.FC<SwitchFieldProps> = ({
    label,
    description,
    className,
    checked,
    onChange,
    disabled,
}) => {
    return (
        <div className={`mb-4 flex items-center justify-between p-3 bg-surface rounded-lg ${className || ''}`}>
            <div className="flex-1">
                <label className="block text-lg font-medium text-text-primary mb-0">{label}</label>
                {description && <p className="m-0 mt-1 text-md text-muted">{description}</p>}
            </div>
            <button
                type="button"
                className={`w-[44px] h-6 p-0.5 border-none rounded-full cursor-pointer transition-all ${checked ? 'bg-[image:var(--engram-gradient)]' : 'bg-active'
                    }`}
                onClick={() => !disabled && onChange(!checked)}
                disabled={disabled}
                role="switch"
                aria-checked={checked}
            >
                <span className={`block w-5 h-5 bg-white rounded-full transition-transform ${checked ? 'translate-x-[20px]' : ''}`} />
            </button>
        </div>
    );
};

// ==================== 分组标题 ====================

interface FormSectionProps {
    title: string;
    description?: string;
    children: React.ReactNode;
    collapsible?: boolean;
    defaultCollapsed?: boolean;
}

export const FormSection: React.FC<FormSectionProps> = ({
    title,
    description,
    children,
    collapsible = false,
    defaultCollapsed = false,
}) => {
    const [collapsed, setCollapsed] = React.useState(defaultCollapsed);

    return (
        <div className={`mb-5 p-4 bg-elevated rounded-xl ${collapsed ? '' : ''}`}>
            <div
                className={`${collapsed ? 'mb-0' : 'mb-4'} ${collapsible ? 'cursor-pointer flex items-center justify-between' : ''
                    }`}
                onClick={() => collapsible && setCollapsed(!collapsed)}
            >
                <div className="">
                    <h4 className="m-0 text-xl font-semibold text-text-primary">{title}</h4>
                    {description && <p className="mt-1 text-md text-muted">{description}</p>}
                </div>
                {collapsible && (
                    <span className="text-muted text-xs">
                        {collapsed ? '▶' : '▼'}
                    </span>
                )}
            </div>
            {!collapsed && <div className="">{children}</div>}
        </div>
    );
};
