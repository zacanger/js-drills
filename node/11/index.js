#!/usr/bin/env node

const
  proc    = process
, input   = proc.stdin
, output  = proc.stdout
, block   = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let
  count = 0
, player  = 'X'
, aPlayer = 'O'

input.setRawMode(1)
input.resume()
input.setEncoding('utf8')

function draw(){
  output.write('\033c' + block[0] + '|' + block[1] + '|' + block[2] + '\n' +
    block[3] + '|' + block[4] + '|' + block[5] + '\n' + block[6] + '|' +
    block[7] + '|' + block[8] + '\n')
}

function tic(first){
  if (typeof block[first - 1] == 'number') {
    block[first - 1] = player
    if (player == 'X') {
      player = 'O'
      aPlayer = 'X'
    } else {
      player = 'X'
      aPlayer = 'O'
    }
    count++
  }
}

function win(){
  if ((block[0] == block[4] && block[4] == block[8]) ||
      (block[2] == block[4] && block[4] == block[6]) ||
      (block[0] == block[1] && block[1] == block[2]) ||
      (block[3] == block[4] && block[4] == block[5]) ||
      (block[6] == block[7] && block[7] == block[8]) ||
      (block[0] == block[3] && block[3] == block[6]) ||
      (block[1] == block[4] && block[4] == block[7]) ||
      (block[2] == block[5] && block[5] == block[8])) {
  return 1
  }
}

input.on('data', key => {
  if (key == 'q') {
    proc.exit()
  }
  if (key > 0 && key <= 9) {
    tic(key)
  }
  draw()
  if (win()) {
    output.write(aPlayer + ' wins!' + '\n')
    proc.exit()
  }
  if (count > 8) {
    output.write('it\'s a draw!\n')
    proc.exit()
  }
})

draw()

