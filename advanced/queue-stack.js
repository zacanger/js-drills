// write a stack
// avoid native array methods
// then implement a queue using two of your stacks

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
 */

function Stack() {
  const storage = []
  let length = 0
  this.push = function () {
    storage[length] = arguments[0]
    length++
  }
  this.pop = function () {
    if (length) {
      const result = storage[length - 1]
      delete storage[length - 1]
      length--
      return result
    }
  }
  this.size = function () {
    return length
  }
}

function Queue() {
  const inbox = new Stack()
  const outbox = new Stack()
  this.enqueue = function () {
    inbox.push.apply(arguments)
  }
  this.dequeue = function () {
    if (outbox.size() === 0) {
      while (inbox.size() !== 0) {
        outbox.push(inbox.pop())
      }
    }
    return outbox.pop()
  }
  this.size = function () {
    return inbox.size() + outbox.size()
  }
}
