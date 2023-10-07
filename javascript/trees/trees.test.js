const { Node, BinaryTree, BinarySearchTree } = require('./trees');

describe('Binary Tree Pseudocode', () => {
  describe('Node', () => {
    it('should create a new Node with the given value', () => {
      const node = new Node(10);
      expect(node.value).toBe(10);
      expect(node.left).toBeNull();
      expect(node.right).toBeNull();
    });
  });

  describe('BinaryTree', () => {
    it('can successfully instantiate an empty tree', () => {
      const binaryTree = new BinaryTree();
      expect(binaryTree.root).toBeNull();
    });

    it('can successfully instantiate a tree with a single root node', () => {
      const root = new Node(10);
      const binaryTree = new BinaryTree(root);
      expect(binaryTree.root).toEqual(root);
    });

    it('should perform pre-order traversal', () => {
      const root = new Node(10);
      root.left = new Node(5);
      root.right = new Node(15);
      root.left.left = new Node(3);
      root.left.right = new Node(7);

      const binaryTree = new BinaryTree(root);
      const result = binaryTree.preOrder();

      expect(result).toEqual([10, 5, 3, 7, 15]);
    });

    it('should perform in-order traversal', () => {
      const root = new Node(10);
      root.left = new Node(5);
      root.right = new Node(15);
      root.left.left = new Node(3);
      root.left.right = new Node(7);

      const binaryTree = new BinaryTree(root);
      const result = binaryTree.inOrder();

      expect(result).toEqual([3, 5, 7, 10, 15]);
    });

    it('should perform post-order traversal', () => {
      const root = new Node(10);
      root.left = new Node(5);
      root.right = new Node(15);
      root.left.left = new Node(3);
      root.left.right = new Node(7);

      const binaryTree = new BinaryTree(root);
      const result = binaryTree.postOrder();

      expect(result).toEqual([3, 7, 5, 15, 10]);
    });
  });

  describe('BinarySearchTree', () => {
    it('can successfully add a left child and right child properly to a node', () => {
      const binarySearchTree = new BinarySearchTree();
      binarySearchTree.add(10);
      binarySearchTree.add(5);
      binarySearchTree.add(15);

      expect(binarySearchTree.root.value).toBe(10);
      expect(binarySearchTree.root.left.value).toBe(5);
      expect(binarySearchTree.root.right.value).toBe(15);
    });

    it('returns true for the contains method, given an existing node value', () => {
      const binarySearchTree = new BinarySearchTree();
      binarySearchTree.add(10);
      binarySearchTree.add(5);
      binarySearchTree.add(15);

      expect(binarySearchTree.contains(5)).toBe(true);
      expect(binarySearchTree.contains(15)).toBe(true);
    });

    it('returns false for the contains method, given a non-existing node value', () => {
      const binarySearchTree = new BinarySearchTree();
      binarySearchTree.add(10);
      binarySearchTree.add(5);
      binarySearchTree.add(15);

      expect(binarySearchTree.contains(3)).toBe(false);
      expect(binarySearchTree.contains(20)).toBe(false);
    });
  });
});
