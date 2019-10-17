// implement a list, using a class
// this is just a representation of
// an ordered sequence of values
// where the same value can appear multiple times
// it should have `get`, `push`, `pop`, `shift`, and
// `unshift` methods

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
 */

export default class List {
  constructor () {
    this.memory = []
    this.length = 0
  }

  get (addr) {
    return this.memory[addr]
  }

  push (val) {
    this.memory[this.length] = val
    this.length++
  }

  pop () {
    if (this.length === 0) return
    const last = this.length - 1
    const val = this.memory[last]
    delete this.memory[last]
    this.length--
    return val
  }

  unshift (val) {
    let prev = val
    for (let addr = 0; addr < this.length; addr++) {
      const curr = this.memory[addr]
      this.memory[addr] = prev
      prev = curr
    }
    this.memory[this.length] = prev
    this.length++
  }

  shift () {
    if (this.length === 0) return
    const val = this.memory[0]
    for (let addr = 0; addr < this.length; addr++) {
      this.memory[addr] = this.memory[addr + 1]
    }
    delete this.memory[this.length - 1]
    this.length--
    return val
  }
}
