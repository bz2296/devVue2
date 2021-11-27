const path = require('path');

module.exports = {
    // context: path.resolve(__dirname, './'),
    // extensions: ['.js', '.vue', '.json'],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@store': path.resolve(__dirname, 'src/store'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@tools': path.resolve(__dirname, 'src/utils/tools.js'),
        },
    },
};
