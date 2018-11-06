const path = require('path');

const cwd = process.cwd();
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  output: {
    filename: isProduction ? '[name].min.js' : '[name].js',
    path: path.resolve(cwd, './dist'),
    libraryTarget: 'umd',
    publicPath: '/dist/'
  }
};
