// mapping parseInt over an array will lead to some funky results.
const a = ['10', '10', '10']
a.map(parseInt) // [10, NaN, 2]
// fix this so it does what you'd expect!

a.map(n => parseInt(n, 10))
// or in old js:
a.map(function (n) {
  return parseInt(n, 10)
})
