require('../../../src/index');

describe('Mathematics', function() {
  var maths;

  beforeEach(function() {
    maths = new Mathematics(
      { value: 2, type: 'integer' },
      { value: '3.5', type: 'double' },
      { value: 4, type: 'integer' }
    );
  });

  describe('.sum()', function() {
    it('should sum all the values', function() {
      expect(maths.sum()).toEqual(9.5);
    });
  });

  describe('.mul()', function() {
    it('should mull all the values', function() {
      expect(maths.mul()).toEqual(28);
    });
  });
});
