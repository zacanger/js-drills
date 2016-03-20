/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Example:
*   [
*     [ // one possible three round game outcome
*       'rock',    // round 1
*       'paper',   // round 2
*       'scissors' // round 3
*     ],
*     [ // next possible three round game outcome
*       'rock',    // round 1
*       'paper',   // round 2
*       'rock'     // round 3
*     ],
*   etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

var rockPaperScissors = function (numRounds) {
  if (numRounds <= 0) throw new Error('The number of rounds must be a positive number.')
  if (numRounds === 1) return [['rock'], ['paper'], ['scissors']]

  var possibleHands = ['rock', 'paper', 'scissors']
  var previous = rockPaperScissors(numRounds - 1)

  return previous.reduce(function (acc, cur) {
    possibleHands.forEach(function (hand) {
      acc.push(cur.concat(hand))
    })
    return acc
  }, [])
}
