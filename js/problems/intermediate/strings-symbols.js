// write a function that takes in a string and returns true or false based on
// if it's acceptable. the str witll be made of + and = with letters between
// them (example: '++d+===+c++==a'). the result should be true if each letter
// is surrounded by a +. assume the string has at least one letter.
// examples of input strings:
const
  str1 = '++d+===+c++==a'   // false
, str2 = '++d+===+c++=+a+'  // true
, str3 = 'F++d+===+c++=+a+' // false
, str4 = '+F++d+===+c++=+a' // false

