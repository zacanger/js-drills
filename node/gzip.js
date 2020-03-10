#!/usr/bin/env node

// write a compression cli tool using node's built-in gzip

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

const fs = require('fs')
const zl = require('zlib')
const ag = process.argv[2]
const ar = process.argv[3]
const zc = zl.createGzip()
const ot = process.stdout

if (!ar || !ag) {
  ot.write('please provide an input (file to compress) and an output\n')
} else {
  const rs = fs.createReadStream(ag)
  const ws = fs.createWriteStream(ar)
  rs.pipe(zc).pipe(ws)
}
