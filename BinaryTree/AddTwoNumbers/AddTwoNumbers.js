var addTwoNumbers = function (l1, l2) {
    const nor = new ListNode();
    let count = 0;
    let cur = nor;
    while (l1 || l2 || count) {
        const s = (l1?.val || 0) + (l2?.val || 0) + count;
        count = Math.floor(s / 10);
        cur.next = new ListNode(s % 10);
        cur = cur.next;
        l1 = l1?.next;
        l2 = l2?.next;
    }
    return nor.next;
};