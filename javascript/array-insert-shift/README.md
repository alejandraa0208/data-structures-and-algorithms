# Challenge Title

Write a function called insertShiftArray which takes in an array and a value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Whiteboard Process

![Insert Shift Array](./Screenshot%202023-09-19%20at%204.13.40%20PM.png)

## Approach & Efficiency

### Approach

The `insertShiftArray` function takes in an array and a value to be added, and it inserts the value at the middle index of the array. Here's the step-by-step approach:

1. Calculate the middle index of the input array using `Math.ceil(arr.length / 2)`.
2. Initialize an empty result array, `resultArray`.
3. Iterate through the original array up to the middle index and push elements to `resultArray`.
4. Add the new value to `resultArray` at the middle index.
5. Continue iterating through the original array from the middle index onwards, pushing elements to `resultArray`.
6. Return `resultArray`.

### Efficiency

- **Time Complexity**: The time complexity of this approach is O(n), where n is the length of the input array. We iterate through the array once.
- **Space Complexity**: The space complexity is O(n) because we create a new array of the same length as the input array.

## Solution

Here's the code for the `insertShiftArray` function:

```javascript
function insertShiftArray(arr, value) {
  const middleIndex = Math.ceil(arr.length / 2);
  const resultArray = [];

  for (let i = 0; i < middleIndex; i++) {
    resultArray.push(arr[i]);
  }

  resultArray.push(value);

  for (let i = middleIndex; i < arr.length; i++) {
    resultArray.push(arr[i]);
  }

  return resultArray;
}

## Example Usage

const originalArray = [1, 2, 3, 4, 5];
const newValue = 10;

const modifiedArray = insertShiftArray(originalArray, newValue);

console.log(modifiedArray); // Should print [1, 2, 10, 3, 4, 5]
