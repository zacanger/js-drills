// rewrite filter as a standalone function

const filter = (pred, arr) => {
  let newArr = []

  for (let i = 0; i < arr.length; ++i) {
    if (pred(arr[i])) {
      newArr[newArr.length] = arr[i]
    }
  }
  return newArr
}

const filter = (arr, cb) => {
  if (arr == null) return []
  if (typeof cb !== 'function') {
    throw new TypeError('Boom!')
  }

  let len = arr.length
  let res = arr.slice()
  let i = 0

  while (len--) {
    if (!cb(arr[len], i++)) {
      res.splice(len, 1)
    }
  }

  return res
}
