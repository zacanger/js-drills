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

function rps () {
  var rounds = 3
  var combinations = 0
  var result = []
  var options = ['rock', 'paper', 'scissors']
  for (var i = 0; i < rounds; i++) {
    for (var j = 0; j < rounds; j++) {
      for (var k = 0; k < options.length; k++) {
        result.push([options[i], options[j], options[k]])
        combinations++
      }
    }
  }
  console.log('combinations:', combinations)
  console.log(result)
  return (result)
}

rps()
