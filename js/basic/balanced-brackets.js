// Write a function that accepts a string consisting entirely of brackets ([](){})
// and returns whether or not it is balanced.  Every 'opening' bracket must be followed
// by a closing bracket of the same type.  There can also be nested brackets, which adhere to the same rule.

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
 */

function balance (str) {
  str = str.split('')
  var parens = ['(', ')']
  var square = ['[', ']']
  var curly = ['{', '}']

  for (var i = 0; i < str.length; i++) {
    if (str[i] === parens[0]) {
      if (str[i + 1] !== parens[1]) {
      }
    }
  }
}
