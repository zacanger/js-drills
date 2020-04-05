/* We have a triabgle made of blocks.  The topmost row has 1 block,
 * the next row has 2 blocks, the next row has 3 blocks, and so on.
 * Compute the total number of blocks in such a triangle with the
 * given number of rows.

triangle(2) ---> 3
 *
* *

triangle(3) ---> 6
  *
 * *
* * *

triangle(4) --->
   *
  * *
 * * *
* * * *

triangle(5)
    *
   * *
  * * *
 * * * *
* * * * *

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
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
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

function triangle(n) {
  if (n === 1 || n === 0) {
    return n
  }
  return n + triangle(n - 1)
}

function triangleBuilder(n) {
  let arr = []
  for (let i = n; i >= 0; i--) {
    let lineArr = []
    const spaces = i
    const stars = n - i
    let spaceArr = []
    for (let j = 0; j < spaces; j++) {
      spaceArr.push(' ')
    }
    spaceArr = spaceArr.join('')
    let stArr = []
    for (let k = 0; k < stars; k++) {
      stArr.push('* ')
    }
    stArr = stArr.join('')
    lineArr.push(spaceArr)
    lineArr.push(stArr)
    lineArr.push(' \n')
    lineArr = lineArr.join('')
    arr.push(lineArr)
  }
  arr = arr.join('')
  return arr
}

console.log(triangleBuilder(5))
