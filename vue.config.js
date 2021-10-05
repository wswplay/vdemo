const path = require('path');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vdemo/' : '/',
  outputDir: 'docs',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, "src/style/variable.less")] // 引入全局样式变量
    }
  },
}