#!/usr/bin/env node

// write a bare node HTTP server, and serve a string to the client!

// this shebang is so we don't have to run this with
// `node index.js`
// in your terminal, `chmod +x index.js`, then you can just
// do `./index.js`

// you'll need to require node's built-in `http` module
// which has a method calld `createServer`


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
 */

#!/usr/bin/env node

const http = require('http')
const port = 4444

http.createServer((req, res) => {
  res.end('ok', 200)
  console.log('hi!')
}).listen(port)

console.log(`listening on ${port}`)
