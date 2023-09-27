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

  // Find the value of the kth node from the end of the linked list
  kthFromEnd(k) {
    if (k <= 0) {
      return null;
    }

    let firstPointer = this.head;
    let secondPointer = this.head;

    // Move firstPointer k nodes ahead
    for (let i = 0; i < k; i++) {
      if (firstPointer === null) {
        return null; // Out of bounds
      }
      firstPointer = firstPointer.next;
    }

    // Move both pointers until firstPointer reaches the end
    while (firstPointer !== null) {
      firstPointer = firstPointer.next;
      secondPointer = secondPointer.next;
    }

    return secondPointer ? secondPointer.value : null;
  }
}

module.exports = LinkedList; // Export the LinkedList class
