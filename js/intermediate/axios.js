// write a function that uses axios to get a line from github's 'zen' api
// and calls a callback with the returned response's data property
// the url is https://api.github.com/zen

import axios from 'axios'

const getZen = cb => {
  axios.get('https://api.github.com/zen')
  .then(res => {
    cb(res.data)
  })
}

