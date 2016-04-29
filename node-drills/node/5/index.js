var http = require('http')

http.createServer(function(request, response){
  console.log('request received')
  for(var i = 0; i < 1000000000; i++){
    console.log(i)
  } //wow, that was long. now, we can finally send a response.
  response.write(200, {'Content-Type': 'text/html'})
  response.write('hello')
  response.end()
}).listen(6666)

