const path = require('path');

module.exports = {
    context: path.resolve(__dirname, './'),
    extensions: ['.js', '.vue', '.json'],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@assets': path.resolve('src/assets'),
            '@types': path.resolve(__dirname, 'src/store/types'),
            '@tools': path.resolve(__dirname, 'src/utils/tools'),
        },
    },
};
