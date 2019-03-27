module.exports = {
  rules: [
    {
      test: /\.(le|c)ss$/,
      use: [
        'style-loader',
        'css-loader',
        'less-loader'
      ]
    }
  ]
};
