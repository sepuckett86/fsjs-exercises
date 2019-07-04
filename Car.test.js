const Car = require('./Car');

describe('Car', () => {
  it('has the expected make, model, year, miles, and color properties', () => {
    const myDream = new Car('Tesla', 'Model 3', 2019, 'blue');
    expect(myDream.make).toBe('Tesla');
    expect(myDream.model).toBe('Model 3');
    expect(myDream.year).toBe(2019);
    expect(myDream.color).toBe('blue');
    expect(myDream.miles).toBe(0);
  });
  it('has drive method that adds to miles', () => {
    const myDream = new Car('Tesla', 'Model 3', 2019, 'blue');
    myDream.drive(100);
    expect(myDream.miles).toBe(100);
  });
  it('has a makes static method that returns array', () => {
    expect(Car.makes()).toEqual(expect.any(Array));
  });
});
