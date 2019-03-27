const { mode, output, devtool } = require('build-tools-webpack');
const { rules } = require('build-tools-webpack-babel');

module.exports = {
  mode,
  entry: './src/index.js',
  output,
  module: {
    rules
  },
  devtool
};
