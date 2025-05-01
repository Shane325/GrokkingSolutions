const TreeNode = require('./../TreeNode');
const { test } = require('./../test');

class Solution {
    sumOfNums(root) {
        return this.getSum(root, 0);
    }

    getSum(root, sum) {
        if (root === null) {
            return 0;
        }
        sum = sum * 10 + root.value;
        if (root.left === null && root.right === null) {
            return sum;
        } 
        return this.getSum(root.left, sum) + this.getSum(root.right, sum);
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
    'should return 332', 
    s.sumOfNums(root),
    332
);
