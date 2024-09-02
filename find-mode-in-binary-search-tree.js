// Find Mode in Binary Search Tree

// Time Complexity - O(n)

var findMode = function(root) {
    // Traverse the tree and store values in an array
    const vals = traversal(root, []);
    
    // Create a map to count occurrences of each value
    const map = new Map();
    for(let i in vals) {
        map.set(vals[i], (map.get(vals[i]) || 0) + 1);
    }
    
    let mode = []; // Array to store the mode(s)
    let max = Number.NEGATIVE_INFINITY; // Variable to track the highest frequency
    
    // Find the maximum frequency
    for(const [key, val] of map) {
        if(val > max) {
            max = val;
        }
    }
    
    // Find all values that have the maximum frequency
    for(const [key, val] of map) {
        if(val === max) {
            mode.push(key);
        }
    }
    
    return mode; // Return the mode(s)
};

function traversal(root, vals) {
    if(!root) {
        return vals; // Base case: if root is null, return the array
    }
    
    // Perform in-order traversal: left, root, right
    vals.push(root.val);
    traversal(root.left, vals);
    traversal(root.right, vals);
    return vals;
}