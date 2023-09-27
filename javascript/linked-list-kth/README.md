# Challenge Title

Write the following method for the Linked List class:

kth from end

- argument: a number, k, as a parameter.

- Return the node’s value that is k places from the tail of the linked list.

- You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Whiteboard Process

![Linked List Kth](./Screenshot%202023-09-26%20at%2011.30.37%20PM.png)

## Approach & Efficiency

### Approach

The "kth from end" method of the Linked List uses a two-pointer approach to find the value of the node that is k places from the tail. Here's the step-by-step approach:

1. Initialize two pointers, `firstPointer` and `secondPointer`, to the head of the linked list.

2. Move the `firstPointer` k nodes ahead in the linked list.

3. If the `firstPointer` reaches the end of the linked list before reaching k nodes, return an appropriate message or value (e.g., `null`) since there are not enough nodes.

4. While the `firstPointer` is not at the end of the linked list, move both `firstPointer` and `secondPointer` one node at a time.

5. When the `firstPointer` reaches the end of the linked list, the `secondPointer` will be k nodes from the end, so return the value of the node pointed to by `secondPointer`.

### Efficiency

- **Time Complexity**: O(n), where n is the number of nodes in the linked list. We traverse the linked list twice, once with the `firstPointer` and once with both pointers.

- **Space Complexity**: O(1), as we only use two pointers to traverse the linked list.

## Solution

function kthFromEnd(k) {

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

  return secondPointer.value;

}

## Example Usage

const linkedList = new LinkedList();
linkedList.insert(10);
linkedList.insert(20);
linkedList.insert(30);
linkedList.insert(40);

const k = 2;
const result = linkedList.kthFromEnd(k);
console.log(`The ${k}th node from the end has a value of ${result}`);
