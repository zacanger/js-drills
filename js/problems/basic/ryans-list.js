/* Make the following code work:
sum(2, 3) // 5
sum(2)(3) // 5
*/
function sum (numOne, numTwo) {
  if (numTwo !== undefined) {
    return numOne + numTwo
  }

  return function (num) {
    return numOne + num
  }
}

// /////////////////////

/*
Add a sum method to the array prototype
var arr = [1,2,3,4]
arr.sum()  //returns 10

var arr = [10, 28, 14, 33]
arr.sum() //returns 85
*/

Array.prototype.sum = function () {
  var count = 0

  this.forEach(function (element) {
    count += element
  })

  return count
}

// /////////////////////

/*
Write a function that takes a number parameter
and returns the smallest palindrome number higher than the parameter

nextPal(11) == 22

nextPal(188) == 191

nextPal(191) == 202

nextPal(2541) == 2552
*/

function nextPal (num) {
  do {
    num++
  } while (num !== parseInt(num.toString().split('').reverse().join('')))

  return num
}

// //////////////////////

/*
'anane' === 1
'adak' === 2

amazonCounting(1) // 'anane'
amazonCounting(2) // 'adak'
amazonCounting(13) // 'adak adak adak adak adak adak anane'

No trailing spaces!
*/
// recursive
function amazonCounting (num) {
  switch ( num ) {
    case 0:
      return ''
    case 1:
      return 'anane'
    case 2:
      return 'adak'
    default:
      return 'adak ' + amazonCounting(num - 2)
  }
}
// non recursive
function countArara (n) {
  var count = []

  for ( var i = 2; i <= n; i += 2) {
    count.push('adak')
  }

  if (n % 2 !== 0) {
    count.push('anane')
  }

  return count.join(' ')
}

// ///////////////////////

/*
write a function that will console log the numbers 1 through 5,
with delays between each log equaling the logged number.
delayLog() // pauses 1 second, then logs 1
// pauses 2 seconds after the previous log, then logs 2
// pauses 3 seconds after the previous log, then logs 3
// pauses 4 seconds after the previous log, then logs 4
// pauses 5 seconds after the previous log, then logs 5
*/

function delayLog () {
  var counter = 1

  function logger () {
    if (counter <= 5) {
      setTimeout(function () {
        console.log(counter++)
        logger()
      }, counter * 1000)
    }
  }
  logger()
}

// ///////////////////////

/*
 Write a function that takes in an array of numbers and determines whether those numbers are in order
 ordered( [1, 2, 3, 7, 12] ) // true
 ordered( [4, 9, 42, 22, 56] ) // false
*/

function ordered (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false
    }
  }
  return true
}

// ////////////////////////

/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters, - each taken only once - coming from s1 or s2.

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest (s1, s2) {
  s3 = s1 + s2
  s4 = s3.split('')
  s4 = s4.sort().filter(function (element, index, array) {
    return element !== array[index - 1]
  })
  return s4.join('')
}

// //////////////////////////

/*

let personTmpl = createTemplate("{{name}} likes {{animalType}}")
personTmpl({ name: "John", animalType: "dogs" }) // John likes dogs

*/

function createTemplate (template) {
  return function (obj) {
    return template.replace(/{{(\w+)}}/g, function (matchedString, submatch) {
      return obj[submatch] || ''
    })
  }
}

// ///////////////////////////

/*
You'll be passed an array of objects - you must sort them in descending order based on the value of an arbitrarily specified property. For example, when sorted by a, this:

[
  {a: 1, b: 3},
  {a: 3, b: 2},
  {a: 2, b: 40},
  {a: 4, b: 12}
]

[
  {a: 4, b: 12},
  {a: 3, b: 2},
  {a: 2, b: 40},
  {a: 1, b: 3}
]

your function must take the form function sortList (sortBy, list)

The values will always be numbers, and the properties will always exist.
*/

function sortList (sortBy, list) {
  return list.sort(function (a, b) {
    return a[sortBy] < b[sortBy]
  })
}

// /////////////////////////////

/*

You are given an array of values.

Sum every number value in the array, and any nested arrays (to any depth).

Ignore all other types of values.

arraySum([2, 3]) // 5
arraySum([4, 4, [3, 2]) // 13

*/

// recursive
function arraySum (arr) {
  var output = 0
  for (var i = 0; i < arr.length; i++) {
    if (typeof (arr[i]) === 'number') {
      output += arr[i]
    }
    if (Array.isArray(arr[i])) {
      arraySum(arr[i])
    }
    return output
  }
}

// non recursive
function arraySum (arr) {
  return arr.toString()
    .split(',')
    .reduce(function (previousValue, currentValue) {
      if (parseFloat(currentValue)) {
        return parseFloat(currentValue) + previousValue
      }
      return previousValue
    }, 0)
}
