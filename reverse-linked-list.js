// Reverse Linked List

// Time Complexity - O(n)

var reverseList = function(head) {
    // If the list is empty, return null.
    if (!head) {
        return null;
    }

    let prev = null;  // Initialize the previous pointer to null.
    let curr = head;  // Start the current pointer at the head of the list.

    // Traverse the list until the current node is null.
    while (curr !== null) {
        const next = curr.next; // Store the next node temporarily.
        curr.next = prev;       // Reverse the current node's pointer to the previous node.
        prev = curr;            // Move the previous pointer to the current node.
        curr = next;            // Move the current pointer to the next node.
    }

    // At the end, prev will be the new head of the reversed list.
    return prev;
};