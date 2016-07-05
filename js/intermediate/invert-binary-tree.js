// invert a binary tree

const invertTree = tree => {
  if (tree) {
    if (tree.left || tree.right) {
      let tmp    = tree.left
      tree.left  = tree.right
      tree.right = tmp
      invertTree(tree.left)
      invertTree(tree.right)
    }
  }
}
