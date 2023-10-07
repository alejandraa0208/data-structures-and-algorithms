class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert a node at the beginning of the linked list
  insert(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // Returns a string representing all the values in the Linked List.
  toString() {
    let current = this.head;
    let result = '';
    while (current) {
      result += `{ ${current.value} } -> `;
      current = current.next;
    }
    return result + 'NULL';
  }
}

const survivalRope = new LinkedList();
survivalRope.insert('sandwich');
survivalRope.insert('first aid');
survivalRope.insert('blow gun');
survivalRope.insert('sunscreen');
survivalRope.insert('paddle');

console.log(survivalRope.toString()); // "{ paddle } -> { sunscreen } -> { blow gun } -> { first aid } -> { sandwich } -> NULL"
console.log(survivalRope.includes('blow gun')); // true
console.log(survivalRope.includes('water bottle')); // false

module.exports = LinkedList;
