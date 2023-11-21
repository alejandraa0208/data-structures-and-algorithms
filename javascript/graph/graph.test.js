const { Graph, Vertex } = require('./graph');

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  test('should add vertices', () => {
    const vertex = graph.addVertex('A');
    expect(graph.size()).toBe(1);
    expect(graph.getVertices()).toContain(vertex);
  });

  test('should add edges', () => {
    const startVertex = graph.addVertex('A');
    const endVertex = graph.addVertex('B');
    graph.addEdge(startVertex, endVertex, 1);

    const edges = graph.getEdges(startVertex);
    expect(edges.length).toBe(1);
    expect(edges[0].vertex).toBe(endVertex);
    expect(edges[0].weight).toBe(1);
  });

  test('should retrieve all vertices', () => {
    const vertexA = graph.addVertex('A');
    const vertexB = graph.addVertex('B');
    const vertices = graph.getVertices();

    expect(vertices.length).toBe(2);
    expect(vertices).toContain(vertexA);
    expect(vertices).toContain(vertexB);
  });

  test('should throw an error for invalid vertices on addEdge', () => {
    const startVertex = new Vertex('A');
    const endVertex = new Vertex('B');

    expect(() => {
      graph.addEdge(startVertex, endVertex);
    }).toThrow('Invalid vertices');
  });

  test('should throw an error for non-existent vertex on getEdges', () => {
    const vertex = new Vertex('A');
    expect(() => graph.getEdges(vertex)).toThrow('Vertex does not exist');
  });


});
