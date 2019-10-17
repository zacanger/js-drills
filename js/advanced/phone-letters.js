#!/usr/bin/env node

const input = process.argv[2]

const convert = () => {
  const NUMBER_TO_LETTER_MAP = [
    [],
    [],
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z']
  ]

  generateCombinations(input).forEach(s => {
    console.log(s)
  })

  function generateCombinations (number) {
    const finalCombinations = []
    combineWords(finalCombinations, '', number)
    return finalCombinations
  }
  function combineWords (finalCombinations, prefix, remaining) {
    const letters = NUMBER_TO_LETTER_MAP[remaining.substr(0, 1)]
    if (remaining.length === 1) {
      letters.forEach(letter => {
        finalCombinations.push(prefix + letter)
      })
    } else {
      letters.forEach(letter => {
        combineWords(finalCombinations, prefix + letter, remaining.substr(1))
      })
    }
  }
}

convert()
