// write a function that that takes a number and returns
// its factorial. example:
// `factorial(4)` // => 24 (4 * 3 * 2 * 1 = 24)

function factorial (num) {
  if (num < 0) {
    return -1
  } else if (num === 0) {
    return 1
  } else {
    console.log(num)
    return (num * factorial(num - 1))
  }
}


var factorial = function (n) {
  if (result < 2) {
    return 1
  }
  var result = 1
  for (var i = 2; i <= n; i++) {
    result *= i
  }
  return result
}

function factorial (num) {
  if (num === 1) {
    return 1
  } else if (num === 0 || num < 0) {
    return 0
  }
  return num * factorial(num - 1)
}

