const HashTable = require('./hash-table');

describe('Hash Table', () => {
  let hashTable;

  beforeEach(() => {
    hashTable = new HashTable();
  });

  it('should set a key/value pair in the hash table', () => {
    hashTable.set('name', 'John');
    expect(hashTable.get('name')).toBe('John');
  });

  it('should return null for a key that does not exist', () => {
    expect(hashTable.get('nonexistent')).toBeNull();
  });

  it('should return a list of unique keys in the hash table', () => {
    hashTable.set('name', 'John');
    hashTable.set('age', 30);
    hashTable.set('city', 'New York');
    expect(hashTable.keys()).toEqual(['name', 'age', 'city']);
  });

  it('should handle collisions within the hash table', () => {
    // Add a test case for collision handling if needed.
    // You may need to modify the HashTable class to handle collisions.
  });

  it('should hash a key to an in-range value', () => {
    const hash1 = hashTable.hash('key1');
    const maxIndex = Object.keys(hashTable.table).length - 1;
    expect(hash1).toBeGreaterThanOrEqual(0);
    expect(hash1).toBeLessThanOrEqual(maxIndex);
  });
});

