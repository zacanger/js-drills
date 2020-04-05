// implement a hash table using a class
// it doesn't need to worry about collisions
// it should have hashing, get, set, and remove methods

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
 */

export default class HashTable {
  constructor() {
    this.memory = []
  }

  hashKey(k) {
    let hash = 0
    for (let i = 0; i < k.length; i++) {
      const code = k.charCodeAt(i)
      hash = ((hash << 5) - hash + code) | 0
    }
    return hash
  }

  get(k) {
    const addr = this.hashKey(k)
    return this.memory[addr]
  }

  set(k, v) {
    const addr = this.hashKey(k)
    this.memory[addr] = v
  }

  remove(k) {
    const addr = this.hashKey(k)
    if (this.memory[addr]) {
      delete this.memory[addr]
    }
  }
}
