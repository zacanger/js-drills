// implement Set
// it should have add, contains, and remove methods

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
 */

const setPrototype = {}

const Set = function () {
  const set = Object.create(setPrototype)
  set._storage = []
  return set
}

setPrototype.add = function (a) {
  if (!this._storage.includes(a)) {
    this._storage.push(a)
  }
}

setPrototype.contains = function (a) {
  return this._storage.indexOf(a) > -1
}

setPrototype.remove = function (a) {
  const i = this._storage.indexOf(a)
  this._storage.splice(i, 1)
}

//
class Set {
  constructor () {
    this.storage = []
  }

  add (a) {
    if (!this.storage.includes(a)) {
      this.storage.push(a)
    }
  }

  contains (a) {
    return this.storage.includes(a)
  }

  remove (a) {
    this.storage.splice(this.storage.indexOf(a), 1)
  }
}

// how imperative can you get?
function findIndex (items, size, item) {
  for (let i = 0; i <= size; i++) {
    if (items[i] === item) {
      return i + 1
    }
  }
  return null
}

function Set () {
  this.size = 0
  this.items = []
}

Set.prototype.add = function (item) {
  this.items[this.size] = item
  this.size++
}

Set.prototype.isEmpty = function () {
  return this.size <= 0
}

Set.prototype.contains = function (item) {
  if (findIndex(this.items, this.size, item)) {
    return true
  }
  return false
}

Set.prototype.remove = function (item) {
  let index = findIndex(this.items, this.size, item)
  let tempSet = []

  if (index) {
    let i = 0
    index--
    while (i < index) {
      tempSet[i] = this.items[i]
      i++
    }

    for (let j = index + 1; j < this.size; j++) {
      tempSet[i] = this.items[j]
      i++
    }

    this.items = tempSet
    this.size--
  }
}
