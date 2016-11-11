// Implement a basic stack

const Stack = function () {
  this.storage = {}
  this.currentSize = 0
}

Stack.prototype.push = function (val) {
  this.storage[this.currentSize] = val
  this.currentSize++
}

Stack.prototype.pop = function () {
  if (this.currentSize > 0) {
    this.currentSize--
  }
  const res = this.storage[this.currentSize]
  delete this.storage[this.currentSize]
  return res
}

Stack.prototype.size = function () {
  return this.currentSize
}
