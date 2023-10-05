const  AnimalShelter  = require('./index');

describe('AnimalShelter', () => {
  let shelter;

  beforeEach(() => {
    // Create a new shelter instance before each test
    shelter = new AnimalShelter();
  });

  describe('enqueue', () => {
    test('should enqueue a cat', () => {
      const cat = { species: 'cat', name: 'Noir' };
      shelter.enqueue(cat);
      expect(shelter.cats.length).toBe(1);
    });

    test('should enqueue a dog', () => {
      const dog = { species: 'dog', name: 'Rex' };
      shelter.enqueue(dog);
      expect(shelter.dogs.length).toBe(1);
    });

    test('should not enqueue an invalid animal', () => {
      const invalidAnimal = { species: 'lizard', name: 'Spikes' };
      shelter.enqueue(invalidAnimal);
      expect(shelter.cats.length).toBe(0);
      expect(shelter.dogs.length).toBe(0);
    });
  });

  describe('dequeue', () => {
    test('should dequeue a cat', () => {
      const cat = { species: 'cat', name: 'Noir' };
      shelter.enqueue(cat);
      const result = shelter.dequeue('cat');
      expect(result).toEqual(cat);
      expect(shelter.cats.length).toBe(0);
    });

    test('should dequeue a dog', () => {
      const dog = { species: 'dog', name: 'Rex' };
      shelter.enqueue(dog);
      const result = shelter.dequeue('dog');
      expect(result).toEqual(dog);
      expect(shelter.dogs.length).toBe(0);
    });

    test('should return null for invalid preference', () => {
      const cat = { species: 'cat', name: 'Noir' };
      shelter.enqueue(cat);
      const result = shelter.dequeue('lizard');
      expect(result).toBeNull();
    });

    test('should return null if shelter is empty', () => {
      const result = shelter.dequeue('cat');
      expect(result).toBeNull();
    });
  });
});
