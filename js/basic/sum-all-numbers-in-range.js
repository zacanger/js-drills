function sumAll (arr) {
  var sum = 0
  console.log('NEW ---------------')
  var max = arr.reduce(function (a, b) {
    return Math.max(a, b)
  })
  var min = arr.reduce(function (a, b) {
    return Math.min(a, b)
  })
  console.log(max)
  console.log(min)
  for (var i = min; i <= max; i++) {
    sum += i
  }
  return sum
}

sumAll([1, 4])
