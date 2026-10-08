// GENERATED FILE — do not edit directly.
// Source: tokens/*.json. Regenerate with `npm run build:tokens`.

// Static values for runtime consumers (e.g. Recharts colors) that can't
// use CSS custom properties directly. For theme-reactive styling, use the
// CSS custom properties (var(--color-ink)) via SCSS/CSS instead, either from
// this file's generated siblings (_theme.scss, tokens.css) or by reading
// getComputedStyle(document.documentElement) at runtime.

export const tokens = {
  color: {
    red: "oklch(0.58 0.17 27)",
    redText: "oklch(0.46 0.17 27)",
    redDeep: "oklch(0.50 0.17 27)",
    orange: "oklch(0.73 0.15 55)",
    mustard: "oklch(0.79 0.13 90)",
    teal: "oklch(0.56 0.09 195)",
    plum: "oklch(0.42 0.10 325)",
    ink: "oklch(0.22 0.02 55)",
    cream: "oklch(0.95 0.018 80)",
    creamDark: "oklch(0.90 0.02 75)",
  },
  gradient: {
    tape: "linear-gradient(90deg, var(--color-mustard) 0%, var(--color-orange) 25%, var(--color-red) 50%, var(--color-red-deep) 75%, var(--color-plum) 100%)",
    hero: "linear-gradient(160deg, var(--color-mustard) 0%, var(--color-orange) 55%, var(--color-red) 100%)",
  },
  typography: {
    font: {
      paper: "'Archivo', -apple-system, sans-serif",
      head: "'Archivo Black', 'Archivo', sans-serif",
      mono: "'JetBrains Mono', monospace",
    },
    weight: {
      paperRegular: 400,
      paperBold: 700,
      head: 900,
      mono: 600,
    },
    scale: {
      paper: {
        "xs": 11,
        "sm": 13,
        "base": 15,
        "lg": 18,
      },
      head: {
        "xs": 16,
        "sm": 18,
        "base": 22,
        "lg": 28,
        "xl": 44,
        "2xl": 56,
        "3xl": 64,
        "4xl": 120,
      },
      mono: {
        "xs": 10,
        "sm": 11,
        "base": 12,
        "lg": 13,
      },
    },
  },
  shape: {
    radius: {
      sm: "4px",
      pill: "100px",
    },
    border: {
      hairline: "1px",
      heavy: "2px",
    },
    motion: {
      fast: "0.2s",
      base: "0.3s",
      slow: "0.5s",
    },
  },
  spacing: {
    breakpointMobile: "640px",
    container: "1240px",
    space: {
      "3": "3px",
      "4": "4px",
      "5": "5px",
      "6": "6px",
      "7": "7px",
      "8": "8px",
      "9": "9px",
      "10": "10px",
      "12": "12px",
      "14": "14px",
      "15": "15px",
      "16": "16px",
      "20": "20px",
      "24": "24px",
    },
    fluid: {
      sm: "clamp(16px, 4vw, 32px)",
      md: "clamp(24px, 6vw, 48px)",
      lg: "clamp(32px, 8vw, 56px)",
      xl: "clamp(40px, 8vw, 64px)",
      xxl: "clamp(48px, 8vw, 72px)",
    },
  },
} as const;
