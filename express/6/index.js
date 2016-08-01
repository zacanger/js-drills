// write an express server that removes the x-powered-by header
// it doesn't need to send anything specific

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
app.listen(port)
