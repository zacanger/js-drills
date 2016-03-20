function replace (str, before, after) {
  var re = new RegExp(before, 'g')
  var upper = /^[A-Z]/
  if (upper.test(before)) {
    after = after[0].toUpperCase() + after.substr(1)
  }
  var newStr = str.replace(re, after)
  return newStr
}

replace('A quick brown fox Jumped over the lazy dog', 'Jumped', 'leaped')
