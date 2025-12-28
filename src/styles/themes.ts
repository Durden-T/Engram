import { Theme } from '../types/theme';

// Default Theme (Shadcn/OKLCH) - Minimalist Black & White / Paper feel
export const defaultTheme: Theme = {
    name: 'Default',
    colors: {
        background: 'oklch(0.9399 0.0203 345.6985)', // or pure white for minimalist
        foreground: 'oklch(0.4712 0 0)',
        card: 'oklch(0.9498 0.0500 86.8891)',
        cardForeground: 'oklch(0.4712 0 0)',
        popover: 'oklch(1.0000 0 0)',
        popoverForeground: 'oklch(0.4712 0 0)',
        primary: 'oklch(0.6209 0.1801 348.1385)',
        primaryForeground: 'oklch(1.0000 0 0)',
        secondary: 'oklch(0.8095 0.0694 198.1863)',
        secondaryForeground: 'oklch(0.3211 0 0)',
        muted: 'oklch(0.8800 0.0504 212.0952)',
        mutedForeground: 'oklch(0.5795 0 0)',
        accent: 'oklch(0.9195 0.0801 87.6670)',
        accentForeground: 'oklch(0.3211 0 0)',
        destructive: 'oklch(0.7091 0.1697 21.9551)',
        destructiveForeground: 'oklch(1.0000 0 0)',
        border: 'oklch(0.6209 0.1801 348.1385)',
        input: 'oklch(0.9189 0 0)',
        ring: 'oklch(0.7002 0.1597 350.7532)',
        chart1: 'oklch(0.7002 0.1597 350.7532)',
        chart2: 'oklch(0.8189 0.0799 212.0892)',
        chart3: 'oklch(0.9195 0.0801 87.6670)',
        chart4: 'oklch(0.7998 0.1110 348.1791)',
        chart5: 'oklch(0.6197 0.1899 353.9091)',
        sidebar: 'oklch(0.9140 0.0424 343.0913)',
        sidebarForeground: 'oklch(0.3211 0 0)',
        sidebarPrimary: 'oklch(0.6559 0.2118 354.3084)',
        sidebarPrimaryForeground: 'oklch(1.0000 0 0)',
        sidebarAccent: 'oklch(0.8228 0.1095 346.0184)',
        sidebarAccentForeground: 'oklch(0.3211 0 0)',
        sidebarBorder: 'oklch(0.9464 0.0327 307.1745)',
        sidebarRing: 'oklch(0.6559 0.2118 354.3084)',
    },
    variables: {
        radius: '0.4rem',
    }
};

export const darkTheme: Theme = {
    name: 'Default Dark',
    colors: {
        background: 'oklch(0.2497 0.0305 234.1628)',
        foreground: 'oklch(0.9306 0.0197 349.0785)',
        card: 'oklch(0.2902 0.0299 233.5352)',
        cardForeground: 'oklch(0.9306 0.0197 349.0785)',
        popover: 'oklch(0.2902 0.0299 233.5352)',
        popoverForeground: 'oklch(0.9306 0.0197 349.0785)',
        primary: 'oklch(0.9195 0.0801 87.6670)',
        primaryForeground: 'oklch(0.2497 0.0305 234.1628)',
        secondary: 'oklch(0.7794 0.0803 4.1330)',
        secondaryForeground: 'oklch(0.2497 0.0305 234.1628)',
        muted: 'oklch(0.2713 0.0086 255.5780)',
        mutedForeground: 'oklch(0.7794 0.0803 4.1330)',
        accent: 'oklch(0.6699 0.0988 356.9762)',
        accentForeground: 'oklch(0.9306 0.0197 349.0785)',
        destructive: 'oklch(0.6702 0.1806 350.3599)',
        destructiveForeground: 'oklch(0.2497 0.0305 234.1628)',
        border: 'oklch(0.3907 0.0399 242.2181)',
        input: 'oklch(0.3093 0.0305 232.0027)',
        ring: 'oklch(0.6998 0.0896 201.8672)',
        chart1: 'oklch(0.6998 0.0896 201.8672)',
        chart2: 'oklch(0.7794 0.0803 4.1330)',
        chart3: 'oklch(0.6699 0.0988 356.9762)',
        chart4: 'oklch(0.4408 0.0702 217.0848)',
        chart5: 'oklch(0.2713 0.0086 255.5780)',
        sidebar: 'oklch(0.18 0.02 235.00)', // Darker than main background
        sidebarForeground: 'oklch(0.96 0.01 260.00)',
        sidebarPrimary: 'oklch(0.6559 0.2118 354.3084)',
        sidebarPrimaryForeground: 'oklch(1.0000 0 0)',
        sidebarAccent: 'oklch(0.25 0.05 235.00)', // Visible contrast
        sidebarAccentForeground: 'oklch(1.00 0.00 0.00)',
        sidebarBorder: 'oklch(0.25 0.03 235.00)',
        sidebarRing: 'oklch(0.6559 0.2118 354.3084)',
    },
    variables: {
        radius: '0.4rem',
    }
};

