// the same rock-paper-scissors problem.
// this solution uses recursion.

function prepend (item) {
  return (array) => {
    return [item].concat(array)
  }
}

function rps (n) {
  if (n === 0) {
    return [[]]
  }
  var rpsNMinusOne = rps(n - 1) // avoid doing rps(n - 1) three times
  return rpsNMinusOne.map(prepend('rock'))
    .concat(rpsNMinusOne.map(prepend('paper')),
      rpsNMinusOne.map(prepend('scissors')))
}
