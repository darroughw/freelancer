// Runs the Style Dictionary build. Split out from config.json because the
// dual-theme (default + vhs) SCSS/CSS output needs custom formats — two
// `:root` blocks in one file isn't something Style Dictionary's built-in
// formats can produce, and custom formats must be registered from JS before
// the config loads. config.json stays the real, declarative source of truth
// for platforms/files; this file just knows how to render them.
import StyleDictionary from 'style-dictionary';

const GENERATED_BANNER = (ext) =>
  `${ext === 'ts' ? '//' : '//'} GENERATED FILE — do not edit directly.\n` +
  `// Source: tokens/*.json. Regenerate with \`npm run build:tokens\`.\n\n`;

const THEME_RATIONALE = `// Colors are CSS custom properties (not plain Sass values) so the palette can
// swap at runtime via [data-theme], not just at build time. Each Sass variable
// below is just an alias to its custom property, so every partial that does
// \`@use "./theme" as *\` and writes \`background: $red\` keeps working unchanged
// — the indirection is invisible to them.
//
// The VHS override keeps the exact same lightness (L) per token as the default
// theme, only shifting chroma/hue for a punchier look — that preserves the
// contrast ratios the a11y audit already verified (see $red-text/$red-deep).
`;

const VHS_RATIONALE = `// "Dynamicron T-120" — colors sampled directly off the Sony tape box art
// (converted from the box's hex to oklch), not a palette merely inspired by
// it. Box has no teal, so that token is aliased to the maroon band and its
// stripe-row swatch is hidden in Storybook rather than showing an off-box hue.
`;

// Fixed iteration order for the color tokens, matching the original
// hand-written file — object key order from tokens/color.json already
// matches this, this just makes the dependency explicit.
const COLOR_KEYS = ['red', 'red-text', 'red-deep', 'orange', 'mustard', 'teal', 'plum', 'ink', 'cream', 'cream-dark'];
const SPACE_KEYS = ['3', '4', '5', '6', '7', '8', '9', '10', '12', '14', '15', '16', '20', '24'];
const FLUID_KEYS = ['sm', 'md', 'lg', 'xl', 'xxl'];
const SCALE_STEPS = {
  paper: ['xs', 'sm', 'base', 'lg'],
  head: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl'],
  mono: ['xs', 'sm', 'base', 'lg'],
};

function toCamel(str) {
  return str.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
}

StyleDictionary.registerFormat({
  name: 'scss/theme',
  format: ({ dictionary }) => {
    const color = dictionary.tokens.color;
    const vhsColor = dictionary.tokens.vhs.color;
    const gradient = dictionary.tokens.gradient;
    const font = dictionary.tokens.typography.font;
    const weight = dictionary.tokens.typography.weight;
    const scale = dictionary.tokens.typography.scale;
    const breakpoint = dictionary.tokens.breakpoint;
    const spacing = dictionary.tokens.spacing;
    const fluid = dictionary.tokens.fluid;

    const root = COLOR_KEYS.map((k) => `  --color-${k}: ${color[k].value};`).join('\n');
    const vhsRoot = COLOR_KEYS.map((k) => `  --color-${k}: ${vhsColor[k].value}; // ${vhsColor[k].comment}`).join('\n');
    const aliases = COLOR_KEYS.map((k) => `$${k}: var(--color-${k});`).join('\n');
    const scaleLines = (name) => SCALE_STEPS[name].map((step) => `$scale-${name}-${step}: ${scale[name][step].value}px;`).join('\n');
    const spaceLines = SPACE_KEYS.map((k) => `$space-${k}: ${spacing[k].value};`).join('\n');
    const fluidLines = FLUID_KEYS.map((k) => `$fluid-${k}: ${fluid[k].value};`).join('\n');

    return (
      GENERATED_BANNER('scss') +
      THEME_RATIONALE +
      `:root {\n${root}\n  --tape-gradient: ${gradient.tape.value};\n}\n\n` +
      VHS_RATIONALE +
      `:root[data-theme="vhs"] {\n${vhsRoot}\n}\n\n` +
      `${aliases}\n\n` +
      `$paper-font: ${font.paper.value};\n$head-font: ${font.head.value};\n$mono-font: ${font.mono.value};\n\n` +
      `// Type scale — consumed directly by app/styles/*.scss (font: weight $scale-family-step family).\n` +
      `${scaleLines('paper')}\n${scaleLines('head')}\n${scaleLines('mono')}\n\n` +
      `// Additional tokens below — not yet consumed anywhere in app/styles/*.scss,\n` +
      `// available for future use (see Foundations → Typography/Spacing & Layout).\n` +
      `$weight-paper-regular: ${weight['paper-regular'].value};\n` +
      `$weight-paper-bold: ${weight['paper-bold'].value};\n` +
      `$weight-head: ${weight.head.value};\n` +
      `$weight-mono: ${weight.mono.value};\n\n` +
      `$breakpoint-mobile: ${breakpoint.mobile.value};\n\n` +
      `${spaceLines}\n\n` +
      `${fluidLines}\n`
    );
  },
});

