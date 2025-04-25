class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        // Only used in the level order siblings problem
        this.next = null;
    }
}

module.exports = TreeNode;
