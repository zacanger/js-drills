// changing some part of html based on the current url
var ref = window.location.href
if (ref.indexOf('foo') > -1) {
  document.getElementById('bar').innerHTML('foo')
}
if (ref.indexOf('quux') > -1) {
  document.getElementById('bar').innerHTML('quux')
} else {
  document.getElementById('bar').innerHTML('howdy')
}

// and in angular
var ref = window.location.href
if (ref.indexOf('foo') > -1) {
  $scope.title = 'bar'
}
if (ref.indexOf('quux') > -1) {
  $scope.title = 'baz'
} else {
  $scope.title = 'howdy'
}
