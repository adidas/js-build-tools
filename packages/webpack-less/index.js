module.exports = {
  rules: [
    {
      test: /\.(le|c)ss$/,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        'less-loader'
      ]
    }
  ]
};
