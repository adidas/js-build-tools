[![npm version](https://badge.fury.io/js/build-tools-webpack-files.svg)](https://npmjs.com/package/build-tools-webpack-files)

# build-tools-webpack-files

Set of tools and utilities to work with static assets (icons, images, fonts and html) in webpack.

## Install

```
npm install --save-dev build-tools-webpack-files
```

## Usage

In `webpack.config.js`:

```javascript
const { rules: fileRules } = require('build-tools-webpack-files');

module.exports = {
  module: {
    rules: [
      ...fileRules,
      ... // other loaders
    ]
  }
};
```

Or neat-pick specific loaders:

```javascript
const { rules: htmlRules } = require('build-tools-webpack-files/html');

module.exports = {
  module: {
    rules: [
      ...htmlRules,
      ... // other loaders
    ]
  }
};
```

## Documentation

- [Base configuration](https://github.com/adidas/js-build-tools/tree/master/packages/build-tools-webpack)
- [file-loader](https://github.com/webpack-contrib/file-loader)
- [url-loader](https://github.com/webpack-contrib/url-loader)
- [html-loader](https://github.com/webpack-contrib/html-loader)
- [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)
- [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin)
