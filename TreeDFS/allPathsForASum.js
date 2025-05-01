const TreeNode = require('./../TreeNode');
const { test } = require('./../test');

class Solution {
    allPaths(root, s) {
        const allPaths = [];
        this.getPaths(root, s, allPaths, []);
        return allPaths;
    }

    getPaths(root, s, allPaths, currentPath) {
        if (root === null) {
            return;
        }
        currentPath.push(root.value);
        if (root.left === null && root.right === null && root.value === s) {
            allPaths.push([...currentPath]);
        } else {
            this.getPaths(root.left, s - root.value, allPaths, currentPath);
            this.getPaths(root.right, s - root.value, allPaths, currentPath);
        }
        currentPath.pop();
    }
}

const s = new Solution();
const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);

test(
    'should return [[12, 7, 4], [12, 1, 10]]',
    s.allPaths(root, 23),
    [[12, 7, 4], [12, 1, 10]]
);

