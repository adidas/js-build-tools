[![npm version](https://badge.fury.io/js/build-tools-webpack-less.svg)](https://npmjs.com/package/build-tools-webpack-less)

# build-tools-webpack-less

Set of tools and utilities to work with webpack and Less.

## Install

```
npm install --save-dev build-tools-webpack-less
```

## Usage

In `webpack.config.js`:

```javascript
const { rules: lessRules } = require('build-tools-webpack-less');

module.exports = {
  module: {
    rules: [
      ...lessRules,
      ... // other loaders
    ]
  }
};
```

To allow extraction of CSS in production, set `NODE_ENV=production` and adjust `webpack.config.js`:

```javascript
const {
  rules: lessRules,
  plugin: lessExtractPlugin
} = require('build-tools-webpack-less/extract');

module.exports = {
  module: {
    rules: [
      ...lessRules,
      ... // other loaders
    ]
  },
  plugins: [
    lessExtractPlugin
  ]
};
```

## Links

- [Base configuration](https://github.com/adidas/js-build-tools/tree/master/packages/build-tools-webpack-less)
- [less](http://lesscss.org/)
- [less.js](https://github.com/less/less.js)
- [less-loader](https://github.com/webpack-contrib/less-loader)
