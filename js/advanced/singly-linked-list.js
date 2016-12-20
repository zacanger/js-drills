// implement a singly-linked list
const createNode = (val) => {
  const node = {}
  node.value = val
  node.next = null
  return node
}

const SinglyLinkedList = function () {
  this.head = null
  this.tail = null
  this.currentSize = 0
}

SinglyLinkedList.prototype.addToTail = function (val) {
  const node = createNode(val)
  if (!this.head) {
    this.head = node
    this.tail = node
  } else {
    this.tail.next = node
    this.tail = node
    this.currentSize++
  }
}

SinglyLinkedList.prototype.removeHead = function () {
  if (!this.head) return null
  if (this.currentSize > 0) this.currentSize--
  const removedHead = this.head
  if (this.head === this.tail) this.tail = null
  delete this.head
  this.head = removedHead.next
  return removedHead.next
}

SinglyLinkedList.prototype.contains = function (tar) {
  let node = this.head
  if (node.value === tar) return node
  while (node.next) {
    node = node.next
    if (node.value === tar) return node
  }
  return false
}

SinglyLinkedList.prototype.size = function () {
  return this.currentSize
}

//
const Node = (val) => {
  const n = {}
  n.value = val
  n.next = null
  return n
}
const LL = () => {
  const list = {}
  list.head = null
  list.tail = null

  list.addToTail = (val) => {
    if (list.head === null) {
      list.head = Node(val)
      list.tail = list.head
    } else {
      list.tail.next = Node(val)
      list.tail = list.tail.next
    }
  }

  list.removeHead = () => {
    const tmp = list.head.value
    list.head = list.head.next
    return tmp
  }

  list.contains = (tgt) => {
    let cur = list.head

    while (cur) {
      if (cur.value === tgt) return true
      cur = cur.next
    }
    return false
  }
  return list
}
