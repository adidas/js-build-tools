[![npm version](https://badge.fury.io/js/build-tools-jest.svg)](https://npmjs.com/package/build-tools-jest)

# build-tools-jest

Adds all required dependencies and configurations to use jest.

## Install

```
npm install --save-dev build-tools-jest
```

## Usage

Extend your jest configuration with `build-tools-jest`

```javascript
// jest.config.js
module.exports = {
  ...require('build-tools-jest')
};
```

Then you can run jest as you would normally do, e.g:

```
npx jest --config jest.config.js
```

## Links

- [Base configuration](https://github.com/adidas/js-build-tools/tree/master/packages/build-tools-jest)
- [Jest](https://jestjs.io/)
