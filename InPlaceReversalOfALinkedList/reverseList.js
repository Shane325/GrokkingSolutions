const Node = require('./../Node');
const { test } = require('./../test');

class Solution {
    reverseList(head) {
        let prev = null;
        while(head != null) {
            let next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }
        return prev.value;
    }
}

const s = new Solution();

const head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

test(
    'should return 10',
    s.reverseList(head),
    10
);

const head2 = new Node(12);
head2.next = new Node(400);
head2.next.next = new Node(8);
head2.next.next.next = new Node(1);
head2.next.next.next.next = new Node(99);

test(
    'should return 99',
    s.reverseList(head2),
    99
);
