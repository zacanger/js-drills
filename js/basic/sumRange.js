// get the sum of a range of numbers

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
 */

function range(start, end, step) {
  const arr = []
  if (step < 0) {
    for (var i = start; i >= end; acum) {
      arr.push(i)
      var acum = typeof step !== 'undefined' ? (i += step) : i++
    }
  } else {
    var acum = 0
    for (var i = start; i <= end; acum) {
      arr.push(i)
      var acum = typeof step !== 'undefined' ? (i += step) : i++
    }
  }
  return arr
}

function sum(arr) {
  console.log(arr)
  let count = 0
  for (const element of arr) {
    count += element
  }
  return count
}
