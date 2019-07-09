const IteratorEmitter = require('./IteratorEmitter');

describe('iterator emitter', () => {
  it('fires the item event for each item in an array', done => {
    const colors = ['red', 'blue', 'green'];
    const iteratorEmitter = new IteratorEmitter();

    iteratorEmitter.on('item', color => {
      expect(colors).toContainEqual(color);
    });

    iteratorEmitter.on('end', () => {
      done();
    });

    iteratorEmitter.iterate(colors);
  });
});
