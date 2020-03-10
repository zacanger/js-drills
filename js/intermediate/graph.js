// implement a basic graph using a class
// it should have addNode, find, and addLine methods

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
 *
 *
 *
 */

export default class Graph {
  constructor() {
    this.nodes = []
  }

  addNode(value) {
    this.nodes.push({
      value,
      lines: [],
    })
  }

  find(value) {
    return this.nodes.find((node) => node.value === value)
  }

  addLine(start, end) {
    const startNode = this.find(start)
    const endNode = this.find(end)
    if (!startNode || !endNode) {
      throw new Error('Need both nodes.')
    }
    startNode.lines.push(endNode)
  }
}
