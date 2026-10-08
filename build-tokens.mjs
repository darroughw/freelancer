// Runs the Style Dictionary build. Split out from config.json because a
// custom format is needed to control exact output shape/ordering for the
// generated Sass variable aliases and multi-section token groups — something
// stock Style Dictionary formats don't give fine-grained control over, and
// custom formats must be registered from JS before the config loads.
// config.json stays the real, declarative source of truth for
// platforms/files; this file just knows how to render them.
import StyleDictionary from 'style-dictionary';

const GENERATED_BANNER = (ext) =>
  `${ext === 'ts' ? '//' : '//'} GENERATED FILE — do not edit directly.\n` +
  `// Source: tokens/*.json. Regenerate with \`npm run build:tokens\`.\n\n`;

const THEME_RATIONALE = `// Colors are CSS custom properties (not plain Sass values) so the palette can
// still swap at runtime if a future theme is added, not just at build time.
// Each Sass variable below is just an alias to its custom property, so every
// partial that does \`@use "./theme" as *\` and writes \`background: $ink\`
// keeps working unchanged — the indirection is invisible to them.
`;

// Fixed iteration order for the color tokens, matching the original
// hand-written file — object key order from tokens/color.json already
// matches this, this just makes the dependency explicit.
const COLOR_KEYS = ['red', 'red-text', 'red-deep', 'orange', 'mustard', 'teal', 'plum', 'ink', 'cream', 'cream-dark'];
const GRADIENT_KEYS = ['tape', 'hero'];
const SPACE_KEYS = ['3', '4', '5', '6', '7', '8', '9', '10', '12', '14', '15', '16', '20', '24'];
const FLUID_KEYS = ['sm', 'md', 'lg', 'xl', 'xxl'];
const SCALE_STEPS = {
  paper: ['xs', 'sm', 'base', 'lg'],
  head: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl'],
  mono: ['xs', 'sm', 'base', 'lg'],
};
const RADIUS_KEYS = ['sm', 'pill'];
const BORDER_KEYS = ['hairline', 'heavy'];
const SHADOW_KEYS = ['sticker'];
const MOTION_KEYS = ['fast', 'base', 'slow'];

function toCamel(str) {
  return str.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
}

StyleDictionary.registerFormat({
  name: 'scss/theme',
  format: ({ dictionary }) => {
    const color = dictionary.tokens.color;
    const gradient = dictionary.tokens.gradient;
    const font = dictionary.tokens.typography.font;
    const weight = dictionary.tokens.typography.weight;
    const scale = dictionary.tokens.typography.scale;
    const breakpoint = dictionary.tokens.breakpoint;
    const layout = dictionary.tokens.layout;
    const spacing = dictionary.tokens.spacing;
    const fluid = dictionary.tokens.fluid;
    const radius = dictionary.tokens.radius;
    const border = dictionary.tokens.border;
    const shadow = dictionary.tokens.shadow;
    const motion = dictionary.tokens.motion;

    const root = COLOR_KEYS.map((k) => `  --color-${k}: ${color[k].value};`).join('\n');
    const gradientLines = GRADIENT_KEYS.map((k) => `  --${k}-gradient: ${gradient[k].value};`).join('\n');
    const aliases = COLOR_KEYS.map((k) => `$${k}: var(--color-${k});`).join('\n');
    const scaleLines = (name) => SCALE_STEPS[name].map((step) => `$scale-${name}-${step}: ${scale[name][step].value}px;`).join('\n');
    const spaceLines = SPACE_KEYS.map((k) => `$space-${k}: ${spacing[k].value};`).join('\n');
    const fluidLines = FLUID_KEYS.map((k) => `$fluid-${k}: ${fluid[k].value};`).join('\n');
    const radiusLines = RADIUS_KEYS.map((k) => `$radius-${k}: ${radius[k].value};`).join('\n');
    const borderLines = BORDER_KEYS.map((k) => `$border-${k}: ${border[k].value};`).join('\n');
    const shadowLines = SHADOW_KEYS.map((k) => `$shadow-${k}: ${shadow[k].value};`).join('\n');
    const motionLines = MOTION_KEYS.map((k) => `$motion-${k}: ${motion[k].value};`).join('\n');

    return (
      GENERATED_BANNER('scss') +
      THEME_RATIONALE +
      `:root {\n${root}\n${gradientLines}\n}\n\n` +
      `${aliases}\n\n` +
      `$paper-font: ${font.paper.value};\n$head-font: ${font.head.value};\n$mono-font: ${font.mono.value};\n\n` +
      `// Type scale — consumed directly by app/styles/*.scss (font: weight $scale-family-step family).\n` +
      `${scaleLines('paper')}\n${scaleLines('head')}\n${scaleLines('mono')}\n\n` +
      `// Shape — radius/border/shadow for the flat, hard-bordered window-chrome language.\n` +
      `${radiusLines}\n${borderLines}\n${shadowLines}\n\n` +
      `// Motion durations/easing.\n` +
      `${motionLines}\n` +
      `$motion-ease: ${motion.ease.value};\n\n` +
      `$container-width: ${layout.container.value};\n\n` +
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
    const gradient = dictionary.tokens.gradient;
    const font = dictionary.tokens.typography.font;
    const weight = dictionary.tokens.typography.weight;
    const scale = dictionary.tokens.typography.scale;
    const breakpoint = dictionary.tokens.breakpoint;
    const layout = dictionary.tokens.layout;
    const spacing = dictionary.tokens.spacing;
    const fluid = dictionary.tokens.fluid;
    const radius = dictionary.tokens.radius;
    const border = dictionary.tokens.border;
    const shadow = dictionary.tokens.shadow;
    const motion = dictionary.tokens.motion;

    const root = COLOR_KEYS.map((k) => `  --color-${k}: ${color[k].value};`).join('\n');
    const gradientLines = GRADIENT_KEYS.map((k) => `  --${k}-gradient: ${gradient[k].value};`).join('\n');
    const scaleLines = (name) => SCALE_STEPS[name].map((step) => `  --scale-${name}-${step}: ${scale[name][step].value}px;`).join('\n');
    const spaceLines = SPACE_KEYS.map((k) => `  --space-${k}: ${spacing[k].value};`).join('\n');
    const fluidLines = FLUID_KEYS.map((k) => `  --fluid-${k}: ${fluid[k].value};`).join('\n');
    const radiusLines = RADIUS_KEYS.map((k) => `  --radius-${k}: ${radius[k].value};`).join('\n');
    const borderLines = BORDER_KEYS.map((k) => `  --border-${k}: ${border[k].value};`).join('\n');
    const motionLines = MOTION_KEYS.map((k) => `  --motion-${k}: ${motion[k].value};`).join('\n');

    return (
      GENERATED_BANNER('css') +
      `:root {\n${root}\n${gradientLines}\n\n` +
      `  --font-paper: ${font.paper.value};\n  --font-head: ${font.head.value};\n  --font-mono: ${font.mono.value};\n\n` +
      `  --weight-paper-regular: ${weight['paper-regular'].value};\n` +
      `  --weight-paper-bold: ${weight['paper-bold'].value};\n` +
      `  --weight-head: ${weight.head.value};\n` +
      `  --weight-mono: ${weight.mono.value};\n\n` +
      `${scaleLines('paper')}\n${scaleLines('head')}\n${scaleLines('mono')}\n\n` +
      `  --breakpoint-mobile: ${breakpoint.mobile.value};\n  --container-width: ${layout.container.value};\n\n` +
      `${radiusLines}\n${borderLines}\n  --shadow-sticker: ${shadow.sticker.value};\n\n` +
      `${motionLines}\n  --motion-ease: ${motion.ease.value};\n\n` +
      `${spaceLines}\n\n` +
      `${fluidLines}\n}\n`
    );
  },
});

StyleDictionary.registerFormat({
  name: 'ts/tokens',
  format: ({ dictionary }) => {
    const color = dictionary.tokens.color;
    const gradient = dictionary.tokens.gradient;
    const font = dictionary.tokens.typography.font;
    const weight = dictionary.tokens.typography.weight;
    const scale = dictionary.tokens.typography.scale;
    const breakpoint = dictionary.tokens.breakpoint;
    const layout = dictionary.tokens.layout;
    const spacing = dictionary.tokens.spacing;
    const fluid = dictionary.tokens.fluid;
    const radius = dictionary.tokens.radius;
    const border = dictionary.tokens.border;
    const motion = dictionary.tokens.motion;

    const colorEntries = (obj) =>
      COLOR_KEYS.map((k) => `    ${toCamel(k)}: ${JSON.stringify(obj[k].value)},`).join('\n');
    const gradientEntries = GRADIENT_KEYS.map((k) => `    ${toCamel(k)}: ${JSON.stringify(gradient[k].value)},`).join('\n');
    const spaceEntries = SPACE_KEYS.map((k) => `      "${k}": ${JSON.stringify(spacing[k].value)},`).join('\n');
    const fluidEntries = FLUID_KEYS.map((k) => `      ${k}: ${JSON.stringify(fluid[k].value)},`).join('\n');
    const radiusEntries = RADIUS_KEYS.map((k) => `      ${toCamel(k)}: ${JSON.stringify(radius[k].value)},`).join('\n');
    const borderEntries = BORDER_KEYS.map((k) => `      ${toCamel(k)}: ${JSON.stringify(border[k].value)},`).join('\n');
    const motionEntries = MOTION_KEYS.map((k) => `      ${toCamel(k)}: ${JSON.stringify(motion[k].value)},`).join('\n');
    const scaleEntries = (name) =>
      `      ${name}: {\n${SCALE_STEPS[name].map((step) => `        "${step}": ${scale[name][step].value},`).join('\n')}\n      },`;

    return (
      GENERATED_BANNER('ts') +
      `// Static values for runtime consumers (e.g. Recharts colors) that can't\n` +
      `// use CSS custom properties directly. For theme-reactive styling, use the\n` +
      `// CSS custom properties (var(--color-ink)) via SCSS/CSS instead, either from\n` +
      `// this file's generated siblings (_theme.scss, tokens.css) or by reading\n` +
      `// getComputedStyle(document.documentElement) at runtime.\n\n` +
      `export const tokens = {\n` +
      `  color: {\n${colorEntries(color)}\n  },\n` +
      `  gradient: {\n${gradientEntries}\n  },\n` +
      `  typography: {\n` +
      `    font: {\n      paper: ${JSON.stringify(font.paper.value)},\n      head: ${JSON.stringify(font.head.value)},\n      mono: ${JSON.stringify(font.mono.value)},\n    },\n` +
      `    weight: {\n      paperRegular: ${weight['paper-regular'].value},\n      paperBold: ${weight['paper-bold'].value},\n      head: ${weight.head.value},\n      mono: ${weight.mono.value},\n    },\n` +
      `    scale: {\n${scaleEntries('paper')}\n${scaleEntries('head')}\n${scaleEntries('mono')}\n    },\n` +
      `  },\n` +
      `  shape: {\n` +
      `    radius: {\n${radiusEntries}\n    },\n` +
      `    border: {\n${borderEntries}\n    },\n` +
      `    motion: {\n${motionEntries}\n    },\n` +
      `  },\n` +
      `  spacing: {\n` +
      `    breakpointMobile: ${JSON.stringify(breakpoint.mobile.value)},\n` +
      `    container: ${JSON.stringify(layout.container.value)},\n` +
      `    space: {\n${spaceEntries}\n    },\n` +
      `    fluid: {\n${fluidEntries}\n    },\n` +
      `  },\n` +
      `} as const;\n`
    );
  },
});

const sd = new StyleDictionary('config.json');
await sd.buildAllPlatforms();
