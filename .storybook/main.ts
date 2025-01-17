import type { StorybookConfig } from '@storybook/angular';
const config: StorybookConfig = {
  stories: [
    '../src/stories/Configure.mdx',
    //  "../src/**/*.mdx",
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-postcss',
    '@storybook/addon-mdx-gfm'
  ],

  framework: {
    name: '@storybook/angular',
    options: {},
  },

  // Add this line
  staticDirs: ['../src/assets'],

  docs: {}
};
export default config;
