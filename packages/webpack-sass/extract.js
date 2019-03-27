const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const plugin = new MiniCssExtractPlugin({
  filename: isProduction ? '[name].min.css' : '[name].css',
  disable: !isProduction
});

const rules = [
  {
    test: /\.(sa|sc|c)ss$/,
    use: [
      isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader',
      'sass-loader'
    ]
  }
];

module.exports = {
  rules,
  plugin
};
