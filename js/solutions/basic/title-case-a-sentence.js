// write a function that takes a string and capitalizes the first
// letter of each word. words will be separated by one space.

function titleCase (str) {
  str = str.toLowerCase()
  str = str.split(' ')
  var newStr = ''
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
    newStr += str[i] + ' '
  }
  return newStr.trim()
}

function titleCase (str) {
  var words = str.split(' ')
  for (var i = 0; i < words.length; i++) {
    var capitalized = words[i].charAt(0).toUpperCase()
    words[i] = capitalized + words[i].substring(1)
  }
  return words.join(' ')
}

