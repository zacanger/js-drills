// write fn that takes two arrays as
// and reorders with respect to order
// array = ['C', 'D', 'E', 'F', 'G']
// order = [3, 0, 4, 1, 2]
// result = ['D', 'F', 'G', 'C', 'E']

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
 */

module.exports = (array, order) => {
  for (let i = 0, l = order.length; i < l; i += 1) {
    if (order[i] !== i) {
      const orderIndex = order[i]
      order[i] = order[orderIndex]
      order[orderIndex] = orderIndex
      ;[array[i], array[orderIndex]] = [array[orderIndex], array[i]]
    }
  }
  return array
}

const reorder = (arr, order) => {
  const res = []
  order.forEach((i) => {
    res.push(arr[i])
  })
  return res
}
