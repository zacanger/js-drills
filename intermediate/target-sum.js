// Given an array of integers and a target integer `sum`, return whether there
// exist a pair of integers in the array which add up to `sum`.

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

function canMakeSum(array, targetSum) {
  array.sort()

  let left = 0
  let right = array.length - 1

  while (left < right) {
    const currentSum = array[left] + array[right]
    if (currentSum < targetSum) {
      left++
    } else if (currentSum > targetSum) {
      right--
    } else {
      return true
    }
  }

  return false
}

console.log(canMakeSum([-1, -2, 5, 0], -1))
console.log(canMakeSum([-1, -2, 5, 0], 6))
console.log(canMakeSum([], 6))
