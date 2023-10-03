# Challenge

Implement a Queue using two Stacks.

## Whiteboard Process

![Stack Queue Psuedo](./Screenshot%202023-10-02%20at%2010.06.31%20PM.png)

## Approach & Efficiency

### Approach

The PseudoQueue class implements a queue using two stacks, namely the enqueuingStack and the dequeuingStack. Here's a breakdown of the approach for both enqueue and dequeue operations:

Enqueue Operation:

Push the value onto the enqueuingStack. This step has a time complexity of O(1) since it involves only one operation.

Dequeue Operation:

Check if the dequeuingStack is empty.

If the dequeuingStack is empty, transfer all elements from the enqueuingStack to the dequeuingStack in reverse order. This transfer involves popping from the enqueuingStack and pushing onto the dequeuingStack. The time complexity for this transfer operation is O(n), where n is the number of elements in the enqueuingStack.
Pop the top element from the dequeuingStack and return it as the dequeued value. This step has a time complexity of O(1).

### Efficiency

#### Overall Time Complexity

The overall time complexity for both enqueue and dequeue operations is O(1) amortized. While the transfer operation in the dequeue process has a time complexity of O(n), it is performed infrequently because elements are transferred only when the dequeuingStack is empty. Most dequeue operations are O(1) as they involve popping the dequeuingStack.

#### Space Complexity

The space complexity of the PseudoQueue class is O(n), where n is the total number of elements in both the enqueuingStack and dequeuingStack. This space complexity arises from the storage of elements in the two stacks.

## Solution

const pseudoQueue = new PseudoQueue();

pseudoQueue.enqueue(1);

pseudoQueue.enqueue(2);

pseudoQueue.enqueue(3);

console.log(pseudoQueue.dequeue()); // Dequeue 1

console.log(pseudoQueue.dequeue()); // Dequeue 2
