// Try writing a basic API server.
// You'll need express and body-parser
// Have a GET, POST, PUT, an DELETE,
// and use a mock database (you can just use an array or object)

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
 */

const express = require('express')
const bodyparser = require('body-parser')
const items = ['this thing', 'that thing', 'the other thing', '\'sup?']
const app = express()
const port = process.env.PORT || 9999

app.use(bodyparser.json())

app.get('/items', (req, res) => {
  console.log(req.body)
  res.send(items)
})

app.post('/items', (req, res) => {
  items.push(req.body.name)
  console.log(req.body)
  res.send(items)
})

app.put('/items', (req, res) => {
  let newPosition = req.body.position
  items[newPosition] = req.body.newName
  res.send(items)
})

app.delete('/items/:id', (req, res) => {
  console.log(req.params)
  items.splice(req.params.id, 1)
  res.send(items)
})

app.listen(port, () => {
  console.log('listening on', port)
})
