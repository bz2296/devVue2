module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    settings: {
        'import/resolver': {
            webpack: {
                config: 'node_modules/@vue/cli-service/webpack.config.js',
            },
        },
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-plusplus': 0,
        'indent': [0, 4],
        'arrow-parens': 'off',
        'no-unused-vars': 'warn',
        'import/no-unresolved': 0,
        'import/extensions': ['error', 'always', {
            'js': 'never',
            'vue': 'never'
        }]
    },
};
