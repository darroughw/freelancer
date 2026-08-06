import type { Preview } from '@storybook/nextjs-vite';
import { MINIMAL_VIEWPORTS } from 'storybook/viewport';
import '../app/globals.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      // Show each control's description (from argTypes) inline in the panel,
      // not just its name — most of this project's argTypes carry a "why",
      // not just a type.
      expanded: true,
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },

    viewport: {
      options: {
        // Storybook's curated small device set (two mobile sizes, a tablet,
        // a desktop) — see MINIMAL_VIEWPORTS in the `storybook` package.
        ...MINIMAL_VIEWPORTS,
        // This site has exactly one real CSS breakpoint (see Foundations →
        // Spacing & Layout: `@media (max-width: 640px)`) — this viewport
        // sits right at it, so switching to it previews the mobile/desktop
        // layout collapse directly rather than an arbitrary device size.
        breakpoint: {
          name: 'Breakpoint (640px)',
          styles: { width: '640px', height: '900px' },
          type: 'other',
        },
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="page" style={{ padding: 24 }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
