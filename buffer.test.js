const makeBuff = require('./buffer');

describe('myBuff', () => {
  const buffer = makeBuff([0xF0, 0x9F, 0x98, 0x81]);
  it('creates a buffer of length 6', () => {
    expect(buffer).toHaveLength(4);
  });
  it('can get string back', () => {
    expect(buffer.toString()).toBe('😁');
  });
});
