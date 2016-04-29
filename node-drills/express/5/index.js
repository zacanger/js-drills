'use strict'

// rock-paper-scissors

const
  express    = require('express')
, bodyParser = require('body-parser')
, app        = express()
, port       = process.env.PORT || 3000
, options    = ['rock', 'paper', 'scissors']

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
  let
    humanChoice    = req.body.choice
  , index          = Math.floor(Math.random() * options.length)
  , computerChoice = options[index]
  , result

  if (req.body.choice === computerChoice) {
    result = 'tie'
  } else {
    result = determineWinner(humanChoice, computerChoice)
  }
  console.log(computerChoice)
  res.json(result)
})

.listen(port, err => {
  if (err) {
    return console.error(err)
  }
  console.log('listening on port:', port)
})

