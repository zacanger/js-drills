// rewrite map as a standalone function
// usage:
// const numbers = [1, 2, 3]
// const doubles = map(numbers, number => number * 2)
// console.log(doubles) // [2, 4, 6]

const map = (arr, mapper, ctx) => {
  const ret = []
  for (let i = 0; i < arr.length; i++) {
    ret.push(mapper.call(ctx, arr[i], i, arr))
  }
  return ret
}
