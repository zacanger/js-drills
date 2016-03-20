// Create a function that can be invoked `n` number of times.

// Quick solution that doesn't handle arguments or anything fancy
function outer(cb, n) {
  return function() {
    if (n > 0) {
      n--;
      return cb();
    } else {
      return 'done';
    }
  };
};

// This solutions handles arguments in a similar way that .bind handles arguments.
// This solution also handles a cas if n is falsey. I should probably handle it to make
// sure that n is a number, and that it is greater than 0
function outer(cb, n) {
  var count = n || 1;
  var args = [];
  for (var i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  return function() {
    if (count > 0) {
      var innerArgs = [];
      for (var i = 0; i < arguments.length; i++) {
        innerArgs.push(arguments[i]);
      }
      count--;
      return cb.call(null, arguments.concat(innerArgs));
    } else {
      return 'done';
    }
  };
};

//test
function doTheThing() {
  return 'foo';
};
var newFoo = fooCounter(doTheThing, 3);
newFoo(); // foo
newFoo(); // foo
newFoo(); // foo
newFoo(); // done
