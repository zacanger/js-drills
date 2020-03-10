// Given a binary search tree root, count the total number of nodes in the tree.

/*
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

function BSTNode(value) {
  this.value = value
  this.left = null
  this.right = null
}

function countNodes(root) {
  if (!root) {
    return 0
  }
  return countNodes(root.left) + 1 + countNodes(root.right)
}
