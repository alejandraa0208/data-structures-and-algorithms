# Challenge Title

Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.

## Whiteboard Process

![Binary Search](Screenshot%202023-09-20%20at%209.02.22%20PM.png)

## Approach & Efficiency

### Approach

The `binarySearch` function implements the binary search algorithm to find the index of a given search key in a sorted array. The key steps of the approach are as follows:

1. Initialize two pointers, `left` and `right`, to represent the search range in the array.
2. Enter a while loop as long as `left` is less than or equal to `right`.
3. Calculate the middle index, `mid`, as the floor of the average of `left` and `right`.
4. Compare the element at `arr[mid]` with the search key:
   - If they are equal, return `mid`, indicating that the key was found.
   - If `arr[mid]` is less than the key, update `left` to `mid + 1`, searching in the right half.
   - If `arr[mid]` is greater than the key, update `right` to `mid - 1`, searching in the left half.
5. If the loop completes without finding the key, return -1 to indicate that the key was not found in the array.

### Efficiency

- **Time Complexity**: The time complexity of the binary search algorithm is O(log n), where n is the number of elements in the array. Binary search reduces the search range by half in each iteration.
- **Space Complexity**: The space complexity is O(1) because the function uses a constant amount of extra space for variables (`left`, `right`, `mid`).

## Solution

Here's the code for the `binarySearch` function:

```javascript
function binarySearch(arr, key) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] < key) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

## Example Usage

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const searchKey = 7;

const resultIndex = binarySearch(sortedArray, searchKey);

if (resultIndex !== -1) {
  console.log(`The search key ${searchKey} was found at index ${resultIndex}.`);
} else {
  console.log(`The search key ${searchKey} was not found in the array.`);
}
