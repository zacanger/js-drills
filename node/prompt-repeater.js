#!/usr/bin/env node

// write a small node script
// when you run it, it should say 'received data:' followed by anything you type in
// if you type 'quit', it should say 'bye', and then exit

process.stdin.resume()
process.stdin.setEncoding('utf8')

const { inspect } = require('util')

const done = () => {
  console.log('bye')
  process.exit()
}

process.stdin.on('data', (text) => {
  console.log('received data:', inspect(text))
  if (text === 'quit\n') {
    done()
  }
})
