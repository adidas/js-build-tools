[![npm version](https://badge.fury.io/js/build-tools-javascript.svg)](https://npmjs.com/package/build-tools-javascript)

# build-tools-javascript

Set of tools and configurations to work with JavaScript: linter and documentation.

- Linter: _eslint_ runner and adidas linter configs.
- JavaScript documentation: based on _jsdoc_ tool.

## Install

```
npm install --save-dev build-tools-javascript
```

## Usage

To use adidas linter configurations check https://github.com/adidas/js-linter-configs/tree/master/packages/eslint-config-adidas-es6.

To use jsdoc, create a `jsdoc.config.js` file with the following:

```javascript
const jsdocConfig = require('build-tools-javascript/jsdoc.config.js');
const { name } = require('./package.json');

jsdocConfig.systemName = name;

module.exports = jsdocConfig;
```

Then you can run `jsdoc`, e.g:

```
npx jsdoc -r -c ./jsdoc.config.js -R ./README.md -d doc src/
```

## Links

- [Base configuration](https://github.com/adidas/js-build-tools/tree/master/packages/build-tools-javascript)
- [ESLint](https://eslint.org/)
- [JSDoc](http://usejsdoc.org/)
