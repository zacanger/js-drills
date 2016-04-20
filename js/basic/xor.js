// write a xor function (exclusive 'or'). example usage:
// xor(false, false) // => false
// xor(true, false)  // => true

const xor = (a, b) => !a != !b

function xor(x, y){
  return(!x != !y)
}

let xor = (val1, val2) => {
  if (val1 && val2 || !val1 && val2) {
    return false
  } else {
    return true
  }
}

