// Minimum Depth of a Binary Tree

// Time Complexity - O(n)

var minDepth = function(root) {
    // Base case: If the root is null, the tree is empty, so return 0
    if (root === null) return 0;

    // Initialize the queue with the root node
    let queue = [root];
    // Start the level counter at 1 (since we begin at the root)
    let level = 1;

    // Perform a breadth-first search (BFS)
    while (queue.length > 0) {
        // Get the number of nodes at the current level
        let levelSize = queue.length;

        // Iterate through each node at this level
        for (let i = 0; i < levelSize; i++) {
            // Dequeue the first node in the queue
            let node = queue.shift();

            // If the current node is a leaf node (no children), return the current level as the minimum depth
            if (!node.left && !node.right) return level;

            // Otherwise, add the left and right children to the queue (if they exist)
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

        // Increment the level counter as we move to the next level in the tree
        level++;
    }
};