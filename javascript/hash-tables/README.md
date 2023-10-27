# Challenge

Implement a Hashtable Class with the following methods:

## set

Arguments: key, value

Returns: nothing

This method should hash the key, and set the key and value pair in the table, handling collisions as needed.

Should a given key already exist, replace its value from the value argument given to this method.

## get

Arguments: key

Returns: Value associated with that key in the table
has

Arguments: key

Returns: Boolean, indicating if the key exists in the table already.

## keys

Returns: Collection of keys
hash

Arguments: key

Returns: Index in the collection for that key

## Whiteboard Process

![Hash Table](./Screenshot%202023-10-27%20at%201.49.06%20PM.png)

## Approach & Efficiency

### Approach

In this hash table implementation, we use an array to represent the underlying data structure. The main components of the approach are:

Hash Function: We use a hash function to determine the index (bucket) where a key-value pair should be stored in the array. This ensures efficient retrieval and storage of data.

Buckets: Each index in the array represents a bucket. In the case of a collision (two keys hashing to the same index), we use separate chaining to handle collisions. Each bucket can contain a linked list, an array, or any other data structure that allows multiple key-value pairs to be stored.

Set Operation: The set(key, value) method calculates the hash of the key and places the key-value pair in the corresponding bucket. If the key already exists in the bucket, we replace the existing value with the new value.

Get Operation: The get(key) method calculates the hash of the key and looks up the corresponding bucket to retrieve the associated value. If the key is not found, it returns null or an appropriate indication of absence.

Handling Collisions: In cases where multiple keys hash to the same index, we use a data structure within each bucket to manage these key-value pairs. This allows us to efficiently handle collisions and retrieve values based on their keys.

### Efficiency

Time Complexity: The time complexity of the set and get operations is typically O(1) on average when the hash function is well-distributed and collisions are minimized. However, in the worst case (when all keys hash to the same index), the time complexity can be O(n), where n is the number of key-value pairs. This worst-case scenario is rare and can be mitigated with a good hash function and proper resizing strategies.

Space Complexity: The space complexity of the hash table is O(n), where n is the number of key-value pairs stored in the table. Each key-value pair consumes space in the array, and the space complexity grows linearly with the number of stored elements.

