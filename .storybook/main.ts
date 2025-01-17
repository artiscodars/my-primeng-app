import type { StorybookConfig } from '@storybook/angular';
import webpack from 'webpack';

const config: StorybookConfig = {
  stories: [
    '../src/stories/Configure.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-backgrounds',
  ],

  framework: {
    name: '@storybook/angular',
    options: {
      builder: {
        cache: false, // Disable cache for debugging
      },
    },
  },

  // Add this line
  staticDirs: ['../src/assets'],

  webpackFinal: async (config) => {
    // Ensure consistent NODE_ENV
    config.plugins = config.plugins?.filter(
      (plugin) => plugin && !(plugin.constructor.name === 'DefinePlugin')
    );

    config.plugins?.push(
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
      })
    );

    return config;
  },

  docs: {},
};
export default config;
