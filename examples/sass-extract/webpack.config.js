const { output, devtool } = require('build-tools-webpack');
const { rules, plugin } = require('build-tools-webpack-sass/extract');

module.exports = {
  entry: './src/index.js',
  output,
  module: {
    rules
  },
  plugins: [ plugin ],
  devtool
};
