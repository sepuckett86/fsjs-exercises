// AnimalConstructor
const AnimalConstructor = function(name, species) {
  this.name = name;
  this.species = species;
};

AnimalConstructor.prototype.speak = function() {
  console.log(`Hi, I'm ${this.name} and my species is ${this.species}`);
};

const sloth = new AnimalConstructor('Andy', 'sloth');
sloth.speak();

// AnimalFactory
const AnimalFactory = function(name, species) {
  return {
    name,
    species,
    speak() {
      console.log(`Hi, I'm ${this.name} and my species is ${this.species}`);
    }
  };
};

const manatee = new AnimalFactory('Veteran George', 'manatee');
manatee.speak();

// AnimalClass
class AnimalClass {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  speak() {
    console.log(`Hi, I'm ${this.name} and my species is ${this.species}`);
  }
}

const meerkat = new AnimalClass('Annabelle', 'meerkat');
meerkat.speak();
