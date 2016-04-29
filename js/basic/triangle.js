// log out a triangle of hashes (#)

const txt = '#######'
for (let i = txt.length; i >= 0; i--) {
  console.log(txt.slice(i))
}

// or, taking an argument for size
const num = process.argv[2]
let str   = ''
for (let i = num; i >= 1; i--) {
  str += '#'
  console.log(str)
}

