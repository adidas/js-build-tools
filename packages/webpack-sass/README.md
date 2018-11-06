[![npm version](https://badge.fury.io/js/build-tools-webpack-sass.svg)](https://npmjs.com/package/build-tools-webpack-sass)

# build-tools-webpack-sass

Set of tools and utilities to work with webpack and Sass.

## Install

```
npm install --save-dev build-tools-webpack-sass
```

## Usage

In `webpack.config.js`:

```javascript
const { rules: sassRules } = require('build-tools-webpack-sass');

module.exports = {
  module: {
    rules: [
      ...sassRules,
      ... // other loaders
    ]
  }
};
```

To allow extraction of CSS in production, set `NODE_ENV=production` and adjust `webpack.config.js`:

```javascript
const {
  rules: sassRules,
  plugin: sassExtractPlugin
} = require('build-tools-webpack-sass/extract');

module.exports = {
  module: {
    rules: [
      ...sassRules,
      ... // other loaders
    ]
  },
  plugins: [
    sassExtractPlugin
  ]
};
```

## Links

- [Base configuration](https://github.com/adidas/js-build-tools/tree/master/packages/build-tools-webpack-sass)
- [sass](http://sass-lang.com/)
- [node-sass](https://github.com/sass/node-sass)
- [sass-loader](https://github.com/webpack-contrib/sass-loader)
