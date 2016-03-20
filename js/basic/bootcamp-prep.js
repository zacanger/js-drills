// create an array called 'myArray' that contains the numbers 1 - 5
var myArray = [1, 2, 3, 4, 5]

// create an object called 'myObject' that contains three properties
var myObject = {
  name: 'John',
  location: 'San Francisco',
  occupation: 'Software Engineer',
}

// write 'print' function
function print (input) {
  console.log(input)
}

// print the second element of 'myArray' using the 'print' function
print(myArray[1])

// print the second property of 'myObject' using two different methods
print(myObject.location)
print(myObject['location'])

// write 'each' function
function each (collection, callback) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      callback(collection[i])
    }
  } else {
    for (var key in collection) {
      if (collection.hasOwnProperty(key)) {
        callback(collection[key])
      }
    }
  }
}

// write 'map' function
function map (collection, callback) {
  var mapped = []
  each(collection, function (element) {
    mapped.push(callback(element))
  })
  return mapped
}

// write 'filter' function
function filter (collection, predicate) {
  var passed = []
  each(collection, function (element) {
    if (predicate(element)) {
      passed.push(element)
    }
  })
  return passed
}

// write 'reduce' function
function reduce (collection, callback, initial) {
  var accumulator = initial
  each(collection, function (element) {
    if (accumulator === undefined) {
      accumulator = element
    } else {
      accumulator = callback(accumulator, element)
    }
  })
  return accumulator
}

// write 'contains' function using 'reduce'
function contains (collection, target) {
  return reduce(collection, function (accumulator, element) {
    if (accumulator) {
      return true
    } else {
      return element === target
    }
  }, false)
}

// Refactored 'contains' function using 'reduce'
function contains (collection, target) {
  return reduce(collection, function (accumulator, element) {
    return accumulator || element === target
  }, false)
}

// write 'every' function
function every (collection, predicate) {
  var result = true
  each(collection, function (element) {
    if (!predicate(element)) {
      result = false
    }
  })
  return result
}

// write 'some' function
function some (collection, predicate) {
  var result = false
  each(collection, function (element) {
    if (predicate(element)) {
      result = true
    }
  })
  return result
}

// Write a countLetters function using reduce -- assuming that 'each' will work on a string
function countLetters (str, letter) {
  return reduce(str, function (count, curLetter) {
    if (curLetter === letter) {
      count++
    }
    return count
  }, 0)
}

// write an 'isPalindrome' function that ignores punctuation and whitespace
function isPalindrome (str) {
  str = str.replace(/[^a-z]/gi, '')
  return str === str.split('').reverse().join('')
}

function isPalindrome2 (str) {
  str = str.replace(/[^a-z]/gi, '')
  var result = true
  for (var i = 0; i < Math.floor(str.length / 2); i++) {
    if (!(str[i] === str[str.length - 1 - i])) {
      return false
    }
  }
  return result
}

// write a recursive version of 'isPalindrome'
function isPalindrome3 (str) {
  str = str.replace(/[^a-z]/gi, '')

  if (str.length === 0 || str.length === 1) {
    return true
  }
  if (str.slice(0, 1) !== str.slice(-1)) {
    return false
  }
  return isPalindrome3(str.slice(1, -1))
}

function binarySearch (arr, target) {
  var check = arr[Math.floor(arr.length / 2)]
  if (check === target) {
    return true
  }
  if (arr.length === 0) {
    return false
  }
  if (target > check) {
    arr = arr.slice(arr.indexOf(check), arr.length - 1)
  } else {
    arr = arr.slice(0, arr.indexOf(check))
  }
  return binarySearch(arr, target)
}

// write a closure
function makeAdder (x) {
  return function (y) {
    return x + y
  }
}

var addTwo = add(2)
addTwo(1)

function odd (num) {
  if (num % 2 !== 0) {
    return true
  }
}
