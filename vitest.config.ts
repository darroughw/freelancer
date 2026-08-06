import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vitest/config';

import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

import { playwright } from '@vitest/browser-playwright';

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({ configDir: path.join(dirname, '.storybook') }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            // channel: 'chrome' drives the system-installed Google Chrome via CDP
            // instead of Playwright's own bundled Chromium build — this repo's dev
            // machine is on an old macOS release Playwright's bundled Chromium
            // doesn't support ("Playwright does not support chromium on mac12"),
            // and GitHub Actions' ubuntu-latest runners ship Chrome preinstalled,
            // so this works in CI too without a `playwright install` step.
            provider: playwright({ launchOptions: { channel: 'chrome' } }),
            instances: [{ browser: 'chromium' }],
          },
        },
      },
    ],
  },
});
