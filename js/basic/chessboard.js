// make a chess board!

var size = 5
  , cb   = ''

for (var i = 1; i <= size; i++) {
  var charp = false
  if (i % 2 === 0) {
    charp = true
  } else {
    charp = false
  }
  for (var j = 1; j <= size; j++) {
    if (charp) {
      if (j % 2 === 0) {
        cb += ' '
      } else {
        cb += '#'
      }
    } else {
      if (j % 2 === 0) {
        cb += '#'
      } else {
        cb += ' '
      }
    }
  }
  cb += '\n'
}

console.log(cb)

