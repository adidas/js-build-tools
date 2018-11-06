let devtool = 'inline-source-map';

if (process.env.NODE_ENV === 'production') {
  devtool = 'source-map';
}

module.exports = {
  devtool
};
