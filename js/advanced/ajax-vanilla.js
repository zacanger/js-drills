// rewrite ajax in vanilla js (like $.ajax)

function get(url, responseType){
  return new Promise(function(resolve, reject){
    var request = new XMLHttpRequest()
    request.open('GET', url)
    request.responseType = responseType
    request.onload = function(){
      if(request.status == 200){
        resolve(request.response)
      } else {
        reject(Error(request.statusText))
      }
    }
    request.onerror = function(){
      reject(Error('Network Error'))
    }
    request.send()
  })
}

// and, somewhere else:
get('url/api/something', 'text').then(function(x){
  console.log(x) // do stuff, i guess
})

