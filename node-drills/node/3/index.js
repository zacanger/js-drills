#!/usr/bin/env node

var fs       = require('fs')
  , from     = process.argv[2]
  , to       = process.argv[3]
  , readFrom = fs.createReadStream(from)
  , writeTo  = fs.createWriteStream(to)

console.log(from, '===>', to)

readFrom.on('data', function(chunk){
  writeTo.write(chunk)
})
readFrom.on('end', function(){
  writeTo.end()
})
readFrom.on('error', function(err){
  console.log('error!', err)
})
writeTo.on('error', function(err){
  console.log('error!', err)
})
