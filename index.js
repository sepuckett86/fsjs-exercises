const Animal = function(name, species) {
  this.name = name;
  this.species = species;
};

Animal.prototype.speak = function() {
  console.log(`Hi, I'm ${this.name} and my species is ${this.species}`);
};

const sloth = new Animal('Andy', 'sloth');

sloth.speak();