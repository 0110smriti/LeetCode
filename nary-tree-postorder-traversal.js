// N-ary Tree Postorder Traversal

// Time complexity - O(n)

var preorder = function(root) {
    return pretraverse(root, []);  
};

const pretraverse = (root, vals) => {
    // Base case: If the current node is null, return the collected values.
    if (!root) {
        return vals;
    }

    // Visit the current node by adding its value to the array.
    vals.push(root.val);

    // Recursively traverse each child of the current node.
    for (let child of root.children) {
        pretraverse(child, vals);
    }

    // Return the array containing the values in preorder.
    return vals;
};