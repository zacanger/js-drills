// implement a tree

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
 *
 */

export class Tree {
  constructor () {
    this.root = null
  }

  traverse (cb) {
    function walk (node) {
      cb(node)
      node.children.forEach(walk)
    }
    walk(this.root)
  }

  add (val, parentVal) {
    const newNode = {
      value: val,
      children: []
    }
    if (this.root === null) {
      this.root = newNode
      return
    }
    this.traverse((node) => {
      if (node.value === parentVal) {
        node.children.push(newNode)
      }
    })
  }
}
