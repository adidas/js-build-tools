[![npm version](https://badge.fury.io/js/build-tools-typescript-jest.svg)](https://npmjs.com/package/build-tools-typescript-jest)

# build-tools-typescript-jest

Adds all required dependencies and configurations to use typescript with jest in JavaScript projects.

Although not required, it works best with `build-tools-jest`.

## Install

```
npm install --save-dev build-tools-jest build-tools-typescript-jest
```

## Usage

Extend your jest configuration with `build-tools-typescript-jest`

```javascript
// jest.config.js
module.exports = {
  ...require('build-tools-jest')
  ...require('build-tools-typescript-jest')
};
```

Then you can run jest as you would normally do, e.g:

```
npx jest --config jest.config.js
```

## Links

- [Base configuration](https://github.com/adidas/js-build-tools/tree/master/packages/build-tools-typescript-jest)
- [Jest](https://jestjs.io/)
