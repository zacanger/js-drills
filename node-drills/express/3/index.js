var express    = require('express')
  , bodyparser = require('body-parser')
  , items      = ['this thing', 'that thing', 'the other thing', '\'sup?']
  , app        = express()
  , port       = 9999

app.use(bodyparser.json())

app.get('/items', function(req, res, next) {
  console.log(req.body)
  res.send(items)
})

app.post('/items', function(req, res, next) {
  items.push(req.body.name);
  console.log(req.body);
  res.send(items);
});

app.put('/items', function(req, res, next) {
  var newPosition = req.body.position
  items[newPosition] = req.body.newName
  res.send(items)
})

app.delete('/items/:id', function(req, res, next) {
  console.log(req.params)
  items.splice(req.params.id, 1)
  res.send(items)
})

app.listen(port, function() {
  console.log('listening on,' port)
})

