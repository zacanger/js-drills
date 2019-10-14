// write a function that finds the common factors of two numbers,
// and returns them sorted from highest to lowest.
// example with 12 and 18:
// factors of 12 are 12, 6, 4, 3, 2, 1
// factors of 18 are 18, 9, 6, 3, 2, 1
// so the common factors of 12 and 18 are 6, 3, 2, 1
// another example: console.log(commonFactors(20, 25)) // => [5, 1]

function commonFactors (num1, num2) {
  var factors = []
  var max
  if (num1 > num2) {
    max = num1
  } else {
    max = num2
  }
  for (var i = max; i >= 1; i--) {
    if ((num1 % i) === (num2 % i)) {
      factors.push(i)
    }
  }
  return factors
}