// SillyTavern Inherited Theme
// Maps Shadcn semantic names to SillyTavern CSS variables
export const sillyTavernTheme: Theme = {
    name: 'SillyTavern',
    colors: {
        background: 'var(--SmartThemeBlurTintColor)',
        foreground: 'var(--SmartThemeBodyColor)',
        card: 'var(--SmartThemeBlurTintColor)', // Glass effect
        cardForeground: 'var(--SmartThemeBodyColor)',
        popover: 'var(--SmartThemeBlurTintColor)',
        popoverForeground: 'var(--SmartThemeBodyColor)',
        primary: 'var(--SmartThemeQuoteColor)',
        primaryForeground: 'var(--SmartThemeBodyColor)', // or contrast color
        secondary: 'var(--SmartThemeBorderColor)', // Using border as secondary bg
        secondaryForeground: 'var(--SmartThemeBodyColor)',
        muted: 'rgba(0,0,0,0.2)', // approximate muted
        mutedForeground: 'rgba(255,255,255,0.5)', // approximate muted text
        accent: 'var(--SmartThemeQuoteColor)',
        accentForeground: 'var(--SmartThemeBodyColor)',
        destructive: 'var(--SmartThemeBorderColor)', // fallback
        destructiveForeground: 'var(--SmartThemeBodyColor)',
        border: 'var(--SmartThemeBorderColor)',
        input: 'var(--SmartThemeBorderColor)',
        ring: 'var(--SmartThemeQuoteColor)',

        // Charts (fallback to accents or generated colors if ST doesn't have equivalents)
        chart1: 'var(--SmartThemeQuoteColor)',
        chart2: 'var(--SmartThemeQuoteColor)',
        chart3: 'var(--SmartThemeQuoteColor)',
        chart4: 'var(--SmartThemeQuoteColor)',
        chart5: 'var(--SmartThemeQuoteColor)',

        sidebar: 'var(--SmartThemeBlurTintColor)',
        sidebarForeground: 'var(--SmartThemeBodyColor)',
        sidebarPrimary: 'var(--SmartThemeQuoteColor)',
        sidebarPrimaryForeground: 'var(--SmartThemeBodyColor)',
        sidebarAccent: 'var(--SmartThemeBorderColor)',
        sidebarAccentForeground: 'var(--SmartThemeBodyColor)',
        sidebarBorder: 'var(--SmartThemeBorderColor)',
        sidebarRing: 'var(--SmartThemeQuoteColor)',
    },
    variables: {
        radius: '0.4rem',
    }
};

