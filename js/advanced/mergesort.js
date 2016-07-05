// implement a merge sort

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