StyleDictionary.registerFormat({
  name: 'css/tokens',
  format: ({ dictionary }) => {
    const color = dictionary.tokens.color;
    const vhsColor = dictionary.tokens.vhs.color;
    const gradient = dictionary.tokens.gradient;
    const font = dictionary.tokens.typography.font;
    const weight = dictionary.tokens.typography.weight;
    const scale = dictionary.tokens.typography.scale;
    const breakpoint = dictionary.tokens.breakpoint;
    const spacing = dictionary.tokens.spacing;
    const fluid = dictionary.tokens.fluid;

    const root = COLOR_KEYS.map((k) => `  --color-${k}: ${color[k].value};`).join('\n');
    const vhsRoot = COLOR_KEYS.map((k) => `  --color-${k}: ${vhsColor[k].value};`).join('\n');
    const scaleLines = (name) => SCALE_STEPS[name].map((step) => `  --scale-${name}-${step}: ${scale[name][step].value}px;`).join('\n');
    const spaceLines = SPACE_KEYS.map((k) => `  --space-${k}: ${spacing[k].value};`).join('\n');
    const fluidLines = FLUID_KEYS.map((k) => `  --fluid-${k}: ${fluid[k].value};`).join('\n');

    return (
      GENERATED_BANNER('css') +
      `:root {\n${root}\n  --tape-gradient: ${gradient.tape.value};\n\n` +
      `  --font-paper: ${font.paper.value};\n  --font-head: ${font.head.value};\n  --font-mono: ${font.mono.value};\n\n` +
      `  --weight-paper-regular: ${weight['paper-regular'].value};\n` +
      `  --weight-paper-bold: ${weight['paper-bold'].value};\n` +
      `  --weight-head: ${weight.head.value};\n` +
      `  --weight-mono: ${weight.mono.value};\n\n` +
      `${scaleLines('paper')}\n${scaleLines('head')}\n${scaleLines('mono')}\n\n` +
      `  --breakpoint-mobile: ${breakpoint.mobile.value};\n\n` +
      `${spaceLines}\n\n` +
      `${fluidLines}\n}\n\n` +
      `:root[data-theme="vhs"] {\n${vhsRoot}\n}\n`
    );
  },
});

StyleDictionary.registerFormat({
  name: 'ts/tokens',
  format: ({ dictionary }) => {
    const color = dictionary.tokens.color;
    const vhsColor = dictionary.tokens.vhs.color;
    const gradient = dictionary.tokens.gradient;
    const font = dictionary.tokens.typography.font;
    const weight = dictionary.tokens.typography.weight;
    const scale = dictionary.tokens.typography.scale;
    const breakpoint = dictionary.tokens.breakpoint;
    const spacing = dictionary.tokens.spacing;
    const fluid = dictionary.tokens.fluid;

    const colorEntries = (obj) =>
      COLOR_KEYS.map((k) => `    ${toCamel(k)}: ${JSON.stringify(obj[k].value)},`).join('\n');
    const spaceEntries = SPACE_KEYS.map((k) => `      "${k}": ${JSON.stringify(spacing[k].value)},`).join('\n');
    const fluidEntries = FLUID_KEYS.map((k) => `      ${k}: ${JSON.stringify(fluid[k].value)},`).join('\n');
    const scaleEntries = (name) =>
      `      ${name}: {\n${SCALE_STEPS[name].map((step) => `        "${step}": ${scale[name][step].value},`).join('\n')}\n      },`;

    return (
      GENERATED_BANNER('ts') +
      `// Static default-theme values for runtime consumers (e.g. Recharts colors)\n` +
      `// that can't use CSS custom properties directly. These do NOT react to the\n` +
      `// [data-theme="vhs"] toggle — for theme-reactive styling, use the CSS custom\n` +
      `// properties (var(--color-red)) via SCSS/CSS instead, either from this file's\n` +
      `// generated siblings (_theme.scss, tokens.css) or by reading\n` +
      `// getComputedStyle(document.documentElement) at runtime.\n\n` +
      `export const tokens = {\n` +
      `  color: {\n${colorEntries(color)}\n  },\n` +
      `  colorVhs: {\n${colorEntries(vhsColor)}\n  },\n` +
      `  gradient: {\n    tape: ${JSON.stringify(gradient.tape.value)},\n  },\n` +
      `  typography: {\n` +
      `    font: {\n      paper: ${JSON.stringify(font.paper.value)},\n      head: ${JSON.stringify(font.head.value)},\n      mono: ${JSON.stringify(font.mono.value)},\n    },\n` +
      `    weight: {\n      paperRegular: ${weight['paper-regular'].value},\n      paperBold: ${weight['paper-bold'].value},\n      head: ${weight.head.value},\n      mono: ${weight.mono.value},\n    },\n` +
      `    scale: {\n${scaleEntries('paper')}\n${scaleEntries('head')}\n${scaleEntries('mono')}\n    },\n` +
      `  },\n` +
      `  spacing: {\n` +
      `    breakpointMobile: ${JSON.stringify(breakpoint.mobile.value)},\n` +
      `    space: {\n${spaceEntries}\n    },\n` +
      `    fluid: {\n${fluidEntries}\n    },\n` +
      `  },\n` +
      `} as const;\n`
    );
  },
});

const sd = new StyleDictionary('config.json');
await sd.buildAllPlatforms();
