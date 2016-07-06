// write a xor function (exclusive 'or'). example usage:
// xor(false, false) // => false
// xor(true, false)  // => true

// this is beautiful
const xor = (a, b) => !a != !b

// the above, just in more words
function xor (x, y) {
  return (!x != !y)
}

// verbosely
const xor = (val1, val2) => {
  if (val1 && val2 || !val1 && val2) {
    return false
  } else {
    return true
  }
}

if ((foo && !bar) || (!foo && bar)) {
  // quux, baz
}

// ternary operator?
const xor = (thingOne, thingTwo) => {
  if (thingOne ? !thingTwo : thingTwo) {
    return true
  }
  return false
}

// using the bitwise XOR
function XOR (x, y) {
  return (x ? 1 : 0) ^ (y ? 1 : 0)
}
