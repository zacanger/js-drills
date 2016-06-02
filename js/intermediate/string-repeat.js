// repeat string as per provided count

module.exports = (string, count) => {
  let result = ''
  while (count > 0) {
    if (count % 2 === 1) {
      result += string
      count -= 1
    } else {
      string += string
      count /= 2
    }
  }
  return result
}

