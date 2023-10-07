// Node Class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// BinaryTree Class
class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  // Pre-order traversal
  preOrder() {
    const result = [];

    function traverse(node) {
      if (node === null) {
        return;
      }

      result.push(node.value); // Process the value of the current node
      traverse(node.left); // Recursively call preOrder on the left subtree
      traverse(node.right); // Recursively call preOrder on the right subtree
    }

    traverse(this.root);
    return result;
  }

  inOrder() {
    const result = [];

    function traverse(node) {
      if (node === null) {
        return;
      }

      traverse(node.left); // Recursively call inOrder on the left subtree
      result.push(node.value); // Process the value of the current node
      traverse(node.right); // Recursively call inOrder on the right subtree
    }

    traverse(this.root);
    return result;
  }

  postOrder() {
    const result = [];

    function traverse(node) {
      if (node === null) {
        return;
      }

      traverse(node.left); // Recursively call postOrder on the left subtree
      traverse(node.right); // Recursively call postOrder on the right subtree
      result.push(node.value); // Process the value of the current node
    }

    traverse(this.root);
    return result;
  }
}

// BinarySearchTree Class (extends BinaryTree)
class BinarySearchTree extends BinaryTree {
  // Add a node with the given value to the BST
  add(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    function insert(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          insert(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          insert(node.right, newNode);
        }
      }
    }

    insert(this.root, newNode);
  }

  contains(value) {
    function search(node) {
      if (node === null) {
        return false;
      }

      if (node.value === value) {
        return true;
      } else if (value < node.value) {
        return search(node.left);
      } else {
        return search(node.right);
      }
    }

    return search(this.root);
  }
}

module.exports = { Node, BinaryTree, BinarySearchTree };
