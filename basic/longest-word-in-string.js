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

const longest = function (str) {
  str = str.toLowerCase().split(' ')
  let longestLength = 0
  const longestWord = []
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].trim()
    if (str[i].length > longestLength) {
      longestWord.splice(0, longestLength - 1, str[i])
      longestLength = str[i].length
    } else if (
      str[i].length === longestLength &&
      !longestWord.includes(str[i]) &&
      str[i] !== ''
    ) {
      longestWord.push(str[i])
    }
  }
  return longestWord
}

console.log(longest('I gave a present to my parents'))

function findLongestWord(str) {
  str = str.split(' ')
  const longest = str.reduce(function (a, b) {
    return a.length >= b.length ? a : b
  })
  return longest.length
}

// Every sentence contain spaces, I'll consider a space to break words
// TimeComplexity O(N), Space Complexity: O(1)
function findLongestWord(input) {
  let currentCount = 0
  let result = 0
  for (let i = 0; i < input.length; i++) {
    // Until I find space incrementing count
    if (input[i] !== ' ') {
      currentCount++
    } else {
      result = Math.max(result, currentCount)
      currentCount = 0
    }
  }
  return result
}
