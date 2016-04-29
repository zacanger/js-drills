#!/usr/bin/env node

// this is the same as that barest-server, just
// with a bit more helpful logging, dontcha know

var http = require('http')
  , port = 4444

http.createServer(function(req, res){
	res.end('yup', 200)
	console.log('hey now')
}).listen(port)

console.log('check yoself at ' + port)

