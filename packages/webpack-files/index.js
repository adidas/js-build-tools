const { rules: fontRules } = require('./fonts');
const { rules: imageRules } = require('./images');
const { rules: htmlRules } = require('./html');
const { rules: jsonRules } = require('./json');
const { rules: svgRules } = require('./svg');
const { rules: yamlRules } = require('./yaml');

module.exports = {
  rules: [].concat(
    fontRules,
    imageRules,
    htmlRules,
    jsonRules,
    svgRules,
    yamlRules
  )
};
