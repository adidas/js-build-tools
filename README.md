![[](https://travis-ci.com/adidas/js-build-tools)](https://api.travis-ci.com/adidas/js-build-tools.svg?branch=master)

# js-build-tools

Configurations and sane defaults for multiple JavaScript tools in order to make tooling configurations simpler.

These configurations can be used altogether or independently without much hussle.

## Use cases

The main use case of this repository and their shareable configurations is to facilitate spinning up projects with minimum config, although requiring knowledge of the tools involved.

adidas is not responsible for the usage of this software for different purposes that the ones described above.

## Requirements and dependencies

This repository contains different configurations which are independent packages. It means that all these packages are published independently but managed all together. [Lerna](https://lernajs.io/) is the tool used to manage them.

[NodeJS/NPM](https://nodejs.org/) are required to work with the repository.

## Installation and running

- In development mode (dependencies of the main package):
    ```
    npm install
    npm run setup
    ```
- Install a specific package in production mode (installation of each configuration):
    ```
    npm install CONFIGURATION_PACKAGE_NAME[@VERSION]
    ```

The required dependencies of each package are listed in their own `package.json` file as either dependency or peer dependency.

Specific instructions about how to use the configurations are placed in the `README.md` file of each package.

## Running the examples locally

Running the examples with unpublished packages is not as simple as linking packages via file paths, since npm >= 5 does not link binaries correctly.

Our recommended approach is to run an instance of [nexus](https://www.sonatype.com/download-oss-sonatype) as private registry, you can read more [here](https://github.com/adidas/js-build-tools/wiki/Running-examples).

A `docker-compose.yml` file is provided for quick setup, just run:

```
cp .npmrc.nexus .npmrc
docker-compose up
```

## FAQ

### Maintainers

Check the contributor list and you will be welcome if you want to contribute.

### Contributing

Check out the [CONTRIBUTING.md](./.github/CONTRIBUTING.md) file to know how to contribute to this project.

### ESLint Peer Dependencies

By default, `eslint` resolves dependencies in the first level of `node_modules` and won't go any deeper.

As a fix for this, we improved the resolution by adding `require.resolve` to each `extends` entry in our configurations so it will look for a nested module instead.

Be aware that currently there is no way to resolve either relative or absolute paths for the `plugins` section of ESLint:

- https://github.com/eslint/eslint/issues/3458
- https://github.com/eslint/eslint/issues/6237

## License and Software Information

© adidas AG

adidas AG publishes this software and accompanied documentation (if any) subject to the terms of the MIT license with the aim of helping the community with our tools, libraries and configurations which can be also useful for other people. You will find a copy of the MIT license in the root folder of this package. All rights not explicitly granted to you under the MIT license remain the sole and exclusive property of adidas AG.

NOTICE: The software has been designed solely for the purpose of analyzing the code quality by checking the coding guidelines. The software is NOT designed, tested or verified for productive use whatsoever, nor or for any use related to high risk environments, such as health care, highly or fully autonomous driving, power plants, or other critical infrastructures or services.

If you want to contact adidas regarding the software, you can mail us at _software.engineering@adidas.com_.

For further information open the [adidas terms and conditions](https://github.com/adidas/adidas-contribution-guidelines/wiki/Terms-and-conditions) page.

### License

[MIT](LICENSE)
