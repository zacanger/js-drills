// reverse an array

function reverseArray (array) {
  var inverseArr = []
  for (var i = array.length - 1; i >= 0; i--) {
    inverseArr.push(array[i])
  }
  return inverseArr
}

function reverseArrayInPlace (array) {
  var temp
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    temp = array[i]
    array[i] = array[array.length - 1 - i]
    array[array.length - 1 - i] = temp
  }
  return array
}

console.log(reverseArray(['A', 'B', 'C']))
var arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)

