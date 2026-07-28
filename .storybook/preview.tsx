import type { Preview } from '@storybook/nextjs-vite';
import '../app/globals.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
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
