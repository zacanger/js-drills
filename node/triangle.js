#!/usr/bin/env node

// make a triangle of hashes (#)
// make it the height of the number passed in on the command line

var num = process.argv[2]
  , str = ''
for (var i = num; i >= 1; i--) {
  str += '#'
  console.log(str)
}

