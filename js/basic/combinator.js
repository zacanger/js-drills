// Write a function called combinator that is given two arrays as arguments.
// The first array is an array of first names, and the second array is an
// array of last names. Have the function return a new array combining
// the first names and the last names.

// combinator([‘Jason', ‘Dan’, ‘Cahlan’], [‘Turner’, ‘Kesler’, ‘Sharp’]); →
// [‘Jason Turner’, ‘Dan Kesler’, ‘Cahlan Sharp’];

function combinator(arr1, arr2) {
  var newArr = [];
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (i === j) {
        newArr.push(arr1[i] + ' ' + arr2[j]);
      }
    }
  }

  return newArr;
};

function combinator(arr1, arr2) {
  var newArr = [];
  for (var i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i] + ' ' + arr2[i]);
  }

  return newArr;
};

function combinator(arr1, arr2) {
  return arr1.map(function(val, i, arr) {
    return val + ' ' + arr2[i];
  });
};

function combinator (first, last) {
  return first.map(function(item, index){
    return item + " " + last[index]
  })
}
