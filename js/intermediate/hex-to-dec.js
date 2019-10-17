// convert hex to decimal (base 16 to base 10)

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
 *
 *
 *
 */

const h2d = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15
}

const hexToDecimal = hex => {
  const hexString = hex.split('')
  const len = hexString.length
  let result = 0
  let current
  for (let i = len - 1; i >= 0; i--) {
    if (typeof hexString[i] === 'string') {
      hexString[i] = hexString[i].toUpperCase()
    }
    current = hexString[i]
    result += h2d[current] * Math.pow(16, len - i - 1)
  }
  return result
}
