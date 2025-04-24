const TreeNode = require('./../TreeNode');
const { test } = require('./../test');

class Solution {
    traverse(root) {
        const result = [];
        const queue = [];
        queue.push(root);
        while (queue.length > 0) {
            const levelLength = queue.length;
            const currentLevel = [];
            for (let i = 0; i < levelLength; i++) {
                let node = queue.shift();
                currentLevel.push(node.value);
                if (node.left != null) {
                    queue.push(node.left);
                }
                if (node.right != null) {
                    queue.push(node.right);
                }
            }
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

test(
    'should return [[12], [7, 1], [9, 10, 5]]',
    s.traverse(root),
    [[12], [7, 1], [9, 10, 5]]
);

const root2 = new TreeNode(1);
root2.left = new TreeNode(2); 
root2.right = new TreeNode(3); 
root2.left.left = new TreeNode(4); 
root2.left.right = new TreeNode(5); 
root2.right.left = new TreeNode(6); 
root2.right.right = new TreeNode(7); 

test(
    'should return [[1], [2, 3], [4, 5, 6, 7]]',
    s.traverse(root2),
    [[1], [2, 3], [4, 5, 6, 7]]
);
