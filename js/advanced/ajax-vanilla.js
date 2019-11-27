// rewrite $.get (ajax) in vanilla js

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
 */

function get (url, responseType) {
  return new Promise(function (resolve, reject) {
    var request = new XMLHttpRequest()
    request.open('GET', url)
    request.responseType = responseType
    request.onload = function () {
      if (request.status == 200) {
        resolve(request.response)
      } else {
        reject(Error(request.statusText))
      }
    }
    request.onerror = function () {
      reject(Error('Network Error'))
    }
    request.send()
  })
}

// and, somewhere else:
get('url/api/something', 'text').then(function (x) {
  console.log(x) // do stuff, i guess
})

// or

// post
var request = new XMLHttpRequest()
request.open('POST', '/some/thing', true)
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
request.send(data)

// json
var request = new XMLHttpRequest()
request.open('GET', '/as/df', true)
request.onload = function () {
  if (request.status >= 200 && request.status < 400) {
    var data = JSON.parse(request.responseText)
  } else {
    console.log('hmph.')
  }
}
request.onerror = function () {
  console.error('whoops')
}
request.send()
