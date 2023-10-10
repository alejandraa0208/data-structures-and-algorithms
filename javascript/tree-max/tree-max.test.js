const{ BinaryTree, TreeNode } = require('./tree-max');



describe('Binary Tree Maximum Value', () => {
  it('should return the maximum value in the tree', () => {
    const tree = new BinaryTree();
    tree.root = new TreeNode(10);
    tree.root.left = new TreeNode(5);
    tree.root.right = new TreeNode(15);
    tree.root.left.left = new TreeNode(3);
    tree.root.left.right = new TreeNode(7);
    tree.root.right.left = new TreeNode(12);
    tree.root.right.right = new TreeNode(20);

    expect(tree.findMaximumValue()).toBe(20);
  });

  it('should handle an empty tree', () => {
    const tree = new BinaryTree();

    expect(tree.findMaximumValue()).toBe(Number.MIN_SAFE_INTEGER);
  });

  it('should handle a tree with a single node', () => {
    const tree = new BinaryTree();
    tree.root = new TreeNode(42);

    expect(tree.findMaximumValue()).toBe(42);
  });

  it('should handle negative values in the tree', () => {
    const tree = new BinaryTree();
    tree.root = new TreeNode(-10);
    tree.root.left = new TreeNode(-5);
    tree.root.right = new TreeNode(-15);

    expect(tree.findMaximumValue()).toBe(-5);
  });
});
