// Symmetric Tree

// Time Complexity - O()

var isSymmetric = function(root) {
    // If the tree is empty, it's symmetric
    if (!root) return true;
    
    // Check if the left and right subtrees are mirror images of each other
    return checkMirror(root.left, root.right);
};

function checkMirror(left, right) {
    // Base case 1: If both subtrees are null, they are mirror images
    if (left == null && right == null) return true;
    
    // Base case 2: If one subtree is null and the other is not, they are not mirror images
    if (left == null || right == null) return false;
    
    // Check if the current nodes are equal and if their respective subtrees are mirror images
    return left.val == right.val &&
           checkMirror(left.left, right.right) &&
           checkMirror(left.right, right.left);
}