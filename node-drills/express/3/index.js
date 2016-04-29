const
  express    = require('express')
, bodyparser = require('body-parser')
, items      = ['this thing', 'that thing', 'the other thing', '\'sup?']
, app        = express()
, port       = process.env.PORT || 9999

app
.use(bodyparser.json())

.get('/items', (req, res) => {
  console.log(req.body)
  res.send(items)
})

.post('/items', (req, res) => {
  items.push(req.body.name)
  console.log(req.body)
  res.send(items)
})

.put('/items', (req, res) => {
  let newPosition    = req.body.position
  items[newPosition] = req.body.newName
  res.send(items)
})

.delete('/items/:id', (req, res) => {
  console.log(req.params)
  items.splice(req.params.id, 1)
  res.send(items)
})

.listen(port, () => {
  console.log('listening on', port)
})

