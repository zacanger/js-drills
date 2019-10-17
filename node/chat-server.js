// this is super advanced, but...
// see if you can write a server for a chat
// something you could connect to using
// `nc localhost 5678` (or whatever port)

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

//
// complex one
//
#!/usr/bin/env node

const
  net     = require('net')
, sockets = [] // connected people
, port    = process.argv[2] || process.env.PORT || 5678
, server = net.Server(socket => {
  sockets.push(socket) // connecting, announcing number of connections
  socket.write(`there are ${sockets.length} people chatting`)

  for (let i = 0; i < sockets.length; i++) { // announcing newbie
    console.log('new user; total of ' + sockets.length)
    if (sockets[i] == socket) { // except to newbie
      continue
    }
    sockets[i].write('one user joined\n')
  }

  socket.on('data', (d) => { // the chat
    for (let i = 0; i < sockets.length; i++) {
      if (sockets[i] == socket) {
        continue // don't send message to sender
      }
      sockets[i].write(d) // send message
      console.log('message sent')
    }
  })
  socket.on('end', () => { // remove disconnected peeps
    let i = sockets.indexOf(socket)
    sockets.splice(i, 1)

    for (let i = 0; i < sockets.length; i++) { // tell people when people leave
      sockets[i].write('one user left\n')
      console.log(`user left; total of ${sockets.length}`)
    }
  })
})
server.listen(port)
console.log(`chat server running on ${port}`)


//
// simpler version
//
const
  net     = require('net')
, sockets = []
, port    = 5678
, server = net.createServer(socket => {
  socket.write('welcome to the chat\n')
  sockets.push(socket)

  socket.on('data', data => {
    sockets.forEach(s => {
      if (s != socket) {
        s.write(data)
      }
    })
  })

  socket.on('end', () => {
    sockets.forEach((s, i) => {
      if (s == socket) {
        sockets.slice(i,1)
      }
    })
  })
})

server.listen(port)
console.log(`server listening on ${port}`)
