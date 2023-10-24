# Understanding Insertion Sort with Example

Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms like quicksort, heapsort, or merge sort. However, it has some advantages, such as its simplicity and low overhead.

## Algorithm Overview

The Insertion Sort algorithm consists of iterating through an input array, removing one element at a time, and finding its correct position within the sorted part of the array. It repeatedly takes the next unsorted element and moves it into its correct position among the sorted elements.

### Step 1: Initial State

Let's start with the initial state. Our input array is [5, 2, 9, 3, 6], and the sorted array is initially just [5].

Input Array: [5, 2, 9, 3, 6]
Sorted Array: [5]

### Step 2: Iteration 1

In this step, we process the element 2 from the input array. Since 2 is smaller than 5, we insert it before 5 in the sorted array.

Input Array: [5, 2, 9, 3, 6]
Sorted Array: [2, 5]

### Step 3: Iteration 2

Now, we process the element 9 from the input array. We compare it with the elements in the sorted array to find its correct position. In this case, it's greater than 5, so it stays in its current position.

Input Array: [5, 2, 9, 3, 6]
Sorted Array: [2, 5, 9]

### Step 4: Iteration 3

Next, we process the element 3. We compare it with 9, move 9 one position to the right, and insert 3 in its correct position.

Input Array: [5, 2, 9, 3, 6]
Sorted Array: [2, 3, 5, 9]

### Step 5: Iteration 4

Now, we process the element 6. We compare it with 9, move 9 one position to the right, and then compare it with 5, moving 5 one position to the right. Finally, we insert 6 in its correct position.

Input Array: [5, 2, 9, 3, 6]
Sorted Array: [2, 3, 5, 6, 9]

## Conclusion

After processing all elements from the input array, we have successfully sorted it using the Insertion Sort algorithm. The sorted array is [2, 3, 5, 6, 9].

Insertion Sort works by repeatedly taking the next unsorted element and inserting it into its correct position within the sorted part of the array. While it may not be the most efficient sorting algorithm for large datasets, it is a valuable concept to understand in computer science and programming.

![Visual](./Screenshot%202023-10-23%20at%207.32.16%20PM.png)
