// create an object called iterable
// iterable has two methods
//
// @[Symbol.iterator]
// returns an object with a next method
// takes array given from set method
// and returns the square of them when
// the next method is called

// @set
// takes an arbirary amount of numbers (not an array)
// stores them for use with the iterator

// code goes here
const iterable = {
  nums: [],
  set(...nums) {
    this.nums = nums
  },
  [Symbol.iterator]() {
    let count = 0
    const self = this
    return {
      next() {
        const ans = {
          done: count >= self.nums.length,
          value: count < self.nums.length ? self.nums[count] * self.nums[count] : undefined
        }
        count++
        return ans
      }
    }
  }
}
