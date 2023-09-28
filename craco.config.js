/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
module.exports = {
    babel: {
        presets: [['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }]],
        plugins: [
            'babel-plugin-macros',
            [
                '@emotion/babel-plugin-jsx-pragmatic',
                {
                    export: 'jsx',
                    import: '__cssprop',
                    module: '@emotion/react',
                },
            ],
            [
                '@babel/plugin-transform-react-jsx',
                {
                    pragma: '__cssprop',
                    pragmaFrag: 'React.Fragment',
                },
            ],
        ],
    },

    webpack: {
        configure: (config) => {
            // https://stackoverflow.com/questions/44114436/the-create-react-app-imports-restriction-outside-of-src-directory
            const scopePluginIndex = config.resolve.plugins.findIndex(
                ({ constructor }) => constructor && constructor.name === 'ModuleScopePlugin',
            );

            config.resolve.plugins.splice(scopePluginIndex, 1);

            config.resolve = {
                ...config.resolve,

                alias: {
                    '@src': path.resolve(__dirname, 'src/'),
                },
            };
            return config;
        },
    },
};
