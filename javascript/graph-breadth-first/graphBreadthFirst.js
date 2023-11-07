class Node {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
  }
}

class Graph {
  constructor() {
    this.nodes = [];
  }

  addNode(value) {
    const node = new Node(value);
    this.nodes.push(node);
    return node;
  }

  addEdge(node1, node2) {
    node1.neighbors.push(node2);
    node2.neighbors.push(node1);
  }

  breadthFirstTraversal(startNode) {
    const result = [];
    const visited = new Set();
    const queue = [];

    if (!startNode) return result;

    queue.push(startNode);
    visited.add(startNode);

    while (queue.length > 0) {
      const currentNode = queue.shift();
      result.push(currentNode);

      for (const neighbor of currentNode.neighbors) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
          visited.add(neighbor);
        }
      }
    }

    return result;
  }
}

module.exports = Graph;
