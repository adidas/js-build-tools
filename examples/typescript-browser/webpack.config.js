const { output, devtool } = require('build-tools-webpack');
const { rules, extensions } = require('build-tools-webpack-typescript');

module.exports = {
  entry: './src/index.ts',
  output,
  module: {
    rules
  },
  resolve: {
    extensions
  },
  devtool
};
