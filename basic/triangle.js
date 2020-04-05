// log out a triangle of hashes (#)

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
 */

const txt = '#######'
for (let i = txt.length; i >= 0; i--) {
  console.log(txt.slice(i))
}

// or, taking an argument for size
const num = process.argv[2]
let str = ''
for (let i = num; i >= 1; i--) {
  str += '#'
  console.log(str)
}

// log out an equilateral triangle
const equiTri = (size = 10) => {
  const hash = ' #'
  const space = ' '
  for (let i = 0; i < size; i++) {
    const temp =
      space.repeat(size - 1) + hash.repeat(i) + space.repeat(size - i)
    console.log(temp)
  }
}
