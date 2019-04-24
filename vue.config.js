const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  // ...other settings here
  // support old browsers
  transpileDependencies: ['vuex-module-decorators'],
  configureWebpack: {
    devServer: {
      open: true,
      openPage: 'en/',
    },
    plugins: [
      // To strip all locales except 'en', 'es-us', 'ru' and 'uk'(Ukraine)
      // (“en” is built into Moment and can’t be removed)
      new MomentLocalesPlugin({
          localesToKeep: ['es-us', 'ru', 'uk'],
      }),
    ],
  },
  chainWebpack: config => {
    // ...other webpack config overrides here
    if (process.env.NODE_ENV === "production")
      config.plugin("webpack-report")
      .use(BundleAnalyzerPlugin, [{
      // ...webpack-bundle-analyzer options here
    }]);
  }
};