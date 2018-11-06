const { sync } = require('glob');

module.exports = {
  resolveLoader: {
    modules: [
      ...sync('node_modules/build-tools-*/node_modules'),
      'node_modules'
    ]
  }
};
