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

//log out an equilateral triangle instead of a boring right triangle.

const equiTri = size => {
  const hash = ' #';
  const space = ' ';
  
  for(let i =0; i < size; i++){
    let temp = space.repeat(size-i) + hash.repeat(i) + space.repeat(size-i)
    console.log(temp)
  }
}
