const Node = require('./../Node');
const { test } = require('./../test');

class Solution {
    hasCycle(head) {
        let fast = head;
        let slow = head;
        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
            if (fast === slow) {
                return true;
            }
        }
        return false;
    }
}

const s = new Solution();
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

test(
    'should return false',
    s.hasCycle(head),
    false
);

head.next.next.next.next.next.next = head.next.next;

test(
    'should return true',
    s.hasCycle(head),
    true
);

head.next.next.next.next.next.next = head.next.next.next;

test(
    'should return true',
    s.hasCycle(head),
    true
);

head.next.next.next.next.next.next = null;

test(
    'should return false',
    s.hasCycle(head),
    false
);
