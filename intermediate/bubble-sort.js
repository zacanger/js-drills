// implement a bubble sort
// example usage: `bubbleSort([2, 1, 3])` // => [1, 2, 3]

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
 */

var randomArray = function (size) {
  var array = []
  for (var i = 0; i < size; i++) {
    array.push(parseInt(Math.random() * 100))
  }
  return array
}
var bubbleSort = function (array) {
  var swapped = true
  while (swapped) {
    swapped = false
    for (var i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1)
        swapped = true
      }
    }
  }
  function swap(a, b) {
    var tmp = array[a]
    array[a] = array[b]
    array[b] = tmp
  }
}
var array = randomArray(5000)
console.log(array)
console.time('bubbleSort')
console.log('\n#########################################\n')
bubbleSort(array)
console.timeEnd('bubbleSort')
console.log('\n#########################################\n')

//
//
//
var i
var bubbleSort = function (array) {
  var len = array.length
  if (len <= 1) {
    return array
  }
  for (var i = 0; i < len; i += 1) {
    var hasSwapped = false
    for (var j = 0; j < len - i - 1; j += 1) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1)
        hasSwapped = true
      }
    }
    if (!hasSwapped) break
  }
  return array
}
var swap = function (array, i, j) {
  var temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

//
//
//
// swap adjacent elements if not in correct order
// one pass without swaps then stop the algorithm
var bubbleSort = function (array) {
  var temp,
    isSwapped = true
  while (isSwapped) {
    isSwapped = false
    for (var j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        temp = array[j + 1]
        array[j + 1] = array[j]
        array[j] = temp
        isSwapped = true
      }
    }
  }
  return array
}

const bubbleSort = (nums) => {
  do {
    let swapped = false
    for (let i = 0; i < nums.length; i++) {
      snapshot(nums)
      if (nums[i] > nums[i + 1]) {
        let temp = nums[i]
        nums[i] = nums[i + 1]
        nums[i + 1] = temp
        swapped = true
      }
    }
  } while (swapped)
  snapshot(nums)
}

//
function bubbleSort(arr) {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length - j; i++) {
      if (arr[i] > arr[i + 1]) {
        let a = arr[i]
        let b = arr[i + 1]
        arr[i] = b
        arr[i + 1] = a
      }
    }
  }
  return arr
}

//
const bubbleSort = (array) => {
  if (arguments.length === 0 || !Array.isArray(array)) {
    throw new Error()
  }
  let hasSwapped = true
  while (hasSwapped) {
    hasSwapped = false
    for (let i = 0; i < array.length - 1; i++) {
      let temp = array[i]
      if (array[i] > array[i + 1]) {
        array[i] = array[i + 1]
        array[i + 1] = temp
        hasSwapped = true
      }
    }
    if (!hasSwapped) {
      return array
    }
  }
  return array
}
