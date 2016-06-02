 // write fn to convert roman numeral string to numbers

const additiveHash = {
  I : 1
, V : 5
, X : 10
, L : 50
, C : 100
, D : 500
, M : 1000
}

const subtractiveHash = {
  I : {V : true , X : true}
, X : {L : true , C : true}
, C : {D : true , M : true}
}

module.exports = string => {
  let result = 0

  for (let i = 0, l = string.length; i < l; i += 1) {
    const currentChar = string.charAt(i)
    const nextChar = string.charAt(i + 1)
    if (subtractiveHash[currentChar] && subtractiveHash[currentChar][nextChar]) {
      result -= additiveHash[currentChar]
    } else {
      result += additiveHash[currentChar]
    }
  }

  return result
}

