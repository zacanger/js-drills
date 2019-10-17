function countBsOld (txt) {
  var counter = 0
  for (var i = 0; i <= txt.length; i++) {
    if (txt.charAt(i) === 'B') counter++
  }
  return counter
}

function countChar (txt, character) {
  var counter = 0
  for (var i = 0; i <= txt.length; i++) {
    if (txt.charAt(i) === character) counter++
  }
  return counter
}

function countBs (txt) {
  return countChar(txt, 'B')
}
