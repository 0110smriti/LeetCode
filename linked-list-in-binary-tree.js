// Linked List in Binary tree

// Time Complexity - O(n*m)

var isSubPath = function(head, root) { 
    // Start DFS traversal with the list's head as both 'head' and 'cur'
    return dfs(head, head, root);
};

var dfs = function(head, cur, root) {
    if (cur === null) return true;  // Successfully matched the entire list
    if (root === null) return false; // Reached the end of the tree without matching
    
    // If the current tree node matches the current list node
    if (cur.val === root.val) {
        cur = cur.next;  // Move to the next node in the list
    } 
    // If the current tree node matches the head of the list, restart the matching process
    else if (head.val === root.val) {
        head = head.next;  // Start matching from the list head
    } 
    // If no match, reset the matching pointer to the list's head
    else {
        cur = head;
    }
    
    // Recursively check both the left and right subtrees
    return dfs(head, cur, root.left) || dfs(head, cur, root.right);
};
