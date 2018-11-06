[![npm version](https://badge.fury.io/js/build-tools-babel-jest.svg)](https://npmjs.com/package/build-tools-babel-jest)

# build-tools-babel-jest

Adds all required dependencies and configurations to use babel with jest in JavaScript projects.

Although not required, it works best with `build-tools-jest`.

## Install

```
npm install --save-dev build-tools-jest build-tools-babel-jest
```

## Usage

Extend your jest configuration with `build-tools-babel-jest`

```javascript
// jest.config.js
module.exports = {
  ...require('build-tools-jest')
  ...require('build-tools-babel-jest')
};
```

Then you can run jest as you would normally do, e.g:

```
npx jest --config jest.config.js
```

## Links

- [Base configuration](https://github.com/adidas/js-build-tools/tree/master/packages/build-tools-babel-jest)
- [Jest](https://jestjs.io/)
