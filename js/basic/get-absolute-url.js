// get an absolute url from a string variable. assuming you're on the example.com domain:
// getAbsoluteUrl('/foo') // => http://example.com/foo

var getAbsoluteUrl = (function () {
  var a
  return function (url) {
    if (!a) {
      a = document.createElement('a')
    }
    a.href = url
    return a.href
  }
})()
