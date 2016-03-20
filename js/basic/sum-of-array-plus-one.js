// Write a function that takes an array of integers and returns the sum of the
// integers after adding 1 to each. || plusOneSum([1, 2, 3, 4]) // 14

var plusOneSum = function(arr) {
  var newArr = arr.slice()
  var sum = 0
  for (var i = 0; i < newArr.length; i++) {
    sum += (newArr[i] + 1)
  }
  return sum
}

var plus = function(arr) {
  var total = arr.reduce(function(a, b) {
    return a + b
  })
  return total += arr.length
}

function plusOneSum(arr) {
  return arr.reduce(function(a, b) {
    return a + ++b
  }, 0)
}

