class TreeNode {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }
}

function fizzBuzzTree(tree) {
  if (!tree) {
    return null; // Handle the case of an empty tree
  }

  function fizzBuzz(value) {
    if (value % 3 === 0 && value % 5 === 0) {
      return 'FizzBuzz';
    } else if (value % 3 === 0) {
      return 'Fizz';
    } else if (value % 5 === 0) {
      return 'Buzz';
    } else {
      return value.toString();
    }
  }

  const modifiedRoot = new TreeNode(fizzBuzz(tree.value));

  for (const child of tree.children) {
    modifiedRoot.children.push(fizzBuzzTree(child)); // Recursively apply fizzBuzzTree to children
  }

  return modifiedRoot;
}

module.exports = { fizzBuzzTree, TreeNode };


