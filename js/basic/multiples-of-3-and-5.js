// If we list all the natural numbers below 10 that are multiples
// of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

function threeAndFive(limit) {
  var sum = 0
  for (var i = 0; i < limit; i++) {
    if (!(i % 3) || !(i % 5)) {
      sum += i
    }
  }
  return sum
}

// threeAndFive(1000);
// Should return 233168

