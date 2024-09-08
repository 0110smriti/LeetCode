// Delete nodes from linked list present in an array

// Time Complexity - O(n + m) [size of linked list + array]

var modifiedList = function(nums, head) {
    // Create a set from the 'nums' array for quick lookup of values to remove.
    let set_nums = new Set(nums);
    
    // Initialize two pointers: 'curr' to traverse the list, and 'prev' to keep track of the previous node.
    let curr = head;
    let prev = head;
    
    // Initialize 'new_head' to track the new head of the modified list.
    let new_head = null;

    // Traverse the linked list.
    while(curr != null) {
        // If the current node's value is in 'set_nums', remove it from the list.
        if(set_nums.has(curr.val)) {
            curr = curr.next;  // Move the 'curr' pointer forward.
            prev.next = curr;   // Link the previous node to the new current node, effectively skipping the current node.
        } else {
            // If 'new_head' is not set, initialize it to the current node.
            if(new_head === null) {
                new_head = curr;
            }
            // Move the 'prev' pointer to the current node and advance 'curr' to the next node.
            prev = curr;
            curr = curr.next;
        }
    }
    
    // Return the new head of the modified list.
    return new_head;
};
