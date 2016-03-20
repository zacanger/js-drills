// create a function that takes an array of strings as an argument
// and returns an object that contains the strings converted to base 64
// as keys and the length of the original strings as values.
// Each string should only be encoded once!

var strings = [
  'Like a Rolling Stone'
, 'Satisfaction'
, 'Imagine'
, 'What\'s Going On'
, 'Respect'
, 'Good Vibrations'
, 'Johnny B. Goode'
, 'Hey Jude'
, 'Smells Like Teen Spirit'
, 'What\'d I Say'
, 'Satisfaction'
, 'Imagine'
, 'Imagine'
, 'Good Vibrations'
, 'Hey Jude'
]

// code here
function encode (arr) {
  var obj = {}
  for (var i = arr.length - 1; i >= 0; i--) {
    var key = btoa(arr[i])
    if (!obj[key]) obj[key] = arr[i].length
  }
  return obj
}

console.log(encode(strings))

// should output
// {"TGlrZSBhIFJvbGxpbmcgU3RvbmU=":20 ... }
