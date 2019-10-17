#!/usr/bin/env node

// write a small cli app you can call to check
// if a website is up.
// usage: check-up.js google.com

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
 */

const http = require('http')
const host = process.argv[2]
const opts = {
  host,
  port: 80,
  path: '/'
}

http.get(opts, (res) => {
  if (res.statusCode === 200) {
    console.log(`${host} is up`)
  } else {
    console.log(`${host} is down`)
  }
}).on('error', (err) => {
  console.warn(`Error: ${err.message}`)
})
