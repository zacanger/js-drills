#!/usr/bin/env node

const
  http = require('http')
, port = 4444

http.createServer((req, res) => {
  res.end('ok', 200)
  console.log('hi!')
}).listen(port)

console.log(`listening on ${port}`)
