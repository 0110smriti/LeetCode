// N-ary Tree Postorder Traversal

// Time Complexity - O(n)

var postorder = function(root) {
    return post_traverse(root, []);
};

const post_traverse = (root, val) => {
    // If the current node is null, return the accumulated values array
    if (!root) {
        return val;
    }
    // Recursively traverse each child of the current node
    for (let child of root.children) {
        post_traverse(child, val);
    }
    // After traversing all children, add the current node's value to the array
    val.push(root.val);
    return val;
};