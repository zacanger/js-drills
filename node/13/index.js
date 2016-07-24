#!/usr/bin/env node

const
  fs = require('fs')
, zl = require('zlib')
, ag = process.argv[2]
, ar = process.argv[3]
, zc = zl.createGzip()
, ot = process.stdout

if (!ar || !ag) {
  ot.write('please provide an input (file to compress) and an output\n')
} else {
  const
    rs = fs.createReadStream(ag)
  , ws = fs.createWriteStream(ar)
  rs.pipe(zc).pipe(ws)
}
