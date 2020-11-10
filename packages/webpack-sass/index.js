module.exports = {
  rules: [
    {
      test: /\.(sa|sc|c)ss$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ]
    }
  ]
};
