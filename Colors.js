class Colors {
  constructor() {
    this.favorites = [];
  }

  addColor(color) {
    this.favorites.push(color);
  }

  hasColor(color) {
    return this.favorites.includes(color);
  }
}

const susan = new Colors();

susan.addColor('red');
console.log(susan.hasColor('red'));
console.log(susan.hasColor('blue'));

module.exports = Colors;
