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
