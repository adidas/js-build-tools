const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const plugin = new MiniCssExtractPlugin({
  filename: isProduction ? '[name].min.css' : '[name].css',
  disable: !isProduction
});

const rules = [
  {
    test: /\.(le|c)ss$/,
    use: [
      isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader',
      'less-loader'
    ]
  }
];

module.exports = {
  rules,
  plugin
};
