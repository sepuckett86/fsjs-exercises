const makeBuff = require('./buffer');

describe('myBuff', () => {
  const buffer = makeBuff('string');
  it('creates a buffer of length 6', () => {
    expect(buffer).toHaveLength(6);
  });
  it('can get string back', () => {
    expect(buffer.toString()).toBe('string');
  });
});
