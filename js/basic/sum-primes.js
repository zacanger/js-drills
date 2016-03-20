// write a function that sums all the prime numbers
// below what you pass to it. example:
// sumPrimes(10) // => 17

function sumPrimes (num) {
  function isPrime (number) {
    for (var current = number - 1; current > 1; current--) {
      if (number % current === 0) {
        return false
      }
    }
    return true
  }

  var arr = []
  var counter = 0
  for (var i = num; i > 1; i--) {
    if (isPrime(i)) {
      arr.push(i)
    }
  }
  return arr.reduce(function (a, b) {
    return a + b
  })
}

