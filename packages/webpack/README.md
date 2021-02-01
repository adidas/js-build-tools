[![npm version](https://badge.fury.io/js/build-tools-webpack.svg)](https://npmjs.com/package/build-tools-webpack)

# build-tools-webpack

Set of tools and utilities to work with webpack.

## Install

```
npm install --save-dev build-tools-webpack-typescript
```

## Usage

### output

By default, the configuration is set to use UMD for browser compatibility.

Files will be built into `dist/` directory and published for devServer on `/dist/`.

For production builds, files will be suffixed with `.min.js`.

In order to toggle this configuration, `NODE_ENV` must be set to `production`.

### extensions

Simple array with extensions to resolve.

### loaders

Configuration to fix resolution of loaders, prioritizing those installed by `build-tools-webpack*` to avoid conflicts.

### devtool

The devtool is configured to use `inline-source-map` for standard builds and `source-map` for production builds.

In order to toggle this configuration, `NODE_ENV` must be set to `production`.

### devServer

Aside from common configurations, `webpack-dev-server` is available, you can run it as you would normally do, e.g:

```
npx webpack serve --open --hot
```

### banner

This utility provides a simple shorthand to create copyright with version banners.

```javascript
createBanner('package', '1.0.0', 2018);

/**
 * package v1.0.0
 *
 * Copyright adidas 2018
 * Release date: Tuesday, Nov 6, 2018
 */
```

## Links

- [Base configuration](https://github.com/adidas/js-build-tools/tree/master/packages/build-tools-webpack)
- [webpack](https://webpack.js.org/)
  - [output](https://webpack.js.org/concepts/output/)
  - [rules and loaders](https://webpack.js.org/concepts/loaders/)
  - [devtool](https://webpack.js.org/configuration/devtool/)
  - [extensions](https://webpack.js.org/configuration/resolve/#resolve-extensions)
  - [devServer](https://webpack.js.org/configuration/dev-server/)
  - [BannerPlugin](https://webpack.js.org/plugins/banner-plugin/)
