# Understanding and Implementing Merge Sort

Merge Sort is a popular comparison-based sorting algorithm known for its efficiency and stable nature. In this article, we will break down the provided pseudocode for Merge Sort, step through it visually with a sample array, and then implement the algorithm in JavaScript, complete with a set of working tests.

## Merge Sort Pseudocode

Let's begin by reviewing the pseudocode for Merge Sort:

ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left

Now, let's step through this pseudocode with a sample array and create a visual representation of how Merge Sort works.

## Visual Step-through with Sample Array

![Visual](./Screenshot%202023-10-24%20at%205.04.30%20PM.png)

This demonstrates how Merge Sort works by recursively dividing the array into smaller parts, sorting them, and then merging them back together. This process continues until the entire array is sorted.
