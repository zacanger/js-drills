// implement a binary search

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
 */

const binSearch = (ls, i) => {
  let min = 0
  let max = ls.length
  let mid

  while (min <= max) {
    mid = Math.floor((min + max) / 2)

    if (ls[mid] === i) {
      return mid
    } else {
      ls[mid] < i ? min = mid : max = mid
    }
  }

  return -1
}

// fast and small solution
const binarySearch = (haystack, needle, comparator, low, high) => {
  let mid
  let cmp

  if (low === undefined) {
    low = 0
  } else {
    low = low | 0
    if (low < 0 || low >= haystack.length) {
      throw new Error('invalid low')
    }
  }

  if (high === undefined) {
    high = haystack.length - 1
  } else {
    high = high | 0
    if (high < low || high >= haystack.length) {
      throw new Error('invalid high')
    }
  }

  while (low <= high) {
    mid = low + (high - low >> 1)
    cmp = +comparator(haystack[mid], needle, mid, haystack)

    if (cmp < 0.0) {
      low = mid + 1
    } else if (cmp > 0.0) {
      high = mid - 1
    } else {
      return mid
    }
  }

  return ~low
}

// (simple solution)
function binSearch (key, arr) {
  var low = 0,
    hi = arr.length - 1

  while(low <= hi){
    var mid = ~~((low + hi) / 2),
      val = arr[mid]

    if (val < key) {
      low = mid + 1
    } else if (val > key) {
      hi = mid - 1
    } else {
      return mid
    }
  }
  return null
}

function binarySearch (arr, el) {
  function inner (low, hi) {
    const mid = Math.floor((low + hi) * 0.5)
    if (el === arr[mid]) {
      return el
    }
    if (el < arr[mid]) {
      return inner(low, mid)
    } else {
      return inner(mid, hi)
    }
  }
  inner(0, arr.length - 1)
}

//
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

//
const binarySearch = (array, target) => {
  let startIndex = 0,
    endIndex = array.length - 1,
    midIndex = Math.floor((startIndex + endIndex) / 2)

  while (array[midIndex] !== target && startIndex < endIndex) {
    if (target > array[midIndex]) {
      startIndex = midIndex + 1
    } else if (target < array[midIndex]) {
      endIndex = midIndex - 1
    }
    midIndex = Math.floor((startIndex + endIndex) / 2)
  }
  return (array[midIndex] !== target) ? null : midIndex
}

// from here down is one more solution. it's overkill.
var binaryOps = {}

binaryOps.upsert = function (array, item, compare, update) {
  var index = binaryOps.findAny(array, item, compare)
  if (typeof index === 'undefined') throw new Error('und')
  if (typeof index === 'undefined') throw new Error('und')
  if (binaryOps.isFound(index)) {
    update(array[index], item)
    return index
  } else {
    return binaryOps.insertAtIndex(array, index, item)
  }
}

binaryOps.insert = function (array, item, compare) {
  var index = binaryOps.findAny(array, item, compare)
  return binaryOps.insertAtIndex(array, index, item)
}

binaryOps.findAny = function (array, item, compare, minIndex, maxIndex) {
  if (array.length === 0) return Number.POSITIVE_INFINITY
  if (array.length === 1) return binaryOps.easySingle(array[0], item, compare)
  var currentCompare
  if (typeof minIndex === 'undefined' || minIndex === 0) {
    currentCompare = binaryOps.easyMin(array, item, compare)
    if (currentCompare !== false) return currentCompare
    minIndex = 1
  }
  if (typeof maxIndex === 'undefined' || maxIndex === array.length - 1) {
    currentCompare = binaryOps.easyMax(array, item, compare)
    if (currentCompare !== false) return currentCompare
    maxIndex = array.length - 2
  }
  var currentIndex
  var currentElement

  while (minIndex <= maxIndex) {
    currentIndex = (minIndex + maxIndex) / 2 | 0
    currentElement = array[currentIndex]
    currentCompare = compare(currentElement, item)

    if (currentCompare < 0) {
      minIndex = currentIndex + 1
    }
    else if (currentCompare > 0) {
      maxIndex = currentIndex - 1
    } else {
      return currentIndex
    }
  }
  return -minIndex
}

binaryOps.findRange = function (array, item, compare, minIndex, maxIndex) {
  if (array.length === 0) return Number.POSITIVE_INFINITY
  if (array.length === 1) return binaryOps.easySingle(array[0], item, compare)
  var currentCompare
  if (typeof minIndex === 'undefined' || minIndex === 0) {
    currentCompare = binaryOps.easyMin(array, item, compare)
    if (currentCompare === Number.NEGATIVE_INFINITY) return currentCompare
    if (currentCompare !== false) {
      return [currentCompare, binaryOps.findLast(array, item, compare)]
    }
    minIndex = 1
  }
  if (typeof maxIndex === 'undefined' || maxIndex === array.length - 1) {
    currentCompare = binaryOps.easyMax(array, item, compare)
    if (currentCompare === Number.POSITIVE_INFINITY) return currentCompare
    if (currentCompare !== false) {
      return [binaryOps.findFirst(array, item, compare), currentCompare]
    }
    maxIndex = array.length - 2
  }
  var currentIndex
  var currentElement

  var bounds = []
  var trueMin = minIndex
  var trueMax = maxIndex

  while (minIndex <= maxIndex) {
    currentIndex = (minIndex + maxIndex) / 2 | 0
    currentElement = array[currentIndex]
    currentCompare = compare(currentElement, item)

    if (currentCompare < 0) {
      minIndex = currentIndex + 1
    }
    else if (currentCompare > 0) {
      trueMax = currentIndex
      maxIndex = currentIndex - 1
    }
    else if (compare(array[currentIndex - 1], item) !== 0) {
      bounds[0] = currentIndex
      if (bounds[0] > trueMin) trueMin = bounds[0]
      break
    } else {
      if (compare(array[currentIndex + 1], item) !== 0) {
        bounds[1] = currentIndex
      } else {
        trueMin = currentIndex
      }
      maxIndex = currentIndex
    }
  }
  if (typeof bounds[0] === 'undefined') return -minIndex
  if (typeof bounds[1] !== 'undefined') return bounds
  bounds[1] = binaryOps.findLast(array, item, compare, trueMin, trueMax)
  return bounds
}

