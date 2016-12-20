// implement Set
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
