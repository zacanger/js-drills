// takes an array, sorts it using quicksort algorithm
// outputs to console
// running time O(nlog(n))

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
 *
 *
 */

function quicksort(arr) {
  sort(arr, 0, arr.length - 1)
  function swap(arr, a, b) {
    var temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
  }
  function partition(arr, l, r) {
    var p = arr[r],
      i = l - 1,
      j = l
    while (j < r) {
      if (arr[j] <= p) {
        swap(arr, ++i, j)
      }
      j++
    }
    swap(arr, i + 1, r)
    return i + 1
  }
  function sort(arr, l, r) {
    var p
    if (l < r) {
      p = partition(arr, l, r)
      sort(arr, l, p - 1)
      sort(arr, p + 1, r)
    } else if (l === arr.length) {
      console.log(arr)
    }
  }
}

// or, much more concisely, from le wikipedia:
function quickersort(a) {
  var left = [],
    right = [],
    pivot = a[0]
  if (a.length == 0) {
    return []
  }
  for (var i = 1; i < a.length; i++) {
    a[i] < pivot ? left.push(a[i]) : right.push(a[i])
  }
  return quickersort(left).concat(pivot, quickersort(right))
}

// basically the s ame, just different syntax
function quicksort(arr) {
  if (arr.length === 0) {
    return []
  }
  let left = [],
    right = [],
    pivot = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quicksort(left).concat(pivot, quicksort(right))
}

// similarly
const quickSort = (nums) => {
  if (nums.length <= 1) {
    return nums
  }
  const pivot = nums[nums.length - 1],
    left = [],
    right = []

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i])
    } else {
      right.push(nums[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

//
function quikSrt(a) {
  if (a.length < 2) return a
  const l = []
  const r = []
  const b = [a[0]]
  for (let i = 1; i < a.length; i++) {
    if (a[i] > a[0]) {
      r.push(a[i])
    } else if (a[i] < a[0]) {
      l.push(a[i])
    } else {
      b.push(a[0])
    }
  }
  return quikSrt(l).concat(b).concat(quikSrt(r))
}

const qs = (arr) => {
  const lte = (a) => (b) => a <= b
  const gt = (a) => (b) => a > b
  const filter = [].filter
  if (arr.length === 0) {
    return []
  }
  const [x, ...xs] = arr
  const smallerOrEqual = filter.call(xs, lte(x))
  const larger = filter.call(xs, gt(x))
  return [...qs(smallerOrEqual), x, ...qs(larger)]
}
