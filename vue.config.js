const path = require('path');

module.exports = {
  runtimeCompiler: true,
  // 基本路径
  publicPath: process.env.NODE_ENV === 'production' ? '' : './',
  // 输出文件目录
  outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  configureWebpack: (config) => {
    config.resolve = { // 配置解析别名
      extensions: ['.js', '.json', '.vue'],  // 自动添加文件名后缀
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@c': path.resolve(__dirname, './src/components'),
        '@ant-design/icons-vue/lib/dist$': path.resolve('./src/antd/icons.js')
      },
    }
  },
  chainWebpack: (config) => {
    // svg 配置
    config.module.rules.delete('svg');  //重点：删除默认配置中处理svg
    config.module
      .rule('svg-sprite-loader').test(/\.svg$/)
      .include
      .add(path.resolve('./src/assets/svg')) //处理存放 svg 文件的目录
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        }
      }
    }
  },
  // webpack-dev-server 相关配置
  devServer: {
    open: false, // 编译完成是否打开网页
    host: '0.0.0.0', // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
    // port: 8081, // 访问端口
    https: false, // 编译失败时刷新页面
    hot: true, // 开启热加载
    hotOnly: false,
    proxy: {
      '/api': {
        target: "http://demo.gin-vue-admin.com/api",
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }, // 设置代理
    // overlay: { // 全屏模式下是否显示脚本错误
    //   warnings: true,
    //   errors: true
    // },
    before: app => { }
  },
  parallel: require('os').cpus().length > 1,
  /**
   *  PWA 插件相关配置,see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
   */
  pwa: {},

  /**
   * 第三方插件配置
   */
  pluginOptions: {}
}
