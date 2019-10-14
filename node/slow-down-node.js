const http = require('http')
const port = 6666

http.createServer((request, response) => {
  console.log('request received')
  for (let i = 0; i < 1000000000; i++) {
    console.log(i)
  } // wow, that was long. now, we can finally send a response.
  response.write(200, { 'Content-Type': 'text/html' })
  response.write('hello')
  response.end()
}).listen(port)
