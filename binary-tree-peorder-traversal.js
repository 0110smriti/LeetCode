// Binary Tree Pre-Order Traversal

// Time Complexity - O(n)

var preorderTraversal = function(root) {
    // Call the helper function to perform the pre-order traversal
    return preOrder(root, []);
};

// Helper function to perform pre-order traversal
const preOrder = (root, ans) => {
    // Base case: If the current node is null, return the accumulated answer
    if (!root) {
        return ans;
    }

    // Add the value of the current node to the answer array
    ans.push(root.val);

    // Recursively traverse the left subtree
    preOrder(root.left, ans);

    // Recursively traverse the right subtree
    preOrder(root.right, ans);

    // Return the accumulated answer
    return ans;
};