# Darrough West — Portfolio Site

A modern, fully responsive portfolio built with Next.js, TypeScript, and CSS-in-JS. Features a distinctive "VHS tape" design aesthetic with smooth animations and an optimized mobile experience.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Deploy

```bash
npm run build    # Create production build
npm run start    # Run production server
npm run lint     # Check code quality
```

## Project Structure

```
app/
├── layout.tsx       # Root layout with metadata and fonts
├── page.tsx         # Main portfolio page (all content & styling)
├── globals.css      # Global styles & mobile breakpoints
├── favicon.ico      # Favicon
README.md
package.json
tsconfig.json
next.config.js
```

## Features

### Design
- **Color Palette**: Customizable via the `PALETTE` object in `page.tsx` (red, orange, mustard, teal, plum)
- **Typography**: Archivo (body), Archivo Black (headings), Space Mono (mono) via Google Fonts
- **Animations**: Smooth transitions, spinning icons, blinking cursors, ticker effects
- **Responsive**: Fully optimized for desktop, tablet, and mobile devices

### Mobile Optimization
- Viewport meta tag for proper rendering on all devices
- Touch-friendly targets (44px minimum for all interactive elements)
- Smooth momentum scrolling on horizontal carousels
- Adaptive navigation (horizontal bar on mobile, sticky sidebar on desktop)
- Optimized spacing and padding for small screens
- Removed tap highlights for cleaner mobile UX

### Sections
1. **Navigation Sidebar** - Name, role, section links, CTA button
2. **Hero/Masthead** - Eye-catch headline with color stripe accent
3. **Work Section** - Horizontal scrolling project cards with screenshots
4. **About Section** - Bio with drop cap, pull quote, and specs table
5. **Skills Section** - Dark background with categorized skill tags
6. **Top Fives** - Personal interests (food, games, activities)
7. **Contact Section** - Email CTA and social links

## Customization

### Colors
Edit the `PALETTE` and base color constants in `page.tsx`:
```typescript
const PALETTE = {
  red: "oklch(0.58 0.17 27)",
  orange: "oklch(0.73 0.15 55)",
  // ... update these OKLch color values
};
const ink = "oklch(0.22 0.02 55)";      // Text color
const cream = "oklch(0.95 0.018 80)";   // Background
```

### Projects
Replace the `projects` array in `page.tsx` with your case studies:
```typescript
const projects = [
  {
    index: "01",
    title: "Your Project Title",
    desc: "Project description...",
    tags: ["Tag1", "Tag2"],
    accent: PALETTE.red,
    href: "/project-url",
    placeholderNote: "[ drop project screenshot here ]",
  },
  // ... more projects
];
```

### Contact Info
Update the contact email in the contact section and footer of `page.tsx`:
- Change `darrough@gmail.com` to your email address
- Update social links in the `contactSocialRow` section

### Content Sections
Edit the `skillGroups` and `topFives` arrays to customize skills and personal interests.

## Tech Stack

- **Next.js 14.2** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **CSS** - Global styles with mobile breakpoints
- **Google Fonts** - Archivo, Archivo Black, Space Mono
- **No external UI libraries** - Lightweight, custom styling

## Responsive Design

The site uses a mobile-first approach with breakpoints:
- **Mobile** - Stacked layout, horizontal navigation bar, optimized spacing
- **Tablet** - Intermediate layout adjustments
- **Desktop (900px+)** - Full sidebar navigation, multi-column layouts

All typography uses `clamp()` for fluid scaling between breakpoints.

## Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge) and mobile browsers (iOS Safari, Chrome Mobile).

## License

Personal portfolio — feel free to adapt for your own use.
