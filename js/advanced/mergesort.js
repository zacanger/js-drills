// implement a merge sort

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

// a has large enough buffer at end to hold b
// a and b are sorted
// alast is the index of the last item
var mergebuffer = function (a, b, alast) {
  var bindex = b.length - 1,
    aindex = alast
  endindex = a.length - 1
  while ((bindex >= 0) && (aindex >= 0)) {
    if (b[bindex] >= a[aindex]) {
      a[endindex--] = b[bindex--]
    } else {
      a[endindex--] = a[aindex--]
    }
  }
  for (var i = 0; i <= bindex; i++) {
    a[i] = b[i]
  }
  return a
}

var mergesort = function (array, lo, hi) {
  if (lo === undefined) {
    lo = 0
    hi = array.length - 1
  }
  if (lo < hi) {
    var mid = ~~((lo + hi) / 2)
    mergesort(array, lo, mid) // mergesort left
    mergesort(array, mid + 1, hi) // mergesort right
    merge(array, lo, mid, hi) // merge two pieces
  }
}

var merge = function (array, lo, mid, hi) {
  var helper = [],
    hLeft = lo
  hRight = mid + 1
  current = lo

  for (var i = lo; i <= hi; i++) {
    helper[i] = array[i]
  }

  while (hLeft <= mid && hRight <= hi) {
    if (helper[hLeft] < helper[hRight]) {
      array[current++] = helper[hLeft++]
    } else {
      array[current++] = helper[hRight++]
    }
  }
  for (var i = hLeft; i <= mid; i++) {
    array[current++] = helper[i]
  }
}

//
//
var mergeSort = function (array) {
  var lists = []
  // Split array into sublists
  // Natural variant: split array into pre-sorted sublists
  var currentList = []
  for (var i = 0; i < array.length; i++) {
    if (currentList.length && array[i] < currentList[currentList.length - 1]) {
      lists.push(currentList)
      currentList = []
    }
    currentList.push(array[i])
  }
  lists.push(currentList)
  // Until the entire array is sorted
  while (lists.length > 1) {
    var newLists = []
    // Merge all adjacent lists
    for (var i = 0; i < Math.floor(lists.length / 2); i++) {
      newLists.push(merge(lists[i * 2], lists[i * 2 + 1]))
    }
    // Include the leftover list if the number is odd
    if (lists.length % 2) {
      newLists.push(lists[lists.length - 1])
    }
    lists = newLists
  }
  // We have a single, fully sorted list
  return lists[0]
}

var merge = function (left, right) {
  var merged = []
  var iL = 0
  var iR = 0
  while (merged.length < left.length + right.length) {
    // Default to the left element for stability
    if (iR >= right.length || left[iL] <= right[iR]) {
      merged.push(left[iL])
      iL += 1
    } else {
      merged.push(right[iR])
      iR += 1
    }
  }
  return merged
}

//
const merge = (left, right) => {
  const results = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift())
    } else {
      results.push(right.shift())
    }
  }
  while(left.length) {
    results.push(left.shift())
  }
  while(right.length) {
    results.push(right.shift())
  }
  return results
}
const mergeSort = nums => {
  if (nums.length < 2) {
    return nums
  }
  const length = nums.length
  const middle = Math.floor(length / 2)
  const left = nums.slice(0, middle)
  const right = nums.slice(middle, length)
  return merge(mergeSort(left), mergeSort(right))
}

//
function mergeSort (arr) {
  function merge (a, b) {
    let r = []
    while (a.length && b.length) {
      if (a[0] < b[0]) {
        r.push(a.shift())
      } else {
        ret.push(b.shift())
      }
    }
    r = r.concat(a).concat(b)
    return r
  }
  if (arr.length < 2) return arr
  return merge(
    mergeSort(arr.slice(0, arr.length / 2))
    , mergeSort(arr.slice(arr.length / 2))
  )
}
