#!/usr/bin/env node

// write a node repl that you can connect to remotely

const
  net  = require('net')
, repl = require('repl')
, port = process.env.PORT || 5000

var connections = 0

repl.start({
  prompt : 'stdrepl|> '
, input  : process.stdin
, output : process.stdout
})

net.createServer((socket) => {
  connections += 1
  repl.start({
    prompt : 'nixsockrepl|> '
  , input  : socket
  , output : socket
  }).on('exit', () => {
    socket.end()
  })
}).listen('/tmp/node-repl-sock')

net.createServer((socket) => {
  connections += 1
  repl.start({
    prompt : 'tcpsockrepl|> '
  , input  : socket
  , output : socket
  }).on('exit', () => {
    socket.end()
  })
}).listen(port)

