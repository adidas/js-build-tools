const jsdocConfig = require('build-tools-javascript/jsdoc.config.js');
const { name } = require('./package.json');

jsdocConfig.systemName = name;
jsdocConfig.copyright = `adidas © ${ (new Date()).toLocaleDateString('en-en', { year: 'numeric' }) }`;

module.exports = jsdocConfig;
