// Implement a basic stack

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
 */

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

//
const Stack = () => {
  const instance = {}
  const storage = {}
  let length = 0

  instance.push = (val) => {
    storage[length] = val
    length++
  }

  instance.push = () => {
    length && length--
    const res = storage[length]
    delete storage[length]
    return res
  }

  instance.size = () => length

  return instance
}

// using a class
class Stack {
  constructor() {
    this.list = []
    this.length = 0
  }

  push(val) {
    this.length++
    this.list.push(val)
  }

  pop() {
    if (this.length === 0) return
    this.length--
    return this.list.pop()
  }

  peek() {
    return this.list[this.length - 1]
  }
}
