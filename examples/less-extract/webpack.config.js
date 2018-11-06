const { output, devtool } = require('build-tools-webpack');
const { rules, plugin } = require('build-tools-webpack-less/extract');

module.exports = {
  entry: './src/index.js',
  output,
  module: {
    rules
  },
  plugins: [ plugin ],
  devtool
};
