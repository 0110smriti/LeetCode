// Maximum Depth of Binary Tree

// Time Complexity - O(n)

var maxDepth = function(root) {
    if(!root) return 0; // If the current node is null, return 0 (base case)
    
    // Recursively find the maximum depth of the left and right subtrees
    // Add 1 to account for the current node
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};