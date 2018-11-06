module.exports = {
  rules: [
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {

          // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
          // the "scss" and "sass" values for the lang attribute to the right configs here.
          // other preprocessors should work out of the box, no loader config like this necessary.
          scss: 'vue-style-loader!css-loader!sass-loader',
          sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
          less: 'vue-style-loader!css-loader!less-loader'
        }

        // other vue-loader options go here
      }
    }
  ],
  alias: {
    vue$: 'vue/dist/vue.esm.js'
  }
};
