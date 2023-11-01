class HashTable {
  constructor(size = 1000) {
    this.size = size;
    this.table = new Array(this.size);
  }

  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
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

  has(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (!bucket) {
      return false;
    }
    for (const entry of bucket) {
      if (entry.key === key) {
        return true;
      }
    }
    return false;
  }

  keys() {
    const keys = [];
    for (const bucket of this.table) {
      if (bucket) {
        for (const entry of bucket) {
          keys.push(entry.key);
        }
      }
    }
    return keys;
  }

  size() {
    let count = 0;
    for (const bucket of this.table) {
      if (bucket) {
        count += bucket.length;
      }
    }
    return count;
  }
}

module.exports = HashTable;
