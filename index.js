const EventEmitter = require('events');
const ee = new EventEmitter();

ee.on('data', data => {
  console.log(data);
});

ee.emit('data', 'my data');
