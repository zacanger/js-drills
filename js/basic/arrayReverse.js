// reverse an array

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
 */

const r = (a) => a.reverse()

function reverseArray(array) {
  const inverseArr = []
  for (let i = array.length - 1; i >= 0; i--) {
    inverseArr.push(array[i])
  }
  return inverseArr
}

function reverseArrayInPlace(array) {
  let temp
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    temp = array[i]
    array[i] = array[array.length - 1 - i]
    array[array.length - 1 - i] = temp
  }
  return array
}

console.log(reverseArray(['A', 'B', 'C']))
const arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)
