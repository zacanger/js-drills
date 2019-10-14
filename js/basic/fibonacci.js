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
