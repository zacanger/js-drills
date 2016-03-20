// Write a function that returns the longest word(s)
// from a sentence.  The function should not return
// any duplicate words (case-insensitive).

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

// the indexOf runs a for loop itself.  So, as the original array increases,
// the time to execute the function increases exponentially (n^n,
// where n === arr.length)
// to avoid that, save the item to an object.  A look up on an object is
// called static data, or static lookup, or something like that.
// It virtually takes no time.

// This solution is from Tyler McGinnis
var longest2 = function (sent) {
  sent = sent.split(' ')
  var longest = ''
  var longestWords = []
  var hash = {}
  for (var i = 0; i < sent.length; i++) {
    if (!hash.hasOwnProperty(sent[i].toLowerCase())) {
      if (sent[i].length > longest.length) {
        longestWords = []
        hash = {}
        hash[sent[i].toLowerCase()] = true
        longestWords.push(sent[i])
        longest = sent[i]
      } else if (sent[i].length >= longest.length) {
        hash[sent[i].toLowerCase()] = true
        longestWords.push(sent[i])
      }
    }
  }
  return longestWords
}


function findLongestWord (str) {
  str = str.split(' ')
  var longest = str.reduce(function (a, b) {
    return a.length >= b.length ? a : b
  })
  return longest.length
}

findLongestWord('The quick brown fox jumped over the lazy dog')

longest2('I gave a present to my parents')
longest2('Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo')
longest2('I gave a present to my parentssss')
