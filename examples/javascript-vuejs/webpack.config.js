const { mode, output, devtool } = require('build-tools-webpack');
const { rules: babelRules } = require('build-tools-webpack-babel');
const { rules: sassRules } = require('build-tools-webpack-sass');
const { rules: fileRules } = require('build-tools-webpack-files');
const { rules: vueRules, alias: vueAlias, plugin: vuePlugin } = require('build-tools-webpack-vue');

output.library = 'vueComponents';

module.exports = {
  mode,
  entry: './src/main.js',
  output,
  module: {
    rules: [].concat(
      babelRules,
      vueRules,
      fileRules,
      sassRules
    )
  },
  plugins: [
    vuePlugin
  ],
  resolve: {
    alias: Object.assign(
      {},
      vueAlias
    )
  },
  devtool
};
