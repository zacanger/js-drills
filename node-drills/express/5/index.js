'use strict'

// rock-paper-scissors

var
  express    = require('express')
, bodyParser = require('body-parser')
, app        = express()
, port       = process.env.PORT || 3000
, options    = ['rock', 'paper', 'scissors']


app.use(bodyParser.json())

app.post('/play', function (req, res) {
  if (!req.body.choice) {
    return res.status(500).json('make a choice!')
  }
  var
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

app.listen(port, function (e) {
  if (e) {
    return console.error(e)
  }
  console.log('listening on port:', port)
})

