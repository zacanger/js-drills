#!/usr/bin/env node

// rewrite `cp(1)` in node!

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
