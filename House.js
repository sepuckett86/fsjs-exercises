class House {
  constructor(location, floors, bedrooms, bathrooms) {
    this.location = location;
    this.floors = floors;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
  }

  price() {
    const total = 100000 * this.floors * this.bedrooms * this.bathrooms;
    return total;
  }
}

module.exports = House;
