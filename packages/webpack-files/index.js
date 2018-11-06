const { rules: fontRules } = require('./fonts');
const { rules: imageRules } = require('./images');
const { rules: htmlRules } = require('./html');

module.exports = {
  rules: [].concat(
    fontRules,
    imageRules,
    htmlRules
  )
};
