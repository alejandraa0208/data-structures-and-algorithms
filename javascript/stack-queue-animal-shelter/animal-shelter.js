class AnimalShelter {
  constructor() {
    this.cats = [];
    this.dogs = [];
  }

  enqueue(animal) {
    // Check if the animal is a cat or a dog and enqueue accordingly
    if (animal.species === 'cat') {
      this.cats.push(animal);
    } else if (animal.species === 'dog') {
      this.dogs.push(animal);
    }
  }

  dequeue(pref) {
    if (pref === 'cat' && this.cats.length > 0) {
      return this.cats.shift();
    } else if (pref === 'dog' && this.dogs.length > 0) {
      return this.dogs.shift();
    } else {
      return null;
    }
  }
}

module.exports = AnimalShelter;
