// Remove Linked List Elements

// Time Complexity: O(n)

var removeElements = function(head, val) {
    let dummy = new ListNode();  // Create a dummy node to act as the new head of the list
    let curr = dummy;  // Initialize 'curr' to point to the dummy node
    let list = head;  // 'list' points to the current node in the original list
    
    // Traverse the original list
    while (list !== null) {
        // If the current node's value is not equal to the target value
        if (list.val !== val) {
            curr.next = list;  // Append the current node to the new list
            curr = curr.next;  // Move 'curr' to the newly added node
        }
        // Move to the next node in the original list
        list = list.next;
    }
    
    // Ensure the last node in the new list does not point to any removed elements
    curr.next = null;
    
    return dummy.next;  // Return the new list, starting from the node after the dummy node
};