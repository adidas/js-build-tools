[![npm version](https://badge.fury.io/js/build-tools-webpack-typescript.svg)](https://npmjs.com/package/build-tools-webpack-typescript)

# build-tools-webpack-typescript

Set of dependencies for running webpack with TypeScript.

## Install

```
npm install -DE build-tools-webpack-typescript
```

## Usage

In `webpack.config.js`:

```javascript
const { rules, extensions } = require('build-tools-webpack-typescript');

module.exports = {
  module: {
    rules
  },
  resolve: {
    extensions
  }
}
```

or combined with other rules/extensions:

```javascript
const { rules: tsRules, extensions: tsExtensions } = require('build-tools-webpack-typescript');

module.exports = {
  module: {
    rules: [
      ...tsRules,
      ... // other loaders
    ]
  },
  resolve: {
    extensions: [
      ...tsExtensions,
      ... // other extensios
    ]
  }
}
```

## Links

- [Base configuration](https://github.com/adidas/js-build-tools/tree/master/packages/build-tools-webpack-typescript)
- [ts-loader](https://github.com/TypeStrong/ts-loader)
