// write a server that will run a game of rock-paper-scissors
// be able to send a post request (to, for example, '/play') with a choice
// of rock, paper, or scissors, and have the server respond with whether
// you've won or lost against the computer.
// you'll need express and body-parser for this.

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
 */

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 3000
const options = ['rock', 'paper', 'scissors']

const determineWinner = (human, computer) => {
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

app.use(bodyParser.json())

app.post('/play', (req, res) => {
  if (!req.body.choice) {
    return res.status(500).json('make a choice!')
  }

  const humanChoice = req.body.choice
  const index = Math.floor(Math.random() * options.length)
  const computerChoice = options[index]
  let result

  result =
    req.body.choice === computerChoice
      ? 'tie'
      : determineWinner(humanChoice, computerChoice)
  console.log(computerChoice)
  res.json(result)
})

app.listen(port, () => {
  console.log('listening on port:', port)
})
