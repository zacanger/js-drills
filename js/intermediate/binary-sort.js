// binary sort

function binarySort (collection, target, cb, min, max) {
  min = min || 0
  max = max || collection.length
  const median = Math.floor((min + max) / 2)
  const result = collection[median]

  if (result === target) {
    cb(median)
    return
  } else if (result > target) {
    max = median
  } else if (result < target) {
    min = median
  }
  binarySort(collection, target, cb, min, max)
}
