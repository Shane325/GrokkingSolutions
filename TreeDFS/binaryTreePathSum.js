const TreeNode = require('./../TreeNode');
const { test } = require('./../test');

class Solution {
    hasPath(root, sum) {
        if (root === null) {
            return false;
        }
        if (root.left === null && root.right === null) {
            return root.value === sum;
        }

        return this.hasPath(root.left, sum - root.value) || this.hasPath(root.right, sum - root.value);
    }
}

const s = new Solution();

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

test(
    'should return true',
    s.hasPath(root, 23),
    true
);

test(
    'should return false',
    s.hasPath(root, 16),
    false
);
