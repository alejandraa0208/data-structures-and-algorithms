const { TreeNode, Queue, breadthFirst } = require('./tree-breadth-first'); // Make sure to use the correct path

describe('TreeNode class', () => {
  test('should create a TreeNode with the provided value', () => {
    const node = new TreeNode(42);
    expect(node.value).toBe(42);
  });
});

describe('Queue class', () => {
  test('should enqueue and dequeue items correctly', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
  });

  test('should return true for isEmpty when the queue is empty', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
  });

  test('should return false for isEmpty when the queue is not empty', () => {
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
  });
});

describe('breadthFirst function', () => {
  test('should return an empty array for an empty tree', () => {
    const result = breadthFirst(null);
    expect(result).toEqual([]);
  });

  test('should return values in breadth-first order', () => {
    const tree = new TreeNode(1);
    tree.left = new TreeNode(2);
    tree.right = new TreeNode(3);
    tree.left.left = new TreeNode(4);
    tree.left.right = new TreeNode(5);

    const result = breadthFirst(tree);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});

