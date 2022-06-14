/**
 * params are graph, source, target
 * BFS of graph from the source node
 * BFS is useful whent he nodes have many out edges (degrees) and the paths are not exceedingly deep as it will visit neighbors
 * from the source node radiating outwards
 * 
 * N = |vertices|
 * M = |edges|
 * Time: O(M)
 * Additional Space: O(N) because need to keep track of nodes explored to make sure that you don't get caught in a loop
 */
const isConnectedBFS = (graph, source, target) => {
    let discovered = {}; // where we will put in values that we have come agross already
    let queue = [source]; // start at the source

    while (queue.length > 0) {
        let node = queue.shift(); // have to get from the beginning of array
        for (let neighbor of graph[node]) {
            if (!discovered[neighbor]) {
                if (neighbor === target) {
                    return true;
                }
                discovered[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }
    return false;
}

const dfs = (graph, discovered, source, target) => {
    if (source === target) {
        return true;
    }
    discovered[source] = true;
    for (let neighbor of graph[source]) {
        if (!discovered[neighbor]) {
            if (dfs(graph, discovered, neighbor, target)) {
                return true;
            }
        }   
    }
    return false;
}

/**
 * DFS of the graph from source node
 * DFS is useful when the graph has really long paths and we want to travel as far as we can through that graph as quickly as possible
 * DFS can be recursive or use a stack and iteration
 * 
 * N = |vertices|
 * M = |edges|
 * Time: O(M)
 * Additional Space: O(N)
 */
const isConnectedDFS = (graph, source, target) => {
    let discovered = {};
    return dfs(graph, discovered, source, target);
}