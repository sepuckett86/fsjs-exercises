const EventEmitter = require('events');

it('emits and listens to events', done => {
  const ee = new EventEmitter();
  ee.on('we did it', done);
  ee.emit('we did it');
});

it('emits and listens to events with data', done => {
  const ee = new EventEmitter();
  ee.on('newDog', (dog) => {
    expect(dog).toEqual({
      breed: 'Golden retriever',
      age: 1,
      name: 'Sparky'
    });
    done();
  });
  ee.emit('newDog', {
    breed: 'Golden retriever',
    age: 1,
    name: 'Sparky'
  }
  );
});
