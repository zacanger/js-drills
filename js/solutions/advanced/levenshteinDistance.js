/*
Given two strings, compute the Levenshtein distance between them i.e. the minimum number of edits required to convert one string into the other.

For example, the Levenshtein distance between "kitten" and "sitting" is 3.

The minimum steps required to transform the former into latter are:

kitten → sitten (substitution of "s" for "k")
sitten → sittin (substitution of "i" for "e")
sittin → sitting (insertion of "g" at the end)

Mathematically, the Levenshtein distance between two strings a, b (of length i and j respectively) is given by leva,b (i, j) where

leva,b(i, j) = max(i, j)    if min(i, j) = 0,
                  min( lev a,b(i-1, j) + 1, lev a,b(i, j-1) + 1, lev a,b(i-1, j-1) + cost )   otherwise.

where cost is 0 when a = b and 1 otherwise.
*/

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
 */

const levDist = (a, b) => {
  if (a === b) return 0
  if (a.length === 0) return b.length
  if (b.length === 0) return a.length

  const matrix = []
  for (let i = 0; i <= a.length; i++) {
    matrix.push([])
    for (let j = 0; j <= b.length; j++) {
      if (i === 0) matrix[i][j] = j
      else if (j === 0) matrix[i][j] = i
      else matrix[i][j] = 0
    }
  }

  let cost
  for (let k = 1; k <= a.length; k++) {
    for (let n = 1; n <= b.length; n++) {
      if (a[k - 1] === b[n - 1]) cost = 0
      else cost = 1
      matrix[k][n] = Math.min(matrix[k - 1][n] + 1, matrix[k][n - 1] + 1, matrix[k - 1][n - 1] + cost)
    }
  }
  return matrix[a.length][b.length]
}

//
const levDist2 = (a, b) => {
  if (a === b) return 0
  if (a.length === 0) return b.length
  if (b.length === 0) return a.length

  const row1 = []
  const row2 = []
  for (let i = 0; i <= b.length; i++) {
    row1.push(i)
    row2.push(0)
  }

  let cost
  for (let k = 0; k < a.length; k++) {
    row2[0] = k + 1
    for (let n = 0; n < b.length; n++) {
      if (a[k] === b[n]) cost = 0
      else cost = 1
      row2[n + 1] = Math.min(row2[n] + 1, row1[n + 1] + 1, row1[n] + cost)
    }
    for (let j = 0; j < b.length; j++) {
      row1[j] = row2[j]
    }
  }
  return row2[b.length]
}
