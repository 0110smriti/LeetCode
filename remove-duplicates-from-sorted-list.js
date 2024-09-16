// Remove Deuplicates from Sorted List

//Time Complexity - O(n)

var deleteDuplicates = function(head) {
    let curr = head;  // Initialize 'curr' to point to the current node being checked
    let dummy = head;  // 'dummy' will be used to return the head of the modified list
    
    // Traverse the list until the end
    while (curr !== null && curr.next !== null) {
        // If the current node's value is the same as the next node's value
        if (curr.val === curr.next.val) {
            // Skip the next node by linking the current node to the node after the next
            curr.next = curr.next.next;
        } else {
            // Otherwise, move to the next node
            curr = curr.next;
        }
    }
    
    return dummy;  // Return the head of the modified list
};