// here we're going to serve the `index.html` file using just
// built-in node modules
// you'll be using `http` again, and also node's `fs` (filesystem).
// remember `__dirname`? you'll want to use that, too.

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

#! /usr/bin/env node

const http = require('http')
const fs = require('fs')
const path = require('path')
const index = path.resolve(__dirname, './index.html')
const port = 4444

http.createServer((req, res) => {
  const stream = fs.createReadStream(index)
  stream.on('open', () => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
  })
  stream.on('error', () => {
    res.writeHead(400)
    res.end()
  })
  stream.pipe(res)
}).listen(port)

console.log(`running on ${port}`)
