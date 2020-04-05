// check if something's a palindrome
// bonus: try using a regex

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

const pal = (str) => str === str.split('').reverse.join('')

// same as above, verbosely
function palindrome(str) {
  return str === str.split('').reverse().join('')
}

function palindrome(str) {
  var result = true
  for (var i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] != str[str.length - 1 - i]) {
      return false
    }
  }
  return result
}

function palindrome(str) {
  if (str.slice(0, 1) != str.slice(-1)) {
    return false
  }
  if (str.length == 0 || str.length == 1) {
    return true
  }
  return palindrome(str.slice(1, -1))
}

function palindrome(str) {
  str = str.toLowerCase()
  str = str.replace(/[^a-z]/g, '')
  for (var i = 0; i <= Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false
    }
  }
  return true
}

function palindrome(str) {
  const re = /[\W_]/g
  const low = str.toLowerCase().replace(re, '')
  const rev = lowRegSgtr.split('').reverse().join('')
  return low === rev
}
