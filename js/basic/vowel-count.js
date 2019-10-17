// write a function that takes a string and returns the total number of
// vowels that the string contains. don't count `y`. example:
// vowels('Hey, how are you?') // => 6

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
 */

function vowels (str) {
  var vowels = 0
  for (var i = 0; i < str.length; i++) {
    switch (str[i].toLowerCase()) {
      case 'a':
        vowels++
        break
      case 'e':
        vowels++
        break
      case 'i':
        vowels++
        break
      case 'o':
        vowels++
        break
      case 'u':
        vowels++
    }
  }
  return vowels
}

// regex version
const vowels = (str = '') => (str.match(/[aeiou]/gi) || []).length
