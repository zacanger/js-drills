// Given an array of word and a length, format the text
// so that each line has exactly length chars, and is
// fully justified. Pad evently with extra spaces. Fit as
// many words per line as possible. The last line can be left
// justified. Test with the below:

const words = 'This is an example of text justification.'.split(' ')
console.log(justify(words, 16))

const justify = (words, len) => {
  const
    lines = []
  let newLine = ''
  let i = 0
  let currentCount = 0
  let leftOver = 0
  let spacesInBetween = 0
  let spaces = ''

  while (i < words.length) {
    if (currentCount + words[i].length <= len) {
      newLine += words[i]
      newLine += ' '
      currentCount += words[i].length + 1
      i++
    } else {
      newLine = newLine.split('').splice(0, newLine.length - 1).join('')
      leftOver = len - currentCount
      if (spacesInBetween % 1 !== 0) {
        spacesInBetween = Math.floor(leftOver / (newLine.split(' ').length - 1))
        for (let k = 0; k < spacesInBetween; k++) {
          spaces += ' '
        }
        for (let j = 0; j < newLine.length; j++) {
          newLine[j] += spaces
        }
      } else {
        for (let m = 0; m < spacesInBetween; m++) {
          spaces += ' '
        }
        for (let n = 0; n < newLine.length; n++) {
          newLine[n] += spaces
        }
      }
      lines.push(newLine)
      spaces = ''
      newLine = ''
      leftOver = 0
      spacesInBetween = 0
      currentCount = 0

      if (i === words.length - 1) {
        lines.push(words[words.length - 1])
        break
      }
    }
  }
  return lines
}
