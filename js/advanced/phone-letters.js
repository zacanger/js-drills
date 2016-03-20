#!/usr/bin/env node

var input = process.argv[2]

(function(){
  var NUMBER_TO_LETTER_MAP = [
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
  (function(input){
    generateCombinations(input).forEach(function(s){
      console.log(s)
    })
  }(input))
  function generateCombinations(number){
    var finalCombinations = []
    combineWords(finalCombinations, '', number)
    return finalCombinations
  }
  function combineWords(finalCombinations, prefix, remaining){
    var letters = NUMBER_TO_LETTER_MAP[remaining.substr(0, 1)]
    if(remaining.length === 1){
      letters.forEach(function (letter){
        finalCombinations.push(prefix + letter)
      })
    } else {
      letters.forEach(function(letter){
        combineWords(finalCombinations, prefix + letter, remaining.substr(1))
      })
    }
  }
}())

