// Implement a stack which keeps track of its minimum value.
// Challenge: can you keep the operation time complexity to `O(1)`?
// Hint: Try using some extra space. What data structure might work for keeping track of minimums?

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
 *
 */

function Stack() {
  this.valueStack = []
  this.minimumStack = []
}

Stack.prototype.getMinimum = function () {
  return this.minimumStack.length === 0
    ? null
    : this.minimumStack[this.minimumStack.length - 1]
}

Stack.prototype.peek = function () {
  return this.valueStack[this.valueStack.length - 1]
}

Stack.prototype.push = function (item) {
  this.valueStack.push(item)

  const currentMin =
    this.minimumStack.length > 0
      ? this.minimumStack[this.minimumStack.length - 1]
      : item

  if (item < currentMin) {
    this.minimumStack.push(item)
  } else {
    this.minimumStack.push(currentMin)
  }
}

Stack.prototype.pushAll = function (items) {
  items.forEach(function (item) {
    this.push(item)
  }, this)
}

const stack = new Stack()
stack.pushAll([1, 2, 3, 5, 0])
console.log(stack.getMinimum())
