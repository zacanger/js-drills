// write a function that generates an array of fibonacci numbers
// the length of the array should be user selectable

// bonus: the function should let the user select fibonacci, tribonacci, etc..., as well as length
// bonus: make it recursive
// fib(11,2) would give [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ] (first 11 fib #'s)
// fib(11,3) would give [ 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149 ] (first 11 trib #'s)

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
 */

function nFib (len, n, res) {
  var temp = n
  if (!arguments[2]) {
    res = [0, 1]
  }
  if (len === res.length) {
    return res
  }
  if (n > res.length) {
    temp = res.length
  }
  var pushArr = 0
  for (var i = res.length - 1; i > res.length - temp - 1; i--) {
    pushArr += res[i]
  }
  res.push(pushArr)
  return nFib(len, n, res)
}

function fib (len, res) {
  if (!arguments[1]) {
    res = [0, 1]
  }
  if (len === res.length) {
    return res
  }
  res.push(res[res.length - 1] + res[res.length - 2])
  return fib(len, res)
}
