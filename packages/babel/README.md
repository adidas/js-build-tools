[![npm version](https://badge.fury.io/js/build-tools-babel.svg)](https://npmjs.com/package/build-tools-babel)

# build-tools-babel

Adds all required dependencies and configurations to use babel in JavaScript projects.

## Install

```
npm install --save-dev build-tools-babel
```

## Usage

Extend your `.babelrc` with `build-tools-babel`

```json
{
  "extends": "build-tools-babel"
}
```

Then you can run `babel` as you would normally do, e.g:

```
npx babel src -d dist
```

## Links

- [Base configuration](https://github.com/adidas/js-build-tools/tree/master/packages/build-tools-babel)
- [Babel](https://babeljs.io/)
