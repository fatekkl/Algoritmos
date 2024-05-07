/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var doubleIt = function (head) {
    let currentVal = [];
    let p1 = head;
    while (p1 != null) {
        currentVal.push(p1.val);
        p1 = p1.next;
    }
    let doubledVal = [];
    let carry = 0;
    for (let i = currentVal.length - 1; i >= 0; i--) {
        let m = currentVal[i] * 2 + carry;
        doubledVal.push((m % 10));
        carry = Math.floor(m / 10);
    }
    if (carry > 0) doubledVal.push(carry);
    doubledVal = doubledVal.reverse();
    let ansList = new ListNode(doubledVal[0]);
    p1 = ansList;
    for (let i = 1; i < doubledVal.length; i++) {
        let node = new ListNode(doubledVal[i]);
        p1.next = node;
        p1 = p1.next;
    }
    return ansList;
};