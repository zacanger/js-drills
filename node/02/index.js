#! /usr/bin/env node

const
  http  = require('http')
, fs    = require('fs')
, path  = require('path')
, index = path.resolve(__dirname, './index.html')
, port  = 4444

http.createServer((req, res) => {
  const stream = fs.createReadStream(index)
  stream.on('open', () => {
    res.writeHead(200, {'Content-Type' : 'text/html'})
  })
  stream.on('error', () => {
    res.writeHead(400)
    res.end()
  })
  stream.pipe(res)
}).listen(port)

console.log(`running on ${port}`)
