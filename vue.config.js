const path = require('path')

module.exports = {
  devServer: {
    port: 2333,
    open: true,
  },
  css: {
    loaderOptions: {
      sass: {
        presentData: `@import "./src/assets/scss/cabc.scss";`,
      },
    },
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: [
        path.resolve(__dirname, './src/assets/abc.scss'), //路径
      ],
    },
  },
}
