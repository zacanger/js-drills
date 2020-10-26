// write a translator that takes in a file
// and outputs that file in morse code

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

const fs = require('fs')

function show_props(obj, moresC, objName) {
  let result = ''

  for (const prop in obj) {
    if (moresC == obj[prop]) {
      result = prop
    }
  }
  return result
}

fs.readFileSync(process.argv[2])
  .toString()
  .split('\n')
  .forEach((line) => {
    if (line !== '') {
      const code = {
        A: '.-',
        B: '-...',
        C: '-.-.',
        D: '-..',
        E: '.',
        F: '..-.',
        G: '--.',
        H: '....',
        I: '..',
        J: '.---',
        K: '-.-',
        L: '.-..',
        M: '--',
        N: '-.',
        O: '---',
        P: '.--.',
        Q: '--.-',
        R: '.-.',
        S: '...',
        T: '-',
        U: '..-',
        V: '...-',
        W: '.--',
        X: '-..-',
        Y: '-.--',
        Z: '--..',
        0: '-----',
        1: '.----',
        2: '..---',
        3: '...--',
        4: '....-',
        5: '.....',
        6: '-....',
        7: '--...',
        8: '---..',
        9: '----.',
      }

      line = line.split(' ')

      let output = ''

      for (let i = 0; i <= line.length; i++) {
        if (line[i] !== '') {
          show_props(code, line[i], 'o')
          output += result
        } else {
          output += ' '
        }
      }

      process.stdout.write(output)
    }
  })
