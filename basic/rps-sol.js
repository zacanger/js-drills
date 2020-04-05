// write a function that generates every sequence
// a single player could throw over a 3-round game
// of rock-paper-scissors
//
// Example:
//   [
//     [ // one possible three round game outcome
//       'rock',    // round 1
//       'paper',   // round 2
//       'scissors' // round 3
//     ],
//     [ // next possible three round game outcome
//       'rock',    // round 1
//       'paper',   // round 2
//       'rock'     // round 3
//     ],
//   etc...
//   ]
//

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
 */

function rps() {
  const rounds = 3
  let combinations = 0
  const result = []
  const options = ['rock', 'paper', 'scissors']
  for (let i = 0; i < rounds; i++) {
    for (let j = 0; j < rounds; j++) {
      for (let k = 0; k < options.length; k++) {
        result.push([options[i], options[j], options[k]])
        combinations++
      }
    }
  }
  console.log('combinations:', combinations)
  console.log(result)
  return result
}

rps()
