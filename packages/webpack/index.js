module.exports = {
  output: require('./output').output,
  devtool: require('./devtool').devtool,
  createBanner: require('./banner').createBanner,
  devServer: require('./devserver').devServer,
  extensions: require('./extensions').extensions,
  loaders: require('./loaders').resolveLoader
};
