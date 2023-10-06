'use strict';

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

  insert(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Indicates whether the given value exists as a Node's value in the list.
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

  // Adds a new node with the given value to the end of the list.
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Adds a new node with the given new value immediately before the first node that has the target value specified.
  insertBefore(targetValue, newValue) {
    const newNode = new Node(newValue);
    if (!this.head) {
      return 'Linked list is empty';
    }
    if (this.head.value === targetValue) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.value === targetValue) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
    return 'Target value not found in linked list';
  }

  // Adds a new node with the given new value immediately after the first node that has the target value specified.
  insertAfter(targetValue, newValue) {
    const newNode = new Node(newValue);
    if (!this.head) {
      return 'Linked list is empty';
    }
    let current = this.head;
    while (current) {
      if (current.value === targetValue) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
    return 'Target value not found in linked list';
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
