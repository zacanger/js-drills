'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const app = express()

const quotes = [
  { author: 'someone', text: 'this is a bunch of words' },
  { author: 'asdfghjkl', text: 'hi hi hi hi hi' },
  { author: 'qwerty', text: 'dvorak' },
  { author: 'koolaidman', text: 'oOOHHhhh yeahhh' }
]

app
  .use(bodyParser.json())

  .get('/', (req, res) => {
    res.json(quotes)
  })

  .get('/quote/random', (req, res) => {
    const
      rand = ~~(Math.random() * quotes.length)
    const quote = quotes[rand]
    res.json(quote)
  })

  .get('/quote/:id', (req, res) => {
    if (quotes.length <= req.params.id || req.params.id < 0) {
      res.status(404).send('no quote found!')
    }
    const quote = quotes[req.params.id]
    res.json(quote)
  })

  .post('/quote', (req, res) => {
    if (!req.body.hasOwnProperty('author') || !req.body.hasOwnProperty('text')) {
      res.status(400).send('please provide author and text!')
    }
    const newQuote = {
      author: req.body.author,
      text: req.body.text
    }
    quotes.push(newQuote)
    res.json(true)
  })

  .delete('/quote/:id', (req, res) => {
    if (quotes.length <= req.params.id) {
      res.status(404).send('no quote here to delete!')
    }
    quotes.splice(req.params.id, 1)
    res.json(true)
  })

  .listen(port, () => {
    console.log(`listening on ${port}`)
  })
