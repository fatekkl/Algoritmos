/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head==null || head.next==null) return 0;
    let fast = head;
    while(fast.next!=null && fast.next.next!=null) {
        head = head.next;
        fast = fast.next.next;
        if(head==fast) return 1;
    }
    return 0;
};