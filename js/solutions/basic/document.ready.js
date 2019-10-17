// can you rewrite document.ready (without jquery)?

/*
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

// document.ready w/o jq
document.onreadystatechange = function () {
  if (document.readyState == 'complete') {
    // do all the stuff here
  }
}

// or
document.addEventListener('DOMContentLoaded', function () {
  // do all the stuff here
})

// or, smaller, with older (IE) support
function r (f) {
  /in/.test(document.readyState) ? setTimeout('r(' + f + ')', 9) : f()
}
