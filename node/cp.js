// node's `fs` is really swell. check out the API docs on
// it's `createReadStream()` and `createWriteStream()` methods.
// here we're going to rewrite `cp` (the copy utility) using `fs`.
// you'll need to import `fs`, and use `process.argv`
// argv = 'argument vector'. it's an array of arguments from the command line.
// the first two are always `node` and the full path of the file you're running
// (`/home/z/work/current/node-drills/` for example). so you'll need to start
// grabbing arguments at the third index.
// let's assume you're just copying one file to another. to run this you might do:
// `./index.js somefile aCopyOfThatFile`

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
 */

#!/usr/bin/env node

const fs = require('fs')
const from = process.argv[2]
const to = process.argv[3]
const readFrom = fs.createReadStream(from)
const writeTo = fs.createWriteStream(to)

console.log(from, '===>', to)

readFrom.on('data', (chunk) => { writeTo.write(chunk) })
readFrom.on('end', () => { writeTo.end() })
readFrom.on('error', (err) => { console.log('error!', err) })
writeTo.on('error', (err) => { console.log('error!', err) })
