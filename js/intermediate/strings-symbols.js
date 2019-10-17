// write a function that takes in a string and returns true or false based on
// if it's acceptable. the str witll be made of + and = with letters between
// them (example: '++d+===+c++==a'). the result should be true if each letter
// is surrounded by a +. assume the string has at least one letter.
// examples of input strings:
const str1 = '++d+===+c++==a', // false
  str2 = '++d+===+c++=+a+', // true
  str3 = 'F++d+===+c++=+a+', // false
  str4 = '+F++d+===+c++=+a' // false

function thing (str) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz',
    newStr = str.toLowerCase()
  for (var i = 0; i < newStr.length; i++) {
    if (alphabet.indexOf(newStr[i]) !== -1 && (i === 0 || i === newStr.length - 1)) {
      return false
    }
    if (alphabet.indexOf(newStr[i]) !== -1 && newStr[i - 1] !== '+' && newStr[i + 1] !== '+') {
      return false
    }
  }
  return true
}

// using regex
const isLetter = c => c.length === 1 && c.match(/[a-zA-Z]/i)
const simpleSymbols = str => {
  let flag = false
  for (let i = 1; i < str.length; i++) {
    if (isLetter(str[i])) {
      if (str[i - 1] === '+' && str[i + 1] === '+') {
        flag = true
      } else {
        return false
      }
    }
  }
  return flag
}

// another regex solution
function simpleSymbols (str) {
  var re = /^[a-z]|[^^\+][a-z][^\+$]|[a-z]$/g
  if (str.match(re)) {
    return 'false'
  } else {
    return 'true'
  }
}

// using a hash
function symbols (str) {
  let letters = 'abcdefghijklmnopqrstuvwxyz',
    hash = {}
  for (var i = 0; i < letters.length; i++) {
    hash[letters[i]] = true
  }
  for (var i = 0; i < str.length; i++) {
    if (hash[str[i]] && (str[i - 1] !== '+' || str[i + 1] !== '+')) {
      return false
    }
  }
  return true
}

// another one using a hash
function symb (str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz',
    hash = {},
    newStr = str.toLowerCase()
  for (var i = 0; i < alphabet.length; i++) {
    hash[alphabet[i]] = true
  }
  for (var i = 0; i < newStr.length; i++) {
    if (hash[newStr[i]] && (i === 0 || i === newStr.length - 1)) {
      return false
    }
    if (hash[newStr[i]] && newStr[i - 1] !== '+' && newStr[i + 1] !== '+') {
      return false
    }
  }
  return true
}
