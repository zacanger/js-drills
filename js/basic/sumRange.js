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

function range (start, end, step) {
  var arr = []
  if (step < 0) {
    for (var i = start; i >= end; acum) {
      arr.push(i)
      var acum = (typeof step !== 'undefined') ? i += step : i++
    }
  } else {
    var acum = 0
    for (var i = start; i <= end; acum) {
      arr.push(i)
      var acum = (typeof step !== 'undefined') ? i += step : i++
    }
  }
  return arr
}

function sum (arr) {
  console.log(arr)
  var count = 0
  for (var i = 0; i < arr.length; i++) {
    count += arr[i]
  }
  return count
}
