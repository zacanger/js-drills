// implement an insertion sort

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
 */

const insertionSort = nums => {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      snapshot(nums)
      if (nums[i] < nums[j]) {
        let spliced = nums.splice(i, 1)
        nums.splice(j, 0, spliced[0])
      }
    }
  }
}

const insertionSort = array => {
  if (array.length === 0 || !Array.isArray(array)) {
    throw new Error()
  }
  for (let i = 1; i < array.length; i++) {
    var tester = array[i], j = i
    while (j > 0 && tester <= array[j - 1]) {
      array[j] = array[j - 1]
      j--
    }
    array[j] = tester
  }
  return array
}
