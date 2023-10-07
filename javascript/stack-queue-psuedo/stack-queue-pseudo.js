class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    // To enqueue a value, push it onto stack1
    this.stack1.push(value);
  }

  dequeue() {
    // If both stacks are empty, the queue is empty
    if (this.stack1.isEmpty() && this.stack2.isEmpty()) {
      return null;
    }

    // If stack2 is empty, transfer elements from stack1 to stack2 to reverse the order
    if (this.stack2.isEmpty()) {
      while (!this.stack1.isEmpty()) {
        this.stack2.push(this.stack1.pop());
      }
    }

    // Pop and return the front element from stack2, which represents the front of the queue
    return this.stack2.pop();
  }
}

module.exports = {
  Stack,
  PseudoQueue
};
