class HashTable {
  constructor() {
    this.table = {};
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % 100;
  }

  set(key, value) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    const bucket = this.table[index];
    for (const entry of bucket) {
      if (entry.key === key) {
        entry.value = value;
        return;
      }
    }
    bucket.push({ key, value });
  }

  // Get the value associated with a key
  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      return null;
    }
    for (const entry of bucket) {
      if (entry.key === key) {
        return entry.value;
      }
    }
    return null;
  }

  // Check if a key exists in the hash table
  has(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      return false; // Key doesn't exist
    }
    for (const entry of bucket) {
      if (entry.key === key) {
        return true; // Key found in the bucket
      }
    }
    return false; // Key not found in the bucket
  }

  keys() {
    const keys = [];
    for (const index in this.table) {
      if (this.table.hasOwnProperty(index)) {
        for (const entry of this.table[index]) {
          keys.push(entry.key);
        }
      }
    }
    return [...new Set(keys)]; // Return unique keys
  }

  size() {
    return Object.keys(this.table).length;
  }
}

module.exports = HashTable;
