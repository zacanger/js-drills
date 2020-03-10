// write an express server!
// you'll need to run `npm i` in this directory (the package.json is done for you).
// your only dependency is express, here.
// let's have this server just serve a string to the client, rather than a file

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
 */

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app
  .get('/', (req, res) => {
    res.send('Hello World')
  })
  .listen(port)
