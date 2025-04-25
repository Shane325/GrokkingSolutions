const TreeNode = require('./../TreeNode');
const { test } = require('./../test');

class Solution {
    zigzag(root) {
        const result = [];
        const queue = [];
        queue.push(root);
        let leftToRight = true;
        while (queue.length > 0) {
            const levelLength = queue.length;
            const currentLevel = [];
            for (let i = 0; i < levelLength; i++) {
                let node = queue.shift();
                if (leftToRight) {
                    currentLevel.push(node.value);
                } else {
                    currentLevel.unshift(node.value);
                }
                if (node.left != null) {
                    queue.push(node.left);
                }
                if (node.right != null) {
                    queue.push(node.right);
                }
            }
            leftToRight = !leftToRight;
            result.push(currentLevel);
        }

        return result;
    }
}

const s = new Solution();

const root = new TreeNode(12);
root.left = new TreeNode(7); 
root.right = new TreeNode(1); 
root.left.left = new TreeNode(9); 
root.right.left = new TreeNode(10); 
root.right.right = new TreeNode(5); 
root.right.left.left = new TreeNode(20); 
root.right.left.right = new TreeNode(17); 

test(
    'should return [[12], [1, 7], [9, 10, 5], [17, 20]]',
    s.zigzag(root),
    [[12], [1, 7], [9, 10, 5], [17, 20]]
);

const root2 = new TreeNode(1);
root2.left = new TreeNode(2); 
root2.right = new TreeNode(3); 
root2.left.left = new TreeNode(4); 
root2.left.right = new TreeNode(5); 
root2.right.left = new TreeNode(6); 
root2.right.right = new TreeNode(7); 
root2.left.left.left = new TreeNode(8); 
root2.left.left.right = new TreeNode(9); 
root2.left.right.left = new TreeNode(10); 
root2.left.right.right = new TreeNode(11); 

test(
    'should return [[1], [3, 2], [4, 5, 6, 7], [11, 10, 9, 8]]',
    s.zigzag(root2),
    [[1], [3, 2], [4, 5, 6, 7], [11, 10, 9, 8]]
);

