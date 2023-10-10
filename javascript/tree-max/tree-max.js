class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Other methods...

  findMaximumValue() {
    return this._findMaximumValueRecursive(this.root, Number.MIN_SAFE_INTEGER);
  }

  _findMaximumValueRecursive(node, max) {
    if (!node) {
      return max;
    }

    // Compare the current node's value with the current max
    if (node.value > max) {
      max = node.value;
    }

    // Recursively search in the left and right subtrees
    const leftMax = this._findMaximumValueRecursive(node.left, max);
    const rightMax = this._findMaximumValueRecursive(node.right, max);

    // Return the maximum value found so far
    return Math.max(leftMax, rightMax);
  }
}

module.exports = { BinaryTree, TreeNode };

