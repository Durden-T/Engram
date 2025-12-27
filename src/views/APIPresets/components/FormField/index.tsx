/**
 * 通用表单字段组件
 */
import React from 'react';
import styles from './styles.module.css';

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
        <div className={`${styles.field} ${className || ''}`}>
            <label className={styles.label}>
                {label}
                {required && <span className={styles.required}>*</span>}
            </label>
            {description && <p className={styles.desc}>{description}</p>}
            <input
                type={type}
                className={`${styles.input} ${error ? styles.hasError : ''}`}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                disabled={disabled}
            />
            {error && <span className={styles.error}>{error}</span>}
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
        <div className={`${styles.field} ${className || ''}`}>
            <div className={styles.labelRow}>
                <label className={styles.label}>
                    {label}
                    {required && <span className={styles.required}>*</span>}
                </label>
                <span className={styles.value}>{value}</span>
            </div>
            {description && <p className={styles.desc}>{description}</p>}
            <div className={styles.numberGroup}>
                {showSlider && (
                    <input
                        type="range"
                        className={styles.slider}
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
                    className={`${styles.input} ${styles.numberInput} ${error ? styles.hasError : ''}`}
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
            {error && <span className={styles.error}>{error}</span>}
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
        <div className={`${styles.field} ${className || ''}`}>
            <label className={styles.label}>
                {label}
                {required && <span className={styles.required}>*</span>}
            </label>
            {description && <p className={styles.desc}>{description}</p>}
            <select
                className={`${styles.select} ${error ? styles.hasError : ''}`}
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
            {error && <span className={styles.error}>{error}</span>}
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
        <div className={`${styles.field} ${styles.switchWrapper} ${className || ''}`}>
            <div className={styles.switchContent}>
                <label className={styles.label}>{label}</label>
                {description && <p className={styles.desc}>{description}</p>}
            </div>
            <button
                type="button"
                className={`${styles.switch} ${checked ? styles.switchActive : ''}`}
                onClick={() => !disabled && onChange(!checked)}
                disabled={disabled}
                role="switch"
                aria-checked={checked}
            >
                <span className={styles.switchToggle} />
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
        <div className={`${styles.section} ${collapsed ? styles.collapsed : ''}`}>
            <div
                className={`${styles.sectionHeader} ${collapsible ? styles.sectionHeaderClickable : ''}`}
                onClick={() => collapsible && setCollapsed(!collapsed)}
            >
                <div className={styles.sectionTitle}>
                    <h4>{title}</h4>
                    {description && <p>{description}</p>}
                </div>
                {collapsible && (
                    <span className={styles.sectionArrow}>
                        {collapsed ? '▶' : '▼'}
                    </span>
                )}
            </div>
            {!collapsed && <div className={styles.sectionBody}>{children}</div>}
        </div>
    );
};
