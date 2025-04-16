const Node = require('./../Node');
const { test } = require('./../test');

class Solution {
    findCycle(head) {
        let p1 = head;
        let p2 = head;
        while(p2 != null && p2.next != null) {
            p2 = p2.next.next;
            p1 = p1.next;
            if (p1 === p2) {
                break;
            }
        }
        let length = 0;
        while(true) {
            p2 = p2.next;
            length++;
            if (p1 === p2) {
                break;
            }
        }
        p1 = head;
        p2 = head;
        while(length > 0) {
            p2 = p2.next;
            length--;
        }
        while(p1 != p2) {
            p1 = p1.next;
            p2 = p2.next;
        }
        return p1.value;
    }
}

const s = new Solution();
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

head.next.next.next.next.next.next = head.next.next;

test(
    'should return 3',
    s.findCycle(head),
    3
);

head.next.next.next.next.next.next = head.next.next.next;

test(
    'should return 4',
    s.findCycle(head),
    4
);

head.next.next.next.next.next.next = head;

test(
    'should return 1',
    s.findCycle(head),
    1
);
