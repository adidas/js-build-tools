[![npm version](https://badge.fury.io/js/build-tools-typescript.svg)](https://npmjs.com/package/build-tools-typescript)

# build-tools-typescript

Set of tools and configurations to work with TypeScript: compiler, linter and documentation.

- Compiler: default configs for `tsc`.
- Linter: _tslint_ runner and adidas linter configs.
- TypeScript documentation: based on _typedoc_ tool.

## Install

```
npm install --save-dev build-tools-typescript
```

## Usage

Extend your `tsconfig.json` with `build-tools-typescript`:

```json
{
  "extends": "./node_modules/build-tools-typescript/tsconfig.json",
  "compilerOptions": {
    "outDir": "dist"
  },
  "files": [
    "src/index.ts"
  ]
}
```

To use adidas linter configurations check https://github.com/adidas/js-linter-configs/tree/master/packages/tslint-config-adidas.

You can run `typedoc` as you would normally do, e.g:

```
npx typedoc --out docs
```

## Links

- [Base configuration](https://github.com/adidas/js-build-tools/tree/master/packages/build-tools-typescript)
- [TypeScript](https://www.typescriptlang.org/)
- [TSLint](https://palantir.github.io/tslint/)
- [TypeDoc](https://typedoc.org/)
