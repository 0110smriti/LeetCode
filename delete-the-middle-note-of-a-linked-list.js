// Delete the middle node of a linked list

// Time complexity - O(N)

var deleteMiddle = function(head) {
    // If the list has only one node, set head to null and return it
    if (head.next == null) {
        head = null;
        return head;
    }

    let fast = head;  // Initialize fast pointer to start at the head
    let slow = head;  // Initialize slow pointer to start at the head
    let prev = head;  // Initialize prev pointer to keep track of the node before slow

    // Traverse the list with the fast and slow pointers
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;  // Move fast pointer two steps at a time
        prev = slow;  // Move prev pointer to the current position of slow
        slow = slow.next;  // Move slow pointer one step at a time
    }

    // At this point, slow is pointing to the middle node, and prev is the node before it
    prev.next = slow.next;  // Remove the middle node by linking prev to slow's next node

    return head;  // Return the modified list
};