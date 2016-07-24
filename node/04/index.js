#!/usr/bin/env node

const
  net  = require('net')
, repl = require('repl')
, port = 5100

net.createServer(socket => {
  let remote = repl.start(' |> ', socket)
}).listen(port)

console.log(`remote repl available on ${port}`)

let local = repl.start(' |> ')


// or
const
  net  = require('net')
, repl = require('repl')
, port = process.env.PORT || 5000

let connections = 0

repl.start({
  prompt : 'stdrepl|> '
, input  : process.stdin
, output : process.stdout
})

net.createServer(socket => {
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
