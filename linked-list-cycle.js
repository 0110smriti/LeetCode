// Linked List Cycle

// Use Floyd's cycle detection algorithm (Hare Tortoise Algorithm)
// Assign two pointers to head
// fast and slow
// move fast by two steps
// move slow by 1 step
// if fast.next reaches null, there's no cycle
// if at some point, fast and slow become same, there's a cycle

var hasCycle = function(head) {
    let fast = head;
    let slow = head;
    while(fast != null && slow.next !=null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
        if(fast === slow) {
            return true;
        }
    }
    return false;
};