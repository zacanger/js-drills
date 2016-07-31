// check if something's a palindrome

const pal = str => str === str.split('').reverse.join('')

// same as above, verbosely
function palindrome(str){
  return str === str.split('').reverse().join('')
}

function palindrome(str){
  var result = true
  for (var i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] != str[str.length - 1 -i]) {
      return false
    }
  }
  return result
}

function palindrome(str) {
  if (str.slice(0,1) != str.slice(-1)) {
    return false
  }
  if (str.length == 0 || str.length == 1) {
    return true
  }
  return palindrome(str.slice(1,-1))
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

// check it
palindrome('eye')
palindrome('tacocat')

// below is a full-on enterprisey solution with tests and comments and things.
// it's a great example of how to make something ridiculously simple into
// something ridiculously complicated.

'use strict' // avoid ambiguity and sloppy errors

/**
 * Tests whether or not a given string is a Palindrome
 * @param {string} stringToTest - the string to test.
 */
function isPalindrome(stringToTest) {
  var start = 0
  var end

  // make sure we have a string.
  if (typeof stringToTest !== 'string') {
    // throw if we didn't get a string
    throw new TypeError('isPalindrome() expected a string, but got ' +
      Object.prototype.toString.call(stringToTest) + ' instead!')
  }

  // normalize string by lowercasing and removing non-word characters
  stringToTest = stringToTest
    .toLowerCase()
    .replace(/[^a-z0–9]/ig, '')

  if (stringToTest.length === 0) {
    // warn if we have no valid characters to test
    console.log('No valid characters to test, treated as empty string' +
      '\nStack: \n' + new Error().stack)
    return true // an empty string is a palindrome.
  }

  end = stringToTest.length - 1
  // Compare characters from outside in. Stop when we get to the middle.
  while (start < end) {
    if (stringToTest[start] !== stringToTest[end]) {
      return false
    } else {
      start++
      end--
    }
  }

  // if we get here, it's a palindrome
  return true
}

// tests (should be in a separate file using a test framework)
console.log(isPalindrome('something that is not a palindrome') + ' = false')
console.log(isPalindrome('something that is \n not a palindrome') + ' = false')
console.log(isPalindrome('race \n car') + ' = true')
console.log(isPalindrome('') + ' = true + warn')
console.log(isPalindrome('  ') + ' = true + warn')
console.log(isPalindrome('1221') + ' = true')
console.log(isPalindrome('0') + ' = true')
console.log(isPalindrome('racecar') + ' = true')
console.log(isPalindrome('No "x" in Nixon!') + ' = true')
console.log(isPalindrome('~~!~!~') + ' = true + warn')
console.log(isPalindrome('Momsie') + ' = false')
console.log(isPalindrome(12)) // blow up
console.log(isPalindrome(undefined)) // blow up
console.log(isPalindrome(null)) // blow up
