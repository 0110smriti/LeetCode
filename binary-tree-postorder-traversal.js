// Binary Tree Postorder traversal

// Time Complexity - O(n)

var postorderTraversal = function(root) {
    // Call the helper function to perform the post-order traversal
    return traverse(root, []);
};

// Helper function to perform post-order traversal
const traverse = (root, values) => {
    // Base case: If the current node is null, return the accumulated values
    if (!root) {
        return values;
    }

    // Recursively traverse the left subtree
    traverse(root.left, values);

    // Recursively traverse the right subtree
    traverse(root.right, values);

    // Add the value of the current node to the values array
    values.push(root.val);

    // Return the accumulated values
    return values;
};