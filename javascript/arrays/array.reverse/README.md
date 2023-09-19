# Challenge Title

Reverse an Array

## Whiteboard Process

![Reversed Array Whiteboard](./Screenshot%202023-09-18%20at%205.29.49%20PM.png)

## Approach & Efficiency

I took a straightforward approach to reverse the array. I initialized an empty array to store the reversed elements and then iterated through the input array in reverse order. For each element in the input array, I pushed it into the new array. This approach is simple and ensures that the order of the elements is reversed without using built-in methods. The time complexity of this approach is O(n), where n is the length of the input array, as we perform a single pass through the array.

The space complexity is also O(n) because we create a new array of the same length as the input array to store the reversed elements.

## Solution

```javascript
function reverseArray(arr) {
  let reversedArray = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }

  return reversedArray;
}

// Example usage:
const input = [2, 3, 8, 15, -3];

const result = reverseArray(input1);
console.log(result); // Should print [-3, 15, 8, 3, 2]
