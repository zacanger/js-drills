// turn an object into an array

// jq
var objy = {1: [1, 2, 3], 2: [4, 5, 6]}
var arry = $.map(objy, function(value, index){return [value]})
// [[1, 2, 3], [4, 5, 6]]

// vanilla
var objy = {1: 11, 2: 22}
var arry = Object.keys(obj).map(function(key){return obj[key]})
// [11, 22]

// es6
Object.keys(obj).map(key => obj[key])

// es7
var arry = Object.values(obj)

// _ (either one)
var arry = _.values(obj)

