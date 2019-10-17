// write fn to convert numbers to roman numerals

const stringRepeat = require('./string-repeat')

const hash = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M'
}

function numberToString (number, multiple) {
  if (number <= 3) {
    return stringRepeat(hash[1 * Number(multiple)], number)
  }
  if (number < 5) {
    return hash[1 * Number(multiple)] + hash[5 * Number(multiple)]
  }
  if (number === 5) {
    return hash[5 * Number(multiple)]
  }
  if (number <= 8) {
    return hash[5 * Number(multiple)] + stringRepeat(hash[1 * Number(multiple)], number - 5)
  }
  return hash[1 * Number(multiple)] + hash[10 * Number(multiple)]
}

module.exports = number => {
  let thousand = Math.floor(number / 1000)
  number %= 1000
  let hundred = Math.floor(number / 100)
  number %= 100
  let ten = Math.floor(number / 10)
  number %= 10
  let one = number

  thousand = stringRepeat('M', thousand)
  hundred = numberToString(hundred, 100)
  ten = numberToString(ten, 10)
  one = numberToString(one, 1)

  return thousand + hundred + ten + one
}
