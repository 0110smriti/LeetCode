// Merge Two Sorted Lists

// Time Complexity - O(n)

var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode();  // Create a dummy node to serve as the start of the merged list
    let cur = dummy;  // Initialize a pointer 'cur' to track the current position in the merged list

    // Traverse both lists while both have nodes remaining
    while (list1 && list2) {
        // Compare the values of the current nodes in both lists
        if (list1.val > list2.val) {
            cur.next = list2;  // If list2's value is smaller, append list2's node to the merged list
            list2 = list2.next;  // Move to the next node in list2
        } else {
            cur.next = list1;  // If list1's value is smaller or equal, append list1's node to the merged list
            list1 = list1.next;  // Move to the next node in list1
        }
        cur = cur.next;  // Move the 'cur' pointer to the next position in the merged list
    }

    // At this point, one of the lists is exhausted. Attach the remaining nodes from the other list.
    cur.next = list1 || list2;

    return dummy.next;  // Return the merged list, starting from the node after the dummy node
};