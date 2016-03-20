// characters to phone keys

function get_keypad_digits1(string){
  return String(string).toUpperCase().replace(/[A-Z]/g, function(l){
    return (l.charCodeAt(0) - 65) / 3 + 2 - ('SVYZ'.indexOf(l) > -1) | 0
  })
}
function get_keypad_digits2(string){
  return String(string).toUpperCase().replace(/[A-Z]/g, function(letter){
    return ({
      A : 2
    , B : 2
    , C : 2
    , D : 3
    , E : 3
    , F : 3
    , G : 4
    , H : 4
    , I : 4
    , J : 5
    , K : 5
    , L : 5
    , M : 6
    , N : 6
    , O : 6
    , P : 7
    , Q : 7
    , R : 7
    , S : 7
    , T : 8
    , U : 8
    , V : 8
    , W : 9
    , X : 9
    , Y : 9
    , Z : 9
    })[letter]
  })
}
function get_keypad_digits3(string){
  var lookup = [2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9]
  return String(string).toUpperCase().replace(/[A-Z]/g, function(letter){
    return lookup[letter.charCodeAt(0) - 65]
  })
}
var get_keypad_digits4 = (function(){
  var lookup = '22233344455566677778889999'
  return function(string){
    return String(string).toUpperCase().replace(/[A-Z]/g, function(l){
      return lookup[l.charCodeAt(0) - 65]
    })
  }
})()
var get_keypad_digits5 = (function(){
  var mapping = {
    A : 2
  , B : 2
  , C : 2
  , D : 3
  , E : 3
  , F : 3
  , G : 4
  , H : 4
  , I : 4
  , J : 5
  , K : 5
  , L : 5
  , M : 6
  , N : 6
  , O : 6
  , P : 7
  , Q : 7
  , R : 7
  , S : 7
  , T : 8
  , U : 8
  , V : 8
  , W : 9
  , X : 9
  , Y : 9
  , Z : 9
  }
  var replacer = function(letter){return mapping[letter]}
  return function(string){
    return String(string).toUpperCase().replace(/[A-Z]/g, replacer)
  }
})()
var get_keypad_digits6 = (function(){
  var array = [2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9]
  var replacer = function(letter){return array[letter.charCodeAt(0) - 65]}
  return function(string){
    return String(string).toUpperCase().replace(/[A-Z]/g, replacer)
  }
})()
var strings = [
  'Alpha'
, 'Bravo'
, 'Charlie'
, 'Delta'
, 'Echo'
, 'Foxtrot'
, 'Golf'
, 'Hotel'
, 'India'
, 'Juliet'
, 'Kilo'
, 'Lima'
, 'Mike'
, 'November'
, 'Oscar'
, 'Papa'
, 'Quebec'
, 'Romeo'
, 'Sierra'
, 'Tango'
, 'Uniform'
, 'Victor'
, 'Whiskey'
, 'X-ray'
, 'Yankee'
, 'Zulu'
]

