// write fn that takes two arrays and returns
// array with their intersection

module.exports = (firstArray, secondArray) => {
  const hash = {}

  firstArray.forEach(item => {
    hash[item] = true
  })

  const intersection = secondArray.filter(item => {
    return hash[item]
  })

  return intersection
}
