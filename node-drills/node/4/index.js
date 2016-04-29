#!/usr/bin/env node

var net  = require('net')
  , repl = require('repl')
  , port = 5100

net.createServer(function(socket){
  var remote = repl.start(' |> ', socket)
}).listen(port)

console.log('remote repl available on ' + port)

var local = repl.start(' |> ')

