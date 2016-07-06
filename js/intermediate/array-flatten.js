// take array with possible nested arrays ; flatten it

// this is gross don't ever do this
const iteratively = array => {
  for (let i = 0, l = array.length; i < l; i += 1) {
    if (Array.isArray(array[i])) {
      // if the item at ith index is an array
      array = [
        ...array.slice(0, i), // portion of the before the ith index
        ...array[i], // the item of ith index, which is an array
        ...array.slice(i + 1, l) // portion of the after the ith index
      ]
      l = array.length // update the value of l as length of the array has increased
      i -= 1 // the item at current ith idex could be an array
    }
  }

  return array
}

// this is better
const recursively = array => {
  return array.reduce((previous, current) => {
    return previous.concat(
      // if current item is an array flatten it
      Array.isArray(current) ? recursively(current) : current
    )
  }, [])
}

// do it like this
const inOneLine = a => Array.isArray(a) ? [].concat(...a.map(inOneLine)) : a

// this is the old js version of the above one-liner
function moreLines(a) {
  var newArr
  if (Array.isArray(a)) {
    return (newArr = []).concat.apply(newArr, a.map(moreLines))
  }
  return a
}

// don't do this even more than you shouldn't do that one up there
function grossWay(input) {
  var flattened = []
  for (var i = 0; i < input.length; ++i) {
    var current = input[i]
    for (var j = 0; j < current.length; ++j) {
      flattened.push(current[j])
    }
  }
}

// this won't work all the way down
function nah(input){
  var flattened = input.reduce(function(a, b){
    return a.concat(b)
  }, [])
}

// neither will this
function nope(input){
  var res = Array.prototype.concat.apply([],input)
  return res
}

//
function flatten (arr) {
  const flat = [].concat(...arr)
  return flat.some(Array.isArray) ? flatten(flat) : flat;
}

//
function flatten(array) {
  return array.reduce((previous, current) =>
      Array.isArray(current)
    ? [...previous, ...flatten(current)]
    : [...previous, current]
    , []
  )
}

//
const flattened = arg.reduce((a, b) => a.concat(b))
