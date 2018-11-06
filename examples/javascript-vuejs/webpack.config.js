const { output, devtool } = require('build-tools-webpack');
const { rules: babelRules } = require('build-tools-webpack-babel');
const { rules: sassRules } = require('build-tools-webpack-sass');
const { rules: fileRules } = require('build-tools-webpack-files');
const { rules: vueRules, alias: vueAlias } = require('build-tools-webpack-vue');

output.library = 'vueComponents';

module.exports = {
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
  resolve: {
    alias: Object.assign(
      {},
      vueAlias
    )
  },
  devtool
};
