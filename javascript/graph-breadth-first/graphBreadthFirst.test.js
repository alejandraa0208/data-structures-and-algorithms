const Graph = require('./graphBreadthFirst');

describe('Graph', () => {
  it('should perform breadth-first traversal', () => {
    const graph = new Graph();

    const nodeA = graph.addNode('A');
    const nodeB = graph.addNode('B');
    const nodeC = graph.addNode('C');
    const nodeD = graph.addNode('D');
    const nodeE = graph.addNode('E');
    const nodeF = graph.addNode('F');
    const nodeG = graph.addNode('G');
    const nodeH = graph.addNode('H');

    graph.addEdge(nodeA, nodeB);
    graph.addEdge(nodeA, nodeC);
    graph.addEdge(nodeB, nodeD);
    graph.addEdge(nodeC, nodeE);
    graph.addEdge(nodeC, nodeF);
    graph.addEdge(nodeF, nodeG);
    graph.addEdge(nodeG, nodeH);

    const result = graph.breadthFirstTraversal(nodeA);

    // The expected result should be [A, B, C, D, E, F, G, H] in BFS order.
    const expectedResult = [nodeA, nodeB, nodeC, nodeD, nodeE, nodeF, nodeG, nodeH];

    expect(result).toEqual(expectedResult);
  });

  it('should handle empty graph', () => {
    const graph = new Graph();
    const result = graph.breadthFirstTraversal();
    expect(result).toEqual([]);
  });
});
