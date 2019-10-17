// reverse a string

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
 */

function reverseString (str) {
  var newStr = ''
  for (var i = str.length - 1; i >= 0; i--) {
    newStr += str[i]
  }
  return newStr
}

reverseString('hello')

function reverseStringShort (str) {
  return str.split('').reverse().join('')
}

reverseStringShort('hello')
