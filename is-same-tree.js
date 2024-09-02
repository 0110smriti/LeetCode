// Same Tree

// Time Complexity - O(n)

var isSameTree = function(p, q) {
    // Base case 1: Both nodes are null, trees are the same up to this point
    if (p == null && q == null) return true;
    
    // Base case 2: One of the nodes is null but not the other, trees are not the same
    if (p == null || q == null) return false;
    
    // Recursive case: Check if current nodes have the same value and recursively check left and right subtrees
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};