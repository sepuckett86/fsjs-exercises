const EventEmitter = require('events');

class IteratorEmitter extends EventEmitter {
  iterate(arr) {
    arr.forEach(item => {
      this.emit('item', item);
    });
    this.emit('end');
  }
}

module.exports = IteratorEmitter;
