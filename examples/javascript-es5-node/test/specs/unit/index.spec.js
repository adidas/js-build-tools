const sum = require('../../../src/index');

describe('sum()', function() {
  it('should add 1 to 1', function() {
    expect(sum(1, 1)).toEqual(2);
  });
});
