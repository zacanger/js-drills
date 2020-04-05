// repeat a string n amount of times
// example:
// repeat('foo', 2) // foo foo

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
 */

const r = (s, n) => s.repeat(n)

//
function repeat(str, num) {
  let newStr = ''
  if (num <= 0) {
    return newStr
  }
  for (let i = 0; i < num; i++) {
    newStr += str
  }
  return newStr
}

repeat('abc', 3)
