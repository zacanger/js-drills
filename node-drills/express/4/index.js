'use strict'

const
  express    = require('express')
, bodyParser = require('body-parser')
, port       = process.env.PORT || 3000
, app        = express()

let quotes = [
  {author : 'someone'    , text : 'this is a bunch of words'}
, {author : 'asdfghjkl'  , text : 'hi hi hi hi hi'}
, {author : 'qwerty'     , text : 'dvorak'}
, {author : 'koolaidman' , text : 'oOOHHhhh yeahhh'}
]

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json(quotes)
})

app.get('/quote/random', (req, res) => {
  let
    rand  = ~~(Math.random() * quotes.length)
  , quote = quotes[rand]
  res.json(quote)
})

app.get('/quote/:id', (req, res) => {
  if(quotes.length <= req.params.id || req.params.id < 0){
    res.status(404).send('no quote found!')
  }
  let quote = quotes[req.params.id]
  res.json(quote)
})

app.post('/quote', (req, res) => {
  if(!req.body.hasOwnProperty('author') || !req.body.hasOwnProperty('text')){
    res.status(400).send('please provide author and text!')
  }
  let newQuote = {
    author : req.body.author
  , text   : req.body.text
  }
  quotes.push(newQuote)
  res.json(true)
})

app.delete('/quote/:id', (req, res) => {
  if(quotes.length <= req.params.id){
    res.status(404).send('no quote here to delete!')
  }
  quotes.splice(req.params.id, 1)
  res.json(true)
})

app.listen(port, () => {
  console.log('listening on ' + port)
})

