import { sum } from '../../../src/index';

describe('sum()', () => {
  it('should add 1 to 1', () => {
    expect(sum(1, 1)).toEqual(2);
  });
});
