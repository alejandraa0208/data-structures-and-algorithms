# Challenge Title

Write a function called zip lists

Arguments: 2 linked lists

Return: New Linked List, zipped as noted below

Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the the zipped list.

Try and keep additional space down to O(1)

You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Whiteboard Process

![Linked List Zip](./Screenshot%202023-09-27%20at%2010.34.13%20PM.png)

## Approach & Efficiency

### Approach

The "zip lists" function combines two linked lists by alternating between their nodes. It uses a pointer-based approach with three pointers (`current1`, `current2`, and `currentResult`) to traverse both linked lists and construct the zipped list. The steps are as follows:

1. Create an empty linked list (`result`) to store the zipped list.
2. Initialize `current1` and `current2` to the heads of the input linked lists.
3. Initialize `currentResult` to the head of the `result` list.
4. Loop while both `current1` and `current2` are not null:
   - Append the node pointed to by `current1` to the `result` list, connecting `currentResult` to `current1`.
   - Move `current1` to the next node.
   - Swap the roles of `current1` and `current2`.
   - Append the node pointed to by `current2` to the `result` list, connecting `currentResult` to `current2`.
   - Move `current2` to the next node.
   - Move `currentResult` to the next node.
5. If there are remaining nodes in either `current1` or `current2`, append them to the end of the `result` list.
6. Return the `result` list, which contains the zipped nodes.

### Efficiency

- **Time Complexity**: O(min(n, m)), where n and m are the lengths of the input linked lists. The function iterates through both lists simultaneously.
- **Space Complexity**: O(1), as the function does not use additional data structures except for a few pointers.

## Solution

function zipLists(list1, list2) {

  const result = new LinkedList();

  let current1 = list1.head;

  let current2 = list2.head;

  let currentResult = result.head;

  while (current1 !== null && current2 !== null) {

    currentResult.next = current1;

    current1 = current1.next;

    [current1, current2] = [current2, current1];

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

## Example Usage

const list1 = new LinkedList();

list1.insert(1);

list1.insert(2);

list1.insert(3);

const list2 = new LinkedList();

list2.insert(4);

list2.insert(5);

list2.insert(6);

const zippedList = zipLists(list1, list2);

console.log(zippedList.toString());
