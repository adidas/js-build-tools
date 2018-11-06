[![npm version](https://badge.fury.io/js/build-tools-webpack-babel.svg)](https://npmjs.com/package/build-tools-webpack-babel)

# build-tools-webpack-babel

Set of dependencies for running webpack with babel.

## Install

```
npm install --save-dev build-tools-webpack-babel
```

## Usage

In `webpack.config.js`:

```javascript
const { rules } = require('build-tools-webpack-babel');

module.exports = {
  module: {
    rules
  }
};
```

or combined with other rules/loaders:

```javascript
const { rules: babelRules } = require('build-tools-webpack-babel');

module.exports = {
  module: {
    rules: [
      ...babelRules,
      ... // other loaders
    ]
  }
}
```

## Links

- [Base configuration](https://github.com/adidas/js-build-tools/tree/master/packages/build-tools-webpack-babel)
- [babel-loader](https://github.com/babel/babel-loader)
