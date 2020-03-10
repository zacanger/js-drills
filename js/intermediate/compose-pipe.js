// write compose and pipe functions
// compose should return a function that is the composition
// of a list of functions, right to left
// pipe should return the a function that is the result
// of a series of functions called on the result of the previous
// function, left to right

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
 */

function compose() {
  const args = Array.prototype.slice.call(arguments)
  return function(val) {
    return args.reduceRight(function(memo, func) {
      return func(memo)
    }, val)
  }
}

function pipe() {
  const args = Array.prototype.slice.call(arguments)
  return function(val) {
    return args.reduce(function(memo, func) {
      return func(memo)
    }, val)
  }
}
