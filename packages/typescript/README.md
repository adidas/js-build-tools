[![npm version](https://badge.fury.io/js/build-tools-typescript.svg)](https://npmjs.com/package/build-tools-typescript)

# build-tools-typescript

Set of tools and configurations to work with TypeScript: compiler, linter and documentation.

- Compiler: default configs for `tsc`.
- Linter: _eslint_ runner and adidas linter configs.
- TypeScript documentation: based on _typedoc_ tool.

## Install

```
npm install --save-dev build-tools-typescript
```

## Usage

Extend your `tsconfig.json` with `build-tools-typescript`:

```json
{
  "extends": "build-tools-typescript",
  "compilerOptions": {
    "outDir": "dist"
  },
  "files": [
    "src/index.ts"
  ]
}
```

To use adidas linter configurations check https://github.com/adidas/js-linter-configs/tree/master/packages/eslint-config-adidas-typescript.

You can run `typedoc` as you would normally do, e.g:

```
npx typedoc --out docs
```

## Links

- [Base configuration](https://github.com/adidas/js-build-tools/tree/master/packages/build-tools-typescript)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint TypeScript](https://eslint.org/blog/2019/01/future-typescript-eslint#the-future-of-typescript-on-eslint)
- [TypeDoc](https://typedoc.org/)
