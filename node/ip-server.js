#!/usr/bin/env node

// write a small server that just echos the user's IP address
// bonus: allow JSON
// don't use any third-party libs (just core node)

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
 */

const http = require('http')
const dns = require('dns')
const port = process.env.PORT || 5000

http
  .createServer((req, res) => {
    let ip
    if (req.method === 'GET') {
      ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
      dns.reverse(ip, handleResponse)
    } else {
      res.writeHeader(501)
      res.end()
    }

    function handleResponse(error, domains) {
      switch (req.headers.accept) {
        case 'application/json':
          const data = { ip: ip }
          if (!error && domains.length > 1) {
            data.hostname = domains[0]
          }
          res.writeHead(200, { 'content-type': 'application/json' })
          res.write(JSON.stringify(data))
          res.end()
          break
        default:
          res.writeHead(200, { 'content-type': 'text/plain' })
          res.write(ip)
          res.end()
      }
    }
  })
  .listen(port)
