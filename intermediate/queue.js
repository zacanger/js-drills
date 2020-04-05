// Implement a basic queue

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
 */

const Queue = function () {
  this.storage = {}
  this.everAdded = 0
  this.frontIndex = 0
  this.currentSize = 0
}

Queue.prototype.enqueue = function (val) {
  this.storage[this.everAdded] = val
  this.everAdded++
  this.currentSize++
}

Queue.prototype.dequeue = function () {
  if (this.currentSize > 0) {
    this.currentSize--
  }
  const res = this.storage[this.frontIndex]
  delete this.storage[this.frontIndex]
  this.frontIndex++
  return res
}

Queue.prototype.size = function () {
  return this.currentSize
}

//
const Q = () => {
  const instance = {}
  const storage = {}
  let front = 0
  let back = 0

  instance.size = () => back - front

  instance.enqueue = (val) => {
    storage[back++] = val
  }

  instance.dequeue = () => {
    instance.size() && front++
    const res = storage[front]
    delete storage[front]
    return res
  }

  return instance
}

// with a class
class Queue {
  constructor() {
    this.list = []
    this.length = 0
  }

  enqueue(v) {
    this.length++
    this.list.push(v)
  }

  dequeue() {
    if (this.length === 0) return
    this.length--
    return this.list.shift()
  }

  peek() {
    return this.list[0]
  }
}
