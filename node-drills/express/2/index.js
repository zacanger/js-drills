#!/usr/bin/env node

'use strict'

// npm i -S express

const
  path    = require('path')
, http    = require('http')
, express = require('express')
, app     = express()
, port    = process.env.PORT || 3000
, server  = http.createServer(app)

app.set('port', port)

function onServerListening(){
  console.log(`Listening on ${ app.get('port') }`)
}

function onServerError(error){
  console.log(error)
}

server.listen(app.get('port'))
server.on('listening', onServerListening)
server.on('error', onServerError)

app.get('/', (req, res) => {
  res.send('Hello ES6!')
})

