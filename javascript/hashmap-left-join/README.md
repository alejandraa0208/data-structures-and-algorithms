# Challenge

Implement a simplified LEFT JOIN for 2 Hashmaps.

## Feature Tasks

Write a function that LEFT JOINs two hashmaps into a single data structure.

Write a function called left join

Arguments: two hash maps

The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.

The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.

Return: The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic

NOTES:

Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.

LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row.

If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.

## Whiteboard Process

 ![UML](./Screenshot%202023-11-02%20at%2012.18.36%20AM.png)

## Approach & Efficiency

Approach:

The LEFT JOIN operation on two hash maps can be performed using a simple iteration through the keys of one of the hash maps (the "left" map) and checking for matches in the other hash map (the "right" map). We will build the result data structure while iterating through the left map.

Here is the step-by-step approach:

Initialize an empty result array to store the combined data.

Iterate through the keys in the left hash map.

For each key in the left hash map:

Check if the key exists in the right hash map.

If it exists:

Append an array to the result with three elements: key, value from the left hash map, and value from the right hash map.

If it doesn't exist:

Append an array to the result with two elements: key and value from the left hash map.

Continue this process for all keys in the left hash map.

Return the result array as the output of the LEFT JOIN operation.

Efficiency:

Time Complexity: The time complexity of this approach is O(N), where N is the number of keys in the left hash map. We iterate through each key in the left hash map once.
Space Complexity: The space complexity is also O(N) because the result array stores the combined data, and its length is equal to the number of keys in the left hash map.

Solution

Here is the JavaScript code that implements the LEFT JOIN operation on two hash maps:

function leftJoin(leftMap, rightMap) {

  const result = [];

  for (const [key, value] of leftMap) {

    const leftValue = value;

    const rightValue = rightMap.get(key);

    if (rightValue !== undefined) {

      result.push([key, leftValue, rightValue]);

    } else {

      result.push([key, leftValue]);

    }

  }

  return result;

}

Example Usage:

const hashMap1 = new Map([

  ["happy", "joy"],

  ["sad", "unhappy"],

  ["good", "excellent"],

]);

const hashMap2 = new Map([

  ["happy", "sad"],

  ["good", "bad"],

]);

const result = leftJoin(hashMap1, hashMap2);

console.log(result);

This code will produce the following output:

[

  ["happy", "joy", "sad"],

  ["sad", "unhappy", "sad"],

  ["good", "excellent", "bad"]
  
]
