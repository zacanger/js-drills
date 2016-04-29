// given a sorted array, find the index of an element
// using a binary search algorithm.

// test for linear vs binary by applying a data set that
// exhibits the desired characteristics.

// example usage
// var index = binarySearch([1, 2, 3, 4, 5], 3)
// console.log(index); // [2]

var binarySearch = function (array, searchValue) {
  var len = array.length
  if (len <= 0) {
    return null
  }

  var midIdx = Math.floor(len / 2)
  var midValue = array[midIdx]

  if (searchValue === midValue) {
    return midIdx
  }
  if (searchValue < midValue) {
    return binarySearch(array.slice(0, midIdx), searchValue)
  }

  var greaterThan = binarySearch(array.slice(midIdx + 1), searchValue)
  return (greaterThan !== null) ? 1 + midIdx + greaterThan : greaterThan
}