binaryOps.findFirst = function (array, item, compare, minIndex, maxIndex) {
  if (array.length === 0) return Number.POSITIVE_INFINITY
  if (array.length === 1) return binaryOps.easySingle(array[0], item, compare)
  var ret = binaryOps.easyOut(array, item, compare)
  var currentCompare
  if (typeof minIndex === 'undefined' || minIndex === 0) {
    currentCompare = binaryOps.easyMin(array, item, compare)
    if (currentCompare !== false) {
      return currentCompare
    }
    minIndex = 1
  }
  if (typeof maxIndex === 'undefined' || maxIndex === array.length - 1) {
    currentCompare = binaryOps.easyMax(array, item, compare)
    if (currentCompare === Number.POSITIVE_INFINITY) return currentCompare
    if (currentCompare !== false) {
      if (compare(array[currentCompare - 1], item) < 0) {
        return currentCompare
      }
    }
    maxIndex = array.length - 2
  }
  var currentIndex
  var currentElement

  if (minIndex === 0) {
    var c = compare(array[0], item)
    if (c === 0) {
      return 0
    }else if (c < 0) {
      return Number.NEGATIVE_INFINITY
    }
    minIndex++
  }

  while (minIndex <= maxIndex) {
    currentIndex = (minIndex + maxIndex) / 2 | 0
    currentElement = array[currentIndex]
    currentCompare = compare(currentElement, item)

    if (currentCompare < 0) {
      minIndex = currentIndex + 1
    }
    else if (currentCompare > 0) {
      maxIndex = currentIndex - 1
    }
    else if (compare(array[currentIndex - 1], item) < 0) {
      return currentIndex
    } else {
      maxIndex = currentIndex - 1
    }
  }
  return -minIndex
}

binaryOps.findLast = function (array, item, compare, minIndex, maxIndex) {
  if (array.length === 0) return Number.POSITIVE_INFINITY
  if (array.length === 1) return binaryOps.easySingle(array[0], item, compare)
  var currentCompare
  if (typeof maxIndex === 'undefined' || maxIndex === array.length - 1) {
    currentCompare = binaryOps.easyMax(array, item, compare)
    if (currentCompare !== false) {
      return currentCompare
    }
    maxIndex = array.length - 2
  }
  if (typeof minIndex === 'undefined' || minIndex === 0) {
    currentCompare = binaryOps.easyMin(array, item, compare)
    if (currentCompare === Number.NEGATIVE_INFINITY) return currentCompare
    if (currentCompare !== false) {
      if (compare(array[currentCompare + 1], item) < 0) {
        return currentCompare
      }
    }
    minIndex = 1
  }
  var currentIndex
  var currentElement

  while (minIndex <= maxIndex) {
    currentIndex = (minIndex + maxIndex) / 2 | 0
    currentElement = array[currentIndex]
    currentCompare = compare(currentElement, item)

    if (currentCompare < 0) {
      minIndex = currentIndex + 1
    }
    else if (currentCompare > 0) {
      maxIndex = currentIndex - 1
    }
    else if (compare(array[currentIndex + 1], item) !== 0) {
      return currentIndex
    } else {
      minIndex = currentIndex + 1
    }
  }

  return -minIndex
}

binaryOps.easyMin = function (array, item, compare) {
  var i = 0,c = compare(array[i], item)
  if (c > 0) return Number.NEGATIVE_INFINITY
  if (c === 0) return i
  return false
}

binaryOps.easyMax = function (array, item, compare) {
  var i = array.length - 1,c = compare(array[i], item)
  if (c < 0) return Number.POSITIVE_INFINITY
  if (c === 0) return i
  return false
}

binaryOps.easySingle = function (aitem, item, compare) {
  var currentCompare = compare(aitem, item)
  if (currentCompare > 0) return Number.NEGATIVE_INFINITY
  if (currentCompare < 0) return Number.POSITIVE_INFINITY
  return 0
}

binaryOps.isFound = function (index) {
  if (index < 0) return false
  if (index === Number.POSITIVE_INFINITY) return false
  return true
}

binaryOps.insertAtIndex = function (array, index, item) {
  if (binaryOps.isFound(index)) throw new Error('cannot overwrite what already exists')
  if (index === Number.POSITIVE_INFINITY) {
    array.push(item)
    return array.length - 1
  }
  if (index === Number.NEGATIVE_INFINITY) {
    array.unshift(item)
    return 0
  }
  index *= -1

  array.splice(index, 0, item)
  return index
}

if (typeof module !== 'undefined' && module.exports) module.exports = binaryOps
