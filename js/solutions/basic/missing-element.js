// There is an array of non-negative integers. A second array is formed by
// shuffling the elements of the first array and deleting a random element.
// Given these two arrays, find which element is missing in the second array.

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
 */

function findMissing (arr1, arr2) {
  var hash1 = {}
  var hash2 = {}
  for (var i = 0; i < arr1.length; i++) {
    hash1[arr1[i]] = true
  }

  for (var i = 0; i < arr2.length; i++) {
    hash2[arr2[i]] = true
  }

  for (var key in hash1) {
    if (!hash2[key]) {
      return key
    }
  }
}
