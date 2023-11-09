class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(node) {
    if (!this.adjacencyList.has(node)) {
      this.adjacencyList.set(node, []);
    }
  }

  addEdge(node1, node2) {
    this.addNode(node1);
    this.addNode(node2);
    this.adjacencyList.get(node1).push(node2);
  }

  depthFirst(node) {
    const visited = new Set();
    const result = [];

    const dfs = (currentNode) => {
      visited.add(currentNode);
      result.push(currentNode);

      const neighbors = this.adjacencyList.get(currentNode);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          dfs(neighbor);
        }
      }
    };

    dfs(node);
    return result;
  }
}

module.exports = Graph;
