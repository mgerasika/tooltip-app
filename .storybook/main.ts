import { StorybookConfig } from '@storybook/nextjs';
const path = require('path');

const config: StorybookConfig = {
    // https://storybook.js.org/docs/react/configure/frameworks#which-frameworks-are-supported
    framework: {
        name: '@storybook/nextjs',
        options: {},
    },
    staticDirs: ['../src/assets', '../public'],
    stories: ['../src/general-ui/**/*.stories.mdx', '../src/general-ui/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
    core: {
        disableTelemetry: true,
    },
    babel: async (options) => {
        return {
            ...options,
            presets: [...(options.presets || []), '@emotion/babel-preset-css-prop'],
            plugins: [...(options.plugins || []), 'babel-plugin-macros'],
        };
    },
    webpackFinal: async (config: any, { configType }) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@src': path.resolve(__dirname, '../src'),
        };

        return config;
    },
};
export default config;
