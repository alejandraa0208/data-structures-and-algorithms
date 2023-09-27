// Import necessary modules and classes
const assert = require('assert');
const LinkedList = require('../LinkedList'); // Replace with the actual import statement for your Linked List class

// Test Case 1: k is greater than the length of the linked list
const list1 = new LinkedList();
list1.insert(10);
list1.insert(20);
list1.insert(30);
const k1 = 5;
assert.strictEqual(list1.kthFromEnd(k1), null, 'Test Case 1 Failed');

// Test Case 2: k and the length of the list are the same
const list2 = new LinkedList();
list2.insert(10);
list2.insert(20);
list2.insert(30);
const k2 = 3;

// Debugging: Print the linked list to check its contents
console.log('Linked List Contents:', list2);

// Debugging: Print the result of kthFromEnd to check the result
const result2 = list2.kthFromEnd(k2);
console.log('Result of kthFromEnd:', result2);

assert.strictEqual(result2, 10, 'Test Case 2 Failed');


// Test Case 3: k is not a positive integer
const list3 = new LinkedList();
list3.insert(10);
list3.insert(20);
list3.insert(30);
const k3 = -2;
assert.strictEqual(list3.kthFromEnd(k3), null, 'Test Case 3 Failed');

// Test Case 4: The linked list is of size 1
const list4 = new LinkedList();
list4.insert(50);
const k4 = 1;
assert.strictEqual(list4.kthFromEnd(k4), 50, 'Test Case 4 Failed');

// Test Case 5: Happy Path - k is not at the end, but somewhere in the middle
const list5 = new LinkedList();
list5.insert(10);
list5.insert(20);
list5.insert(30);
list5.insert(40);
const k5 = 2;
assert.strictEqual(list5.kthFromEnd(k5), 20, 'Test Case 5 Failed');

console.log('All test cases passed!');
