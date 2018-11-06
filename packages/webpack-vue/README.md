[![npm version](https://badge.fury.io/js/build-tools-webpack-vue.svg)](https://npmjs.com/package/build-tools-webpack-vue)

# build-tools-webpack-vue

Set of dependencies for running webpack with Vue framework integration.

## Install

```
npm install --save-dev build-tools-webpack-vue
```

## Usage

### Building

```javascript
// webpack.config.js
const { output, devtool } = require('build-tools-webpack');
const { rules: babelRules } = require('build-tools-webpack-babel');
const { rules: sassRules } = require('build-tools-webpack-sass');
const { rules: fileRules } = require('build-tools-webpack-files');
const { rules: vueRules, alias: vueAlias } = require('build-tools-webpack-vue');

output.library = 'vueComponents';

module.exports = {
  entry: './src/main.js',
  output,
  module: {
    rules: [
      ...babelRules,
      ...vueRules,
      ...fileRules,
      ...sassRules
    ]
  },
  resolve: {
    alias: {
      ...vueAlias
    }
  },
  devtool
};

// Component.vue
<template>
  <div class="component">
    <span class="style">Scss</span> &amp; <span class="lang">JS</span>
  </div>
</template>

<script>
  export default {
    name: 'custom-component'
  }
</script>

<style lang="scss">
  .component {
    .style {
      padding: 5px;
      color: deeppink;
      font-weight: bold;
    }

    .lang {
      color: black;
      background: yellow;
      padding: 5px;
    }
  }
</style>
```

To use other languages (preprocessors) in Vue single file components, you will need to install the loaders or respective tools required for that.

E.g: `coffee-loader` and `coffescript` for `<script lang="coffee">` or `pug` for `<template lang="pug">`

```javascript
// webpack.config.js
const { output, devtool } = require('build-tools-webpack');
const { rules: babelRules } = require('build-tools-webpack-babel');
const { rules: lessRules } = require('build-tools-webpack-less');
const { rules: fileRules } = require('build-tools-webpack-files');
const { rules: vueRules, alias: vueAlias } = require('build-tools-webpack-vue');

output.library = 'vueComponents';

module.exports = {
  entry: './src/main.js',
  output,
  module: {
    rules: [
      ...babelRules,
      ...vueRules,
      ...fileRules,
      ...lessRules
    ]
  },
  resolve: {
    alias: {
      ...vueAlias
    }
  },
  devtool
};

// Component.vue
<template lang="pug">
  div(class="component")
      span(class="style")
          | less
      span
          | &amp;
      span(class="lang")
          | CoffeeScript
      span
          | &amp;
      span(class="markup")
          | pug
</template>

<script lang="coffee">
  module.exports =
    name: 'custom-component'
</script>

<style lang="less">
  .component {
    .style {
      color: blue;
      font-weight: bold;
      padding: 5px;
    }

    .lang {
      color: white;
      background: black;
      padding: 5px;
    }

    .markup {
      color: white;
      background: saddlebrown;
      font-weight: bold;
      padding: 5px;
    }
  }
</style>
```

## Links

- [Base configuration](https://github.com/adidas/js-build-tools/tree/master/packages/build-tools-webpack-typescript)
- [vuejs](https://vuejs.org/v2/guide/#Getting-Started)
  - [Single File Components](https://vuejs.org/v2/guide/single-file-components.html)
- [vuejs-templates/webpack](https://github.com/vuejs-templates/webpack)
- [vue-loader](https://vue-loader.vuejs.org/en/)
  - [Pre-Processors](https://vue-loader.vuejs.org/en/configurations/pre-processors.html)
