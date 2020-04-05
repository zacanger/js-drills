// write a function that checks for deep equality

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
 *
 *
 *
 *
 */

const deepEqual = (a, b) => {
  if (a === b) {
    return true
  }
  if (!a || !b) {
    return false
  }
  if (Array.isArray(a)) {
    return a.every((item, i) => deepEqual(item, b[i]))
  }
  if (typeof a === 'object') {
    return Object.keys(a).every((key) => deepEqual(a[key], b[key]))
  }
  return false
}

export default deepEqual
