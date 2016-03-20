// Write a function that accepts a function and timeout, x,
// in number of milliseconds. It will return a new function
// that can only be executed on per timeout period - and if
// the function is invoked during the timeout period, the timeout
// period restarts. This is useful for functions that can be
// need to be blocked on subsequent attempts over short period
// of times. Once such is example, is clicks on a button.

// Once written, add a third parameter that will allow the
// function to be executed immediately if set to true. Otherwise
// the function will run at the end of the timeout period.

function debounce(cb, x, execute) {
  var flag = true;
  var timeId;
  function resetFlag() {
    timeId = setTimeout(function() {
      flag = true;
    }, x);
  };

  return function() {
    if (execute) {
      return cb();
    }

    if (flag) {
      flag = false;
      resetFlag();
      return cb();
    } else {
      flag = false;
      clearTimeout(timeId);
      resetFlag();
      return 'too soon';
    }
  };
};



// test your code
function test() {
  return 'gooood. goooooooood';
}
var inner = debounce(test, 4000);
var inner2 = debounce(test, 2000, true);
var inner3 = debounce(test, 3000, false);
