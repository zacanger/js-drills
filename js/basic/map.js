// rewrite map as a standalone function
// usage:
// const numbers = [1, 2, 3]
// const doubles = map(numbers, number => number * 2)
// console.log(doubles) // [2, 4, 6]

const map = (arr, mapper, ctx) => {
  const foo = []
  for (let i = 0; i < arr.length; i++) {
    foo.push(mapper.call(ctx, arr[i], i, arr))
  }
  return foo
}

const map = (fn, arr) => {
  let newArr = []
  for (let i = 0; i < arr.length; ++i) {
    newArr[i] = fn(arr[i])
  }
  return newArr
}

const map = (arr, fn) => {
  if (arr == null) return []

  let len = arr.length
  let res = new Array(len)
  let i = -1

  while (++i < len) {
    res[i] = fn(arr[i], i, arr)
  }

  return res
}
