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

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(`{${current.value}} -> `);
      current = current.next;
    }
    console.log('null');
  }
}

function zipLists(list1, list2) {
  const result = new LinkedList();
  let current1 = list1.head;
  let current2 = list2.head;
  let currentResult = result.head;

  while (current1 !== null && current2 !== null) {
    currentResult.next = current1;
    current1 = current1.next;
    [current1, current2] = [current2, current1]; // Swap roles
    currentResult = currentResult.next;
  }

  if (current1 !== null) {
    currentResult.next = current1;
  }

  if (current2 !== null) {
    currentResult.next = current2;
  }

  return result;
}

module.exports = { LinkedList, Node, zipLists };
