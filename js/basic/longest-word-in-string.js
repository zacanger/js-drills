// Write a function that returns the longest word(s)
// from a sentence. The function should not return
// any duplicate words (case-insensitive).

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

var longest = function (str) {
  str = str.toLowerCase().split(' ')
  var longestLength = 0
  var longestWord = []
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].trim()
    if (str[i].length > longestLength) {
      longestWord.splice(0, longestLength - 1, str[i])
      longestLength = str[i].length
    } else if (str[i].length === longestLength && longestWord.indexOf(str[i]) === -1 && str[i] !== '') {
      longestWord.push(str[i])
    }
  }
  return longestWord
}

console.log(longest('I gave a present to my parents'))

function findLongestWord (str) {
  str = str.split(' ')
  var longest = str.reduce(function (a, b) {
    return a.length >= b.length ? a : b
  })
  return longest.length
}
