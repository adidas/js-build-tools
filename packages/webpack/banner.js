const webpack = require('webpack');

/**
 * Gets the current date in English string format.
 * @returns {string} Release date.
 */
function getReleaseDate() {
  return new Date().toLocaleDateString('en-en', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

module.exports = {
  createBanner(name, version, year) {
    return new webpack.BannerPlugin(`${ name } v${ version }

Copyright adidas ${ year }
Release date: ${ getReleaseDate() }`);
  }
};
