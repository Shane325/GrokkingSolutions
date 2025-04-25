const TreeNode = require('./../TreeNode');
const { test } = require('./../test');

class Solution {
    connectSiblings(root) {
        const queue = [];
        queue.push(root);
        while (queue.length > 0) {
            const levelLength = queue.length;
            let prev = null;
            for (let i = 0; i < levelLength; i++) {
                let node = queue.shift();
                if (prev != null) {
                    prev.next = node;
                }
                prev = node;
                if (node.left != null) {
                    queue.push(node.left);
                }
                if (node.right != null) {
                    queue.push(node.right);
                }
            }
            prev.next = null;
        }
        return root.next;
    }
}

const s = new Solution();

let root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

test(
    'should return null',
    s.connectSiblings(root),
    null
);
