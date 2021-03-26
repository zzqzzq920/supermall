const path = require('path'); //引入path模块
const {
  config
} = require('vue/types/umd');

function resolve(dir) {
  return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('assets', resolve('./src/assets'))
      .set('components', resolve('./src/components'))
      .set('views', resolve('./src/views'))
      .set('common', resolve('./src/common'))
      .set('network', resolve('./src/network'))
      .set('router', resolve('./src/router'))
      .set('store', resolve('./src/store'))
  }
}