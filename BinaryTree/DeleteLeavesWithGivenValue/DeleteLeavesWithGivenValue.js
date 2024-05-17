if (!root ) return null
    root.left = removeLeafNodes(root.left, target)
    root.right = removeLeafNodes(root.right, target)
    if (root.val === target && !root.left && !root.right) {
        return null
    }
    return root