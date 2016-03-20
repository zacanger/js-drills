// write a function that takes in a string and modifies it by replacing
// every letter in the string with the letter that follows it, alphabetically.
// (so, m => n, d => e, etc.; z => a).
// then, capitalize every vowel in the modified string.

function LetterChanges (str) {
  var transform = ''
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 'a'.charCodeAt(0) && str.charCodeAt(i) <= 'z'.charCodeAt(0)) {
      switch (String.fromCharCode(str.charCodeAt(i) + 1)) {
        case 'a':
          transform += 'A'
          break
        case 'e':
          transform += 'E'
          break
        case 'i':
          transform += 'I'
          break
        case 'o':
          transform += 'O'
          break
        case 'u':
          transform += 'U'
          break
        default:
          transform += String.fromCharCode(str.charCodeAt(i) + 1)
      }
    } else {
      transform += str[i]
    }
  }
  return transform
}

