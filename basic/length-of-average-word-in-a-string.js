// find the average length of each word in a string

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
 */

const lengthOfString = function (myString) {
  const words = myString.split(' ')
  let average = 0
  let total = 0
  for (const element of words) {
    total += element.length
  }
  average = total / words.length
  return average
}
