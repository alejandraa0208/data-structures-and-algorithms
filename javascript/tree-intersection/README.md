# Challenge

Find common values in 2 binary trees.

## Feature Tasks

Write a function called tree_intersection that takes two binary trees as parameters.

Using your Hashmap implementation as a part of your algorithm, return a set of values found in both trees.

## Whiteboard Process

![UML](./Screenshot%202023-10-31%20at%2010.46.11%20PM.png)

![UML](./Screenshot%202023-10-31%20at%2010.46.24%20PM.png)

## Approach & Efficiency

Create a hash table to store the values from the first binary tree.

Traverse the first binary tree and add each value to the hash table.

Traverse the second binary tree and check if each value exists in the hash table.

If a value exists in the hash table, it is a common value between the two trees, so add it to the commonValues array.

Return the commonValues array containing all common values between the two trees.

The time complexity of this approach is O(N), where N is the total number of nodes in the binary trees. Both the tree traversal and hash table operations are linear in terms of the number of nodes.

The space complexity is also O(N) in the worst case. This is because we use a hash table to store the values from the first tree, and in the worst case, if all values are unique, the hash table would contain N key-value pairs. Additionally, the commonValues array can also grow to have a maximum of N/2 elements if all values in tree2 are common with tree1. Therefore, the space complexity is O(N) due to the space required for the hash table and the commonValues array.

To run the code, you can follow these steps:

Make sure you have the tree_intersection.js and hash-table.js files.

Create instances of binary trees using the BinaryTree class and populate them with values.

Import the tree_intersection function into your script.

Call tree_intersection(tree1, tree2) with your binary trees as arguments, where tree1 and tree2 are instances of the binary tree containing values.

The function will return an array of common values between the two trees.
