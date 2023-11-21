'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  // Returns the total number of vertices in the graph
  size() {
    return this.adjacencyList.size;
  }

  // Adds a vertex to the graph
  addVertex(value) {
    let vertex = new Vertex(value);
    // Ensuring that the vertex is not added if it already exists
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []); // Use the vertex as the key in the adjacency list with an empty array for edges
    }
    return vertex;
  }

  // Adds a new edge between two vertices in the graph
  addEdge(startVertex, endVertex, weight = 0) {
    if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
      throw new Error('Invalid vertices');
    }

    const adjacencies = this.adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
    // If the graph is undirected, add an edge in the opposite direction too
    // Comment out the following two lines if the graph is directed
    const reverseAdjacencies = this.adjacencyList.get(endVertex);
    reverseAdjacencies.push(new Edge(startVertex, weight));
  }

  // Returns a collection of edges connected to the given vertex
  getEdges(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      throw new Error('Vertex does not exist');
    }
    return [...this.adjacencyList.get(vertex)];
  }

  // Returns all of the vertices in the graph as a collection
  getVertices() {
    // Since the keys() method returns an iterator, we spread it into an array to return a collection
    return [...this.adjacencyList.keys()];
  }
}

module.exports = { Graph, Vertex };
