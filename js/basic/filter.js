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
