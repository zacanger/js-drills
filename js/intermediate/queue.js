// Implement a basic queue

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
