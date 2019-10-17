// Write a mad-lib text generator. You're provided with a template
// and some words. Your function should fill the appropriate type
// of word into the template, at random.

const template = 'The ${adjective} brown ${noun} ${adverb} ' +
  '${verb} the ${adjective} yellow ' +
  '${noun}, who ${adverb} ${verb} his ' +
  '${noun} and looks around.'

const words = {
  adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
  noun: ['fox', 'dog', 'head', 'leg', 'tail'],
  verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
  adverb: ['easily', 'lazily', 'noisily', 'excitedly']
}

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
 */

const madLib = () => {
  const replaceText = (match) => {
    const key = match.replace(/[^a-z]/g, '')
    const index = Math.floor(Math.random() * words[key].length)
    return words[key][index]
  }

  return template.replace(/\${[a-z]+}/g, replaceText)
}

console.log(madLib())
