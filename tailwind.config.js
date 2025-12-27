/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "var(--engram-primary)",
                    hover: "var(--engram-primary-hover)", // Assuming hover var exists or using opacity
                    10: "var(--engram-primary-10)",
                    20: "var(--engram-primary-20)",
                    30: "var(--engram-primary-30)",
                    50: "var(--engram-primary-50)",
                },
                secondary: "var(--engram-secondary)",
                bg: {
                    base: "var(--engram-bg-base)",
                    elevated: "var(--engram-bg-elevated)",
                    surface: "var(--engram-bg-surface)",
                    hover: "var(--engram-bg-hover)",
                    active: "var(--engram-bg-active)",
                    terminal: "var(--engram-bg-terminal)",
                },
                text: {
                    primary: "var(--engram-text-primary)",
                    secondary: "var(--engram-text-secondary)",
                    muted: "var(--engram-text-muted)",
                    disabled: "var(--engram-text-disabled)",
                },
                border: {
                    DEFAULT: "var(--engram-border-default)",
                    light: "var(--engram-border-light)",
                    focus: "var(--engram-border-focus)",
                },
                success: "var(--engram-success)",
                warning: "var(--engram-warning)",
                error: "var(--engram-error)",
            },
            borderRadius: {
                sm: "var(--engram-radius-sm)",
                md: "var(--engram-radius-md)",
                lg: "var(--engram-radius-lg)",
                xl: "var(--engram-radius-xl)",
            },
            spacing: {
                1: "var(--engram-space-1)",
                2: "var(--engram-space-2)",
                3: "var(--engram-space-3)",
                4: "var(--engram-space-4)",
                5: "var(--engram-space-5)",
                6: "var(--engram-space-6)",
            },
            fontFamily: {
                mono: "var(--engram-font-mono)",
            },
            boxShadow: {
                sm: "var(--engram-shadow-sm)",
                md: "var(--engram-shadow-md)",
                lg: "var(--engram-shadow-lg)",
                glow: "var(--engram-shadow-glow)",
            }
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    }
};
