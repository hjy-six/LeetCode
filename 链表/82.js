var deleteDuplicates = function(head) {
    const dummy = new ListNode(0, head);
    let cur = dummy;
    while (cur.next && cur.next.next) {
        let val = cur.next.val;
        if (cur.next.next.val === val) { // 后两个节点值相同
            // 值等于 val 的节点全部删除
            while (cur.next && cur.next.val === val) {
                cur.next = cur.next.next;
            }
        } else {
            cur = cur.next;
        }
    }
    return dummy.next;
};

