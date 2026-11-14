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
        // The site's three layout breakpoints (Foundations → Spacing &
        // Layout), each set just at the edge so switching to it previews
        // that layout directly rather than an arbitrary device size.
        breakpointTablet: {
          name: 'Tablet edge (1023px): 2-column bento',
          styles: { width: '1023px', height: '900px' },
          type: 'tablet',
        },
        breakpointNav: {
          name: 'Nav edge (899px): bottom nav',
          styles: { width: '899px', height: '900px' },
          type: 'tablet',
        },
        breakpoint: {
          name: 'Mobile edge (640px): 1-column bento',
          styles: { width: '640px', height: '900px' },
          type: 'mobile',
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
