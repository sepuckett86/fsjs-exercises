const House = require('./House');

describe('House', () => {
  it('has location, floors, bedrooms, and bathrooms', () => {
    const chateau = new House('Miami', 4, 7, 5);
    expect(chateau.location).toBe('Miami');
    expect(chateau.floors).toBe(4);
    expect(chateau.bedrooms).toBe(7);
    expect(chateau.bathrooms).toBe(5);
  });
  it('has a price method that returns expected price', () => {
    const chateau = new House('Miami', 4, 7, 5);
    expect(chateau.price()).toEqual(14000000);
  });
});
