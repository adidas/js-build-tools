/**
 * Class mathematics.
 * @constructor Mathematics
 * @class Mathematics
 * @property {Array.<number>} values - list of values to perform operations.
 * @param {...Mathematics#Value} values - List of values.
 */
function Mathematics() {
  var args = [].slice.call(arguments);
  var values = [];

  args.forEach(function(value) {
    var _value = value.value;

    values.push(value.type === 'double'
      ? parseFloat(_value)
      : parseInt(_value));
  });

  this.values = values;
}

/**
 * @typedef Value
 * @memberof Mathematics#
 * @type {Object}
 * @property {number} value - value.
 * @property {string} type - integer|double.
 * @example {@lang javascript}
 * {
 *   value: '111.489',
 *   type: 'double'
 * }
 */

/**
 * Performs the sum of the values.
 * @returns {number} Sum.
 * @public
 */
Mathematics.prototype.sum = function() {
  return this.values.reduce(function(sum, value) {
    return sum + value;
  }, 0);
};

/**
 * Performs the multiplication of the values.
 * @returns {number} Multiplication.
 * @public
 */
Mathematics.prototype.mul = function() {
  return this.values.reduce(function(mul, value) {
    return mul * value;
  }, 1);
};

window.Mathematics = Mathematics;
