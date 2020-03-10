// Given an arbitrary input string, return the first
// non-repeated character in the string.
// For example:
// firstNonRepeatedCharacter(‘ABA’); // => ‘B’
// firstNonRepeatedCharacter(‘AABCABD’); // => ‘C’

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
 */

function firstNonRepeatedCharacter(str) {
  for (var i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i]
    }
  }
  return 'no unique characters'
}

var firstNon = function(str) {
  for (var i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i]
    }
  }
  return 'nothing, ya big dumb'
}

var firstNon2 = function(str) {
  for (var i = 0; i < str.length; i++) {
    var c = str.charAt(i)
    if (str.indexOf(c) === i && str.indexOf(c, i + 1) === -1) {
      return c
    }
  }
  return 'no unique characters'
}

// This function uses a hash.
// It's a little more code, but it avoids using a nested for loop.
function firstNonRepeatedCharacter(str) {
  var hash = {}
  for (var i = 0; i < str.length; i++) {
    if (!hash[str[i]]) {
      hash[str[i]] = 1
    } else {
      hash[str[i]]++
    }
  }
  // console.log(hash)
  for (var i = 0; i < str.length; i++) {
    if (hash[str[i]] === 1) {
      return str[i]
    }
  }
  return 'no unique characters'
}

var firstNonRepeatedCharacter = function(string) {
  if (string === undefined || string.length === 0) {
    return false
  }
  var charCounts = {}
  for (var i = 0; i < string.length; i++) {
    charCounts[string[i]] = charCounts[string[i]]
      ? charCounts[string[i]] + 1
      : 1
  }
  for (var j = 0; j < string.length; j++) {
    if (charCounts[string[j]] === 1) {
      return string[j]
    }
  }
  return false
}

// tests
var test1 = 'AABBCDEDCF' // should return 'C'.
var test2 = 'ABAACDFF' // should return 'B'
var test3 = 'AABBCCDD' // should return no letters. No unique letters.
