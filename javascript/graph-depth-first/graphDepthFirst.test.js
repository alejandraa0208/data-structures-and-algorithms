const Graph = require('./graphDepthFirst');

describe('Graph Depth First Pre-order Traversal', () => {
  it('should perform depth first pre-order traversal', () => {
    const graph = new Graph();
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('B', 'E');
    graph.addEdge('C', 'F');

    const result = graph.depthFirst('A');
    expect(result).toEqual(['A', 'B', 'D', 'E', 'C', 'F']);
  });

  it('should handle a graph with disconnected components', () => {
    const graph = new Graph();
    graph.addEdge('A', 'B');
    graph.addEdge('C', 'D');

    const result = graph.depthFirst('A');
    expect(result).toEqual(['A', 'B']);
  });

  it('should handle a single-node graph', () => {
    const graph = new Graph();
    graph.addNode('A');

    const result = graph.depthFirst('A');
    expect(result).toEqual(['A']);
  });
});
