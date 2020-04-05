// write a function that translates english to pig-latin

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
 *
 */

function translate(str) {
  const strArr = str.split('')
  const vowel = /[aeiou]/
  if (vowel.test(strArr[0])) {
    return str + 'way'
  }
  while (true) {
    if (!vowel.test(strArr[0])) {
      strArr.push(strArr.splice(0, 1))
    } else if (vowel.test(strArr[0])) {
      break
    }
  }
  return strArr.join('') + 'ay'
}

console.log(translate('consonant'))

const pigLatin = (str) => {
  const a = []
  str.split(' ').map((w) => {
    const b = w.split('')
    b.shift()
    const s = b.join('')
    a.push(`${s}${w[0]}ay`)
  })
  return a.join(' ')
}
console.log(pigLatin('consonant'))
