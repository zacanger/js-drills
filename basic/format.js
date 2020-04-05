// node has a `util.format`. this works like so:
// `console.log('some stuff and %s', things)`
// reimplement this in ES5 (no template strings)

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

function format() {
  const args = [].slice.call(arguments)
  const initial = args.shift()

  function replacer(text, replacement) {
    return text.replace('%s', replacement)
  }

  return args.reduce(replacer, initial)
}
