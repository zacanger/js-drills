// Given an array of numbers, return the list so that the values
// increment by 1 for each index up to the maximum value. Example:
// Input: 3,5,6,7,8
// Output: 3,4,5,6,7,8
// Assume the array will be sorted.

function fillInTheArray (numbers) {
  var
    first = numbers[0]
  var last = numbers[numbers.length - 1]
  var arr = []

  for (var i = first; i <= last; i++) {
    arr.push(i)
  }
  return arr
}
