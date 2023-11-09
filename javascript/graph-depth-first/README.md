# Challenge

Conduct a depth first pre-order traversal on a graph

## Whiteboard Process

![Graph Depth First](./Screenshot%202023-11-09%20at%2012.21.24%20AM.png)

## Approach & Efficiency

We start from the given node and mark it as visited.
We push the visited node into the result array.
For each unvisited neighbor of the current node, we recursively call the depth-first function on that neighbor.
We repeat steps 2 and 3 for all unvisited neighbors until we have visited all nodes reachable from the starting node.
The time complexity of this approach is O(V + E), where V is the number of vertices (nodes) in the graph, and E is the number of edges. In the worst case, we may visit all nodes and traverse all edges.

The space complexity is O(V), as we use a set (visited) to keep track of visited nodes and a result array to store the nodes in the pre-order traversal.
