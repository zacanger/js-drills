#!/usr/bin/env node

// write a rock-paper-scissors game in node!
// we'll want to run it like `./rock-paper-scissors.js rock`
// (or paper, or scissors, obviously).

var round = 0

function rpc (arg) {
  var choices = ['Rock', 'Paper', 'Scissors']
    , random  = function(){return Math.floor(Math.random() * 3)}
    , title   = arg
    , ans     = choices[random()]

 arg = arg.toLowerCase()

 if (arg === ans.toLowerCase()) {
   console.log ('Tie! ' + title + ' vs. ' + ans)
 }

 if (ans === 'Paper') {
   if (arg === 'rock')
     console.log (title + ' lost to ' + ans)
   if (arg === 'scissors') {
     console.log (title + ' beat ' + ans)
   }
 }

 if (ans === 'Rock') {
   if (arg === 'paper') {
     console.log (title + ' beat ' + ans)
   }
   if (arg === 'scissors')
     console.log (title + ' lost to ' + ans)
 }

 if (ans === 'Scissors') {
   if (arg === 'rock') {
     console.log (title + ' beat ' + ans)
   }
   if (arg === 'paper') {
     console.log (title + ' lost to ' + ans)
   }
 }
}

rpc(process.argv[2])

