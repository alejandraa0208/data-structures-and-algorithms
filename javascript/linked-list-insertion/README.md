# Linked List Insertion

Write the following methods for the Linked List class:

append

- arguments: new value

- adds a new node with the given value to the end of the list

insert before

- arguments: value, new value

- adds a new node with the given new value immediately before the first node that has the value specified

insert after

- arguments: value, new value

- adds a new node with the given new value immediately after the first node that has the value specified

## Whiteboard Process

No whiteboard utilized

## Approach & Efficiency

### Approach

append(newValue) Method:

Approach: To append a new node to the end of the linked list, we traverse the list to find the last node and then add the new node as the next node of the last node.

Time Complexity: O(n) where n is the number of nodes in the linked list since we need to traverse the entire list to find the last node.

Space Complexity: O(1) as we only need a constant amount of extra space.

insertBefore(value, newValue) Method:

Approach: To insert a new node with newValue before the first node with the specified value, we traverse the list until we find the node with the specified value, and then insert the new node before it.

Time Complexity: O(n) in the worst case if the node with the specified value is the last node, we have to traverse the entire list.

Space Complexity: O(1) as we only need a constant amount of extra space.

insertAfter(value, newValue) Method:

Approach: To insert a new node with newValue after the first node with the specified value, we traverse the list until we find the node with the specified value, and then insert the new node after it.

Time Complexity: O(n) in the worst case if the node with the specified value is the last node, we have to traverse the entire list.

Space Complexity: O(1) as we only need a constant amount of extra space.

## Solution

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);

// List: 1 -> 2 -> 3

list.insertBefore(2, 4); // Insert 4 before the first occurrence of 2

// List: 1 -> 4 -> 2 -> 3

list.insertAfter(4, 5); // Insert 5 after the first occurrence of 4

// List: 1 -> 4 -> 5 -> 2 -> 3
