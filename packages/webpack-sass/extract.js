const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const plugin = new MiniCssExtractPlugin({
  filename: isProduction ? '[name].min.css' : '[name].css'
});

const rules = [
  {
    test: /\.(sa|sc|c)ss$/,
    use: [
      isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader',
      'postcss-loader',
      'sass-loader'
    ]
  }
];

module.exports = {
  rules,
  plugin
};
