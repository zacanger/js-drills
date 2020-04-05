// write a function that converts binary to text

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
 */

function binaryToText(str) {
  str = str.split(' ')
  let result = ''
  const current = 0
  for (const element of str) {
    const binary = parseInt(element, 2)
    const decimal = binary.toString(10)
    result += String.fromCharCode(decimal)
  }

  return result
}

binaryToText(
  '01001001 00100000 01100110 01100101 01100101 01101100 00100000 01101100 01101001 01101011 01100101 00100000 01100001 00100000 01110010 01100101 01100001 01101100 00101100 00100000 00110001 00110011 00110011 00110111 00100000 01001000 00110100 01011000 01011000 00110000 01010010 00100000 01101110 01101111 01110111 00101110'
)
