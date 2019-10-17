// rewrite reduce (fold) as a standalone function

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
 */

const reduce = (fn, start, arr) => {
  let acc = start
  for (let i = 0; i < arr.length; ++i) {
    acc = fn(arr[i], acc)
  }
  return acc
}
