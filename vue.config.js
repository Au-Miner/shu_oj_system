const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    filenameHashing: false,
    lintOnSave: false,
    runtimeCompiler: true,
    assetsDir: "static",
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 5000,
        https: false,
        //设置请求服务的代理
        proxy: {
            '/api': {
                target: "http://111.229.161.159:8000", //代理地址（一般为API实际地址）
                secure: false,
                ws: true,
                changeOrigin: true, // 是否允许跨域
                pathRewrite: {
                    '^/api': ''//重定向地址
                }
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set("@", resolve("src"))
        // 配置全局样式变量
        const oneOfsMap = config.module.rule('scss').oneOfs.store;
        oneOfsMap.forEach(item => {
            item
                .use('sass-resources-loader')
                .loader('sass-resources-loader')
                .options({
                    // 全局变量资源路径
                    resources: './src/assets/styles/global.scss'
                    // 全局变量路径数组
                    // resources: ['./path/to/vars.scss', './path/to/mixins.scss']
                    // 或者将多个scss文件@import到一个main.scss用第一种方法
                })
                .end()
        })
    },
    /*
    chainWebpack: config => {
          config.set('externals', {
            vue: 'Vue',
            'element-ui':'ElementUI',
          })
          config.plugin('html')
          .tap(args => {
            args[0].cdn = cdn
            return args
          })
      }
    /*
    chainWebpack:config=>{
        //发布模式
        config.when(process.env.NODE_ENV === 'production',config=>{
            //entry找到默认的打包入口，调用clear则是删除默认的打包入口,add添加新的打包入口
            config.entry('app').clear().add('./src/main.js')

            //使用externals设置排除项
            config.set('externals',{
                vue:'Vue',
                axios:'axios',
                'element-ui':'ElementUI',
                nprogress:'NProgress',
            })
        })
        //开发模式
        config.when(process.env.NODE_ENV === 'development',config=>{
            config.entry('app').clear().add('./src/main.js')
        })
    }*/
}