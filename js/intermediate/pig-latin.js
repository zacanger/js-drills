function translate (str) {
  var strArr = str.split('')
  var vowel = /[aeiou]/
  var result = []
  if (vowel.test(strArr[0])) {
    return str + 'way'
  }
  var isTrue = true
  while (isTrue) {
    if (!vowel.test(strArr[0])) {
      strArr.push(strArr.splice(0, 1))
    } else if (vowel.test(strArr[0])) {
      break
    }
  }
  return strArr.join('') + 'ay'
}

console.log(translate('consonant'))
