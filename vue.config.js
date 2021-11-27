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
    chainWebpack:(config)=>{
        config.resolve.alias
            //第一个参数：别名 第二个参数：路径
            .set('@',resolve('src'))
            .set('@components',resolve('src/components'))
            .set('@assets',resolve('src/assets'))
            .set('@store',resolve('src/store'))
            .set('@utils',resolve('src/utils/'))
            .set('@tools',resolve('src/utils/tools.js'))
    }
    // chainWebpack: (config) => {
    //     config.resolve.alias
    //         .set('@', resolve('src'))
    //         .set('@assets', resolve('src/store'))
    //         .set('@tools', resolve('src/utils/tools'))
    // }
};
