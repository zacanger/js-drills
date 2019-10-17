#!/usr/bin/env node

// write a rock-paper-scissors game in node!
// we'll want to run it like `./rock-paper-scissors.js rock`
// (or paper, or scissors, obviously).

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
 */

const rpc = (arg) => {
  const choices = ['Rock', 'Paper', 'Scissors']
  const title = arg
  arg = arg.toLowerCase()
  const random = () => Math.floor(Math.random() * 3)
  const ans = choices[random()]

  if (arg === ans.toLowerCase()) {
    return `Tie! ${title} vs. ${ans}.`
  }
  if (ans === 'Paper') {
    if (arg === 'rock') {
      return `${title} lost to ${ans}.`
    }

    if (arg === 'scissors') {
      return `${title} beat ${ans}.`
    }
  }

  if (ans === 'Rock') {
    if (arg === 'paper') {
      return `${title} beat ${ans}.`
    }

    if (arg === 'scissors') {
      return `${title} lost to ${ans}.`
    }
  }

  if (ans === 'Scissors') {
    if (arg === 'rock') {
      return `${title} beat ${ans}.`
    }

    if (arg === 'paper') {
      return `${title} lost to ${ans}.`
    }
  }
}

console.log(rpc(process.argv[2]))
