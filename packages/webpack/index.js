module.exports = {
  mode: require('./mode').mode,
  output: require('./output').output,
  devtool: require('./devtool').devtool,
  createBanner: require('./banner').createBanner,
  devServer: require('./devserver').devServer,
  extensions: require('./extensions').extensions,
  resolveLoader: require('./resolve-loader').resolveLoader
};
