'use strict'

// rock-paper-scissors

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000
const options = ['rock', 'paper', 'scissors']

function determineWinner (human, computer) {
  if (human === 'rock' && computer === 'scissors') {
    return 'human'
  } else if (human === 'scissors' && computer === 'paper') {
    return 'human'
  } else if (human === 'paper' && computer === 'rock') {
    return 'human'
  } else {
    return 'computer'
  }
}

app
  .use(bodyParser.json())

  .post('/play', (req, res) => {
    if (!req.body.choice) {
      return res.status(500).json('make a choice!')
    }

    const humanChoice = req.body.choice
    const index = Math.floor(Math.random() * options.length)
    const computerChoice = options[index]
    let result

    if (req.body.choice === computerChoice) {
      result = 'tie'
    } else {
      result = determineWinner(humanChoice, computerChoice)
    }
    console.log(computerChoice)
    res.json(result)
  })

  .listen(port, (err) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('listening on port:', port)
  })
