// Write a function that accepts a number, n, and returns the nth Fibonacci
// number. Use an interative solution to this problem; if you finish with
// time left over, implement a recursive solution.
// * nthFibonacci(2); // => 2
// * nthFibonacci(3); // => 3
// * nthFibonacci(4); // => 5

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
 *
 *
 *
 *
 *
 *
 */

// iterative
function fibIt(n) {
  const arr = [0, 1]
  for (let i = 2; i <= n + 1; i++) {
    arr.push(arr[i - 1] + arr[i - 2])
    if (i === n + 1) {
      return arr[i]
      break
    }
  }
}

// recursive
function fibRec(n) {
  return n < 2 ? n : fibRec(n - 2) + fibRec(n - 1)
}
