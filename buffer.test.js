const myBuff = require('./buffer');

describe('myBuff', () => {
  it('creates a buffer of length 10', () => {
    expect(myBuff).toHaveLength(10);
  });
});
