// examples of callbacks

var add = function (a, b) {
  return a + b
}

var substract = function (a, b) {
  return a - b
}

var multiply = function (a, b) {
  return a * b
}

// callback usage example
var doMath = function (x, y, callback) {
  return callback(x, y)
}

// closure example
var adder = function (x) {
  return function (y) {
    return x + y
  }
}

function map (collection, callback) {
  for (var i = 0; i < collection.length; i++) {
    collection[i] = callback(collection[i])
  }
  return collection
}

map([1, 2, 3], function (value) { // returns [2,3,4]
  return value += 1
})

