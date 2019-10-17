// write a function that will allow you to insert
// a given word into phrase at index

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
 */

function insertAtIndexes (phrase, word, indexes) {
  let insertionOffset = 0
  for (let i = 0; i < indexes.length; i++) {
    // slices first param for 0 characters, at the index specified.
    // inserts second param at that index, then concats the rest of the first param onto the end of that.
    // repeats for each element in indices array.
    phrase = phrase.slice(0, indexes[i] + insertionOffset) + word + phrase.slice(indexes[i] + insertionOffset)
    // advances offset by the second param's length so as not to get things all out of order
    insertionOffset += word.length
  }
  return phrase
}

const insertAtIndices = (phrase, word, indices) => {
  // takes indices array, reverses.
  // map just performs the passed in function for each element in that array.
  indices.reverse().map(val => {
    // does the same sort of slicing and inserting as above.
    phrase = phrase.slice(0, val) + word + phrase.slice(val)
  })
  return phrase
}
