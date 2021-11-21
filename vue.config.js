const path = require('path');

const resolve = dir => path.join(__dirname, dir);

module.exports = {
    runtimeCompiler: true,
    productionSourceMap: true,
    publicPath: '',
    devServer: {
        open: true,
        host: 'cyh.study.com',
        port: 3000,
        proxy: {
            '/test': {
                target: process.env.VUE_APP_API_PROXY,
                secure: false,
                changeOrigin: true,
            },
        },
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': resolve('./src'),
                '@assets': resolve('./src/assets'),
                '@types': resolve('./src/store'),
                '@tools': resolve('./src/utils/tools')
            }
        }
    },
    chainWebpack:(config)=>{
        config.resolve.alias
            //第一个参数：别名 第二个参数：路径
            .set('assets',resolve('src/assets'))
            .set('types',resolve('src/store'))
            .set('tools',resolve('src/utils/tools'))
    }
};
