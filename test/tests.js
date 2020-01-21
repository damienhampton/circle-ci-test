const assert = require('chai').assert;

describe('Passing test', () => {
  it('should add 1 and 1', () => {
    assert.equal(1+1, 2, '1 + 1 should equal 2');
  })
  it('should add 1 and 2', () => {
    assert.equal(1+2, 4, '1 + 2 should equal 4 - doh!');
  })
})