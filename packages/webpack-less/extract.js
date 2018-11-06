const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const plugin = new ExtractTextPlugin({
  filename: isProduction ? '[name].min.css' : '[name].css',
  disable: !isProduction
});

const rules = [
  {
    test: /\.less$/,
    use: plugin.extract({
      use: [
        {
          loader: 'css-loader'
        }, {
          loader: 'less-loader'
        }
      ],
      fallback: 'style-loader'
    })
  }
];

module.exports = {
  rules,
  plugin
};
