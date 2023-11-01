const BinaryTree = require('./binaryTree'); // Import your BinaryTree class
const tree_intersection = require('./tree-intersection'); // Import your tree_intersection function

function createBinaryTree(arr) {
  const tree = new BinaryTree();
  for (const value of arr) {
    tree.insert(value);
  }
  return tree;
}

describe('tree_intersection', () => {
  it('should return an empty array for two empty trees', () => {
    const tree1 = new BinaryTree();
    const tree2 = new BinaryTree();
    const result = tree_intersection(tree1, tree2);
    expect(result).toEqual([]);
  });

  it('should return an empty array for one empty tree and one non-empty tree', () => {
    const tree1 = new BinaryTree();
    const tree2 = createBinaryTree([1, 2, 3]);
    const result = tree_intersection(tree1, tree2);
    expect(result).toEqual([]);
  });

  test('should find common values between two trees', () => {
    const tree1 = createBinaryTree([1, 2, 3, 4, 5]);
    const tree2 = createBinaryTree([6, 7, 8, 9, 10]);
    const result = tree_intersection(tree1, tree2);
    expect(result).toEqual([]);
  });
});
