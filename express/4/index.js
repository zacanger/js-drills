// write an express server that removes the x-powered-by header
// it doesn't need to send anything specific

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
 */

const express = require('express')
const port = 8000
const app = express()

app.disable('x-powered-by')
// in older versions (pre 3) of express, this would be:
// app.use((req, res, next) => {
// res.removeHeader('x-powered-by')
// next()
// })
app.get('/', (req, res) => {
  res.send('hi')
})
// you could also do:
app.set('x-powered-by', false)
// or if you wanted to get fancy
app.use((req, res, next) => {
  res.setHeader('x-powered-by', 'something custom')
})
app.listen(port)
