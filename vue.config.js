const path = require('path')
const resolve = (v) => path.resolve(__dirname, v)

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('src')).set('img', resolve('src/assets/img')).set('cpt', resolve('src/components'))
    // 针对移动端去除预加载
    // config.plugins.delete('prefetch')
  },
}
