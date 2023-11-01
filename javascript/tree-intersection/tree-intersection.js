const HashTable = require('./hashTable');

function tree_intersection(tree1, tree2) {
  const hashTable = new HashTable(1054);

  function addToHashTable(node) {
    if (node) {
      if (node.value !== undefined) {
        const valueAsString = node.value.toString();
        hashTable.set(valueAsString, true);
      }
      addToHashTable(node.left);
      addToHashTable(node.right);
    }
  }

  addToHashTable(tree1);

  const commonValues = [];

  function findCommonValues(node) {
    if (node) {
      if (node.value !== undefined && hashTable.has(node.value.toString())) {
        commonValues.push(node.value);
      }
      findCommonValues(node.left);
      findCommonValues(node.right);
    }
  }

  findCommonValues(tree2);

  return commonValues;
}

module.exports = tree_intersection;
