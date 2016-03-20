// two solutions here

// one (recursive, O(n!) time):

function recursivePermutations(rest, soFar){
  var next
    , remaining
  if(rest == ''){
    console.log(soFar)
  } else {
    for(var i = 0; i < rest.length; i++){
      remaining = rest.substr(0, i) + rest.substr(i + 1, rest.length - 1)
      next = soFar + rest[i]
      recursivePermutations(remaining, next)
    }
  }
}
recursivePermutations(input, '')

// another way:
function combineChars(chars){
  var permutations = []
    , words        = []
    , firstChar
  if(chars.length === 1){
    permutations.push(chars)
    return permutations
  }
  firstChar = chars[0]
  chars = chars.substring(1, chars.length)
  words = combineChars(chars)
  for(var i = 0; i < words.length; i++){
    for(var j = 0; j < words[i].length + 1; j++){
      permutations.push(insertCharAt(words[i], firstChar, j))
    }
  }
  return permutations
}
function insertCharAt(word, charIn, i){
  var start = word.substring(0, i)
    , end   = word.substring(i, word.length)
  return start + charIn + end
}

