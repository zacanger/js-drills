// implement Set
// it should have add, contains, and remove methods

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
