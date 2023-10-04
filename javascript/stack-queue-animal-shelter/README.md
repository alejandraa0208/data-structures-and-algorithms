# Challenge

First-in, First out Animal Shelter.

## Whiteboard Process

![Stack Queue Animal Shelter](./Screenshot%202023-10-03%20at%209.01.53%20PM.png)

## Approach & Efficiency

### Approach

The AnimalShelter class uses a combination of two queues to implement the FIFO behavior for both dogs and cats. The key components of the approach are as follows:

Two Queues: Maintain two separate queues—one for dogs and one for cats. These queues hold animals of the specified species in the order they arrive.

Enqueue Operation: When an animal is enqueued, it is added to the corresponding queue based on its species ("dog" or "cat"). The enqueue operation has a time complexity of O(1) because it involves adding an element to a queue.

Dequeue Operation: When an animal is dequeued based on preference, the shelter checks which species is requested ("dog" or "cat"). It then dequeues the oldest animal of that species from the respective queue. The dequeue operation has a time complexity of O(1) because it involves removing an element from a queue.

Handling Invalid Preference: If the preference is neither "dog" nor "cat," the dequeue method returns null to indicate an invalid preference.

### Efficiency

Overall Time and Space Complexity

Enqueue Operation: O(1) (constant time)
Dequeue Operation: O(1) (constant time)
Space Complexity: O(n) (linear space) for storing animals in the queues, where n is the total number of animals in the shelter.

## Solution

const shelter = new AnimalShelter();

shelter.enqueue({ species: "dog", name: "Buddy" });

shelter.enqueue({ species: "cat", name: "Whiskers" });

shelter.enqueue({ species: "dog", name: "Rex" });

console.log(shelter.dequeue("dog")); // Dequeue the oldest dog

console.log(shelter.dequeue("cat")); // Dequeue the oldest cat

console.log(shelter.dequeue("rabbit")); // Invalid preference, returns null
