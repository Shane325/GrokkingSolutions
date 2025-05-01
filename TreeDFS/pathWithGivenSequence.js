const TreeNode = require('./../TreeNode');
const { test } = require('./../test');

class Solution {
    findPath(root, sequence) {
        return this.findSequence(root, sequence, 0);
    }

    findSequence(node, sequence, idx) {
        if (node === null) {
            return false;
        }
        if (idx >= sequence.length || node.value !== sequence[idx]) {
            return false;
        }
        if (node.left === null && node.right === null && idx === sequence.length - 1) {
            return node.value === sequence[idx];
        }

        return this.findSequence(node.left, sequence, idx + 1) || this.findSequence(node.right, sequence, idx + 1);
    }
}

const s = new Solution();
const root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);

test(
    'should return false',
    s.findPath(root, [1, 0, 7]),
    false
);

test(
    'should return true',
    s.findPath(root, [1, 1, 6]),
    true
);
