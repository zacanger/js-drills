// Write a function that takes in a string and can evaulate each type of brackets to determine
// if there are matching pairs. Return true if all opening brackets have a closing or
// return false if they do not.

var strPass = '({}[]{[]})'
var strFail = '({{{]}})'
var funcPass = 'function(array){ for(var i = 0; i < array.length; i++){alert(array[i]);}}'
var funcFail = 'function(array){for(var i = 0; i < array.length; i++){alert(array[i);}}'
function brackets (str) {
  var openBrackets = '([{'
  var closeBrackets = ')]}'
  var brackets = '[]{}()'
  var bracketObj = {}
  for (var i = 0, length = str.length; i < length; i++) {
    if (brackets.indexOf(str[i]) !== -1) {
      bracketObj[i] = str[i]
    }
  }
  for (var key in bracketObj) {
    if (openBrackets.indexOf(bracketObj[key]) !== -1) {
      for (var key2 in bracketObj) {
        if (closeBrackets.indexOf(bracketObj[key2]) !== -1 && Number(key2) > Number(key)) {
          if (bracketObj[key] === '(' && bracketObj[key2] === ')') {
            delete bracketObj[key]
            delete bracketObj[key2]
          } else if (bracketObj[key] === '[' && bracketObj[key2] === ']') {
            delete bracketObj[key]
            delete bracketObj[key2]
          } else if (bracketObj[key] === '{' && bracketObj[key2] === '}') {
            delete bracketObj[key]
            delete bracketObj[key2]
          }
        }
      }
    }
  }
  for (var key in bracketObj) return false
  return true
}
console.log(brackets(strPass))
console.log(brackets(strFail))
console.log(brackets(funcPass))
console.log(brackets(funcFail))

//
const brackets = (b) => {
  const bs = {
    ')':'(',
    ']':'[',
    '}':'{'
  }

  const s = []

  for (let i = 0; i < b.length; i++) {
    if ([ '{', '[', '(' ].includes(b[i])) {
      s.push(b[i])
    } else if (s[s.length - 1] === bs[b[i]]) {
      s.pop()
    } else {
      return false
    }
  }

  return s.length === 0
}
