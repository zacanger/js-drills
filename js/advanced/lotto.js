// Part one:
// Create a function that will return an array of six randomly generated
// numbers that are between 1 and 60.

// Part two:
// Create a function that will use setTimeout to console.log each number in
// the generated array in a dramatic fashion. For example, have the function
// console.log each number in the array every two seconds. Maybe the last
// number, or powerball, after an extra few seconds to make it extra dramatic.

// Part three (black diamond):
// Use clearTimeout in some way. Maybe build some functionality that will allow
// you to stop all the setTimeouts, like if there was an urgent news bulletin
// that interrupted the powerball drawing. Or, have an option to that will allow
// you to be able to console.log each item in the lotto array without waiting
// for the setTimeout.

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
 */

function lottoGenerator () {
  var arr = []
  function rando (lot) {
    var ran = Math.floor(Math.random() * (60 - 1 + 1)) + 1
    if (lot.indexOf(ran) !== -1) {
      return rando(lot)
    } else {
      return ran
    }
  }
  for (var i = 0; i < 6; i++) {
    var ran = rando(arr)
    arr.push(ran)
  }
  return arr
}

function revealLotto (lottoArr, optOut) {
  if (optOut) {
    return lottoArr
  }
  var timeoutArr = []
  lottoArr.forEach(function (val, i) {
    var timeId = setTimeout(function (num) {
      console.log(num)
    }, (i + 1) * 3000, val)
    timeoutArr.push(timeId)
  })
  return timeoutArr
}

function cancelReveal (arr) {
  for (var i = 0; i < arr.length; i++) {
    clearTimeout(arr[i])
  }
}

var currentLotto = lottoGenerator
var timeoutIds = revealLotto(currentLotto)

// Pass true as the second argument to bypass the setTimout, and just
// return the currentLotto.
revealLotto(currentLotto, true)

// use cancelReveal to stop all the setTimeouts
cancelReveal(timeoutIds)

// Using this to make sure my lottoGenerator is producing arrays populated
// with unique values
function test () {
  for (var i = 0; i < 50000; i++) {
    var newArr = lottoGenerator()
    for (var j = 0; j < newArr.length; j++) {
      if (newArr.indexOf(newArr[j]) !== j) {
        return 'error'
      }
    }
  }
  return true
}
