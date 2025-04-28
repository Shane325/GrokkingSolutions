const TreeNode = require('./../TreeNode');
const { test } = require('./../test');

class Solution {
    getMinSum(root) {
        if (root === null) {
            return Infinity;
        }

        if (root.left === null && root.right === null) {
            return root.value;
        }

        return root.value + Math.min(this.getMinSum(root.left), this.getMinSum(root.right));
    }
}

const s = new Solution();

const root1 = new TreeNode(10);
root1.left = new TreeNode(5);
root1.right = new TreeNode(15);
root1.right.left = new TreeNode(7);
root1.right.right = new TreeNode(20);

test(
    'should return 15',
    s.getMinSum(root1),
    15
);

const root2 = new TreeNode(-1);
root2.left = new TreeNode(2);
root2.right = new TreeNode(3);
root2.left.left = new TreeNode(4);
root2.left.right = new TreeNode(5);
root2.right.left = new TreeNode(1);

test(
    'should return 3',
    s.getMinSum(root2),
    3
);

const root3 = new TreeNode(8);
root3.left = new TreeNode(40);
root3.right = new TreeNode(12);
root3.right.left = new TreeNode(10);
root3.right.right = new TreeNode(18);
root3.right.left.left = new TreeNode(2);

test(
    'should return 32',
    s.getMinSum(root3),
    32
);