// Odysseia (Pink/Dark) - Vibrant, high contrast
export const odysseiaTheme: Theme = {
    name: 'Odysseia',
    colors: {
        background: 'oklch(0.20 0.05 320.00)', // Dark purple-ish background
        foreground: 'oklch(0.95 0.02 320.00)',
        card: 'oklch(0.25 0.05 320.00)',
        cardForeground: 'oklch(0.95 0.02 320.00)',
        popover: 'oklch(0.25 0.05 320.00)',
        popoverForeground: 'oklch(0.95 0.02 320.00)',
        primary: 'oklch(0.65 0.25 340.00)', // Vibrant pink
        primaryForeground: 'oklch(1.00 0.00 0.00)',
        secondary: 'oklch(0.35 0.10 320.00)',
        secondaryForeground: 'oklch(0.98 0.01 320.00)', // Brighter white
        muted: 'oklch(0.30 0.05 320.00)',
        mutedForeground: 'oklch(0.85 0.02 320.00)', // Much brighter grey
        accent: 'oklch(0.40 0.15 340.00)',
        accentForeground: 'oklch(0.98 0.01 320.00)', // Brighter white
        destructive: 'oklch(0.60 0.20 20.00)',
        destructiveForeground: 'oklch(1.00 0.00 0.00)',
        border: 'oklch(0.40 0.10 320.00)',
        input: 'oklch(0.30 0.05 320.00)',
        ring: 'oklch(0.65 0.25 340.00)',
        chart1: 'oklch(0.65 0.25 340.00)',
        chart2: 'oklch(0.60 0.20 280.00)',
        chart3: 'oklch(0.55 0.15 240.00)',
        chart4: 'oklch(0.50 0.10 200.00)',
        chart5: 'oklch(0.45 0.05 160.00)',
        sidebar: 'oklch(0.15 0.05 320.00)', // Darker than main background
        sidebarForeground: 'oklch(0.98 0.01 320.00)', // Brighter white for sidebar icons
        sidebarPrimary: 'oklch(0.65 0.25 340.00)',
        sidebarPrimaryForeground: 'oklch(1.00 0.00 0.00)',
        sidebarAccent: 'oklch(0.25 0.10 320.00)', // Visible contrast
        sidebarAccentForeground: 'oklch(0.98 0.02 320.00)',
        sidebarBorder: 'oklch(0.25 0.05 320.00)',
        sidebarRing: 'oklch(0.65 0.25 340.00)',
    },
    variables: {
        radius: '0.5rem',
    }
};

// Deep Space (Blue/Dark) - Classic sci-fi feel
export const deepSpaceTheme: Theme = {
    name: 'Deep Space',
    colors: {
        background: 'oklch(0.15 0.04 260.00)', // Deep blue-black
        foreground: 'oklch(0.90 0.02 260.00)',
        card: 'oklch(0.20 0.05 260.00)',
        cardForeground: 'oklch(0.90 0.02 260.00)',
        popover: 'oklch(0.20 0.05 260.00)',
        popoverForeground: 'oklch(0.90 0.02 260.00)',
        primary: 'oklch(0.60 0.20 250.00)', // Cyan/Blue
        primaryForeground: 'oklch(0.10 0.02 260.00)',
        secondary: 'oklch(0.30 0.08 260.00)',
        secondaryForeground: 'oklch(0.95 0.01 260.00)',
        muted: 'oklch(0.25 0.04 260.00)',
        mutedForeground: 'oklch(0.80 0.04 260.00)', // Brighter grey
        accent: 'oklch(0.35 0.10 250.00)',
        accentForeground: 'oklch(0.95 0.01 260.00)',
        destructive: 'oklch(0.60 0.20 20.00)',
        destructiveForeground: 'oklch(0.95 0.02 260.00)',
        border: 'oklch(0.35 0.08 260.00)',
        input: 'oklch(0.25 0.05 260.00)',
        ring: 'oklch(0.60 0.20 250.00)',
        chart1: 'oklch(0.60 0.20 250.00)',
        chart2: 'oklch(0.55 0.18 220.00)',
        chart3: 'oklch(0.50 0.15 190.00)',
        chart4: 'oklch(0.45 0.12 300.00)',
        chart5: 'oklch(0.40 0.10 340.00)',
        sidebar: 'oklch(0.10 0.03 260.00)', // Nearly black
        sidebarForeground: 'oklch(0.95 0.01 260.00)', // Brighter white
        sidebarPrimary: 'oklch(0.60 0.20 250.00)',
        sidebarPrimaryForeground: 'oklch(0.10 0.02 260.00)',
        sidebarAccent: 'oklch(0.20 0.08 260.00)',
        sidebarAccentForeground: 'oklch(0.95 0.02 260.00)',
        sidebarBorder: 'oklch(0.20 0.05 260.00)',
        sidebarRing: 'oklch(0.60 0.20 250.00)',
    },
    variables: {
        radius: '0.3rem',
    }
};

export const themes = {
    odysseia: odysseiaTheme,
    deepSpace: deepSpaceTheme,
    sillytavern: sillyTavernTheme,
    dark: darkTheme, // Keeping original as backup
    default: defaultTheme, // Keeping as 'Light' but user prefers others
};

export type ThemeName = keyof typeof themes;
