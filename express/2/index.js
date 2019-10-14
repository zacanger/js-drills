#!/usr/bin/env node

const path = require('path')
const http = require('http')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const server = http.createServer(app)

app.set('port', port)

const onServerListening = ()=> {
  console.log(`Listening on ${ app.get('port') }`)
}

const onServerError = (error) => {
  console.log(error)
}

server.listen(app.get('port'))
server.on('listening', onServerListening)
server.on('error', onServerError)

app.get('/', (req, res) => {
  res.send('Hello ES6!')
})
