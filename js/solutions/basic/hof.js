// Write a function that takes a function and a number n,
// and runs the given function n times.

const runNTimes = (fn, n) => {
  if (n <= 0) return
  if (typeof fn !== 'function') throw new TypeError('Fn must be a function!')
  return runNTimes(fn, --n)
}
