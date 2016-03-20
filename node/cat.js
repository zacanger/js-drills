// write `cat(1)` in node!

//
// this is a really basic example; it doesn't handle errors, and only works for first file
//
#!/usr/bin/env node
require('fs').createReadStream(process.argv[2]).pipe(process.stdout)


//
// this is better :)
//
#!/usr/bin/env node

'use strict'

const
  fs   = require('fs')
, args = process.argv.slice(2)

if(!args[0]){
  console.error('please specify file(s) to catenate')
} else {
  for(let i = 0; i < args.length; i++){
    fs.createReadStream(args[i]).pipe(process.stdout)
  }
}

//
// below is a much more exhaustive, windows-friendly `cat(1)`.
//
#!/usr/bin/env node

'use strict'

const fs = require('fs')

function cat(result, file){
  var
    stdout = ''
  , stderr = ''

  try {
    stdout = result.stdout + fs.readFileSync(file, 'utf8')
    stderr = result.stderr
  } catch(e){
    stdout = result.stdout
    stderr = result.stderr + ['cat: ', file, ': ', 'No such file or directory.'].join('')
  }
  return {stdout : stdout, stderr : stderr}
}
function nl(str){
  return str.length > 0 && str[str.length -1] !== '\n' ? str + '\n': str
}
function doCat(files){
  var results = files.reduce(cat, {stdout : '', stderr : ''})
  return {stdout : nl(results.stdout), stderr : nl(results.stderr)}
}
var results = doCat(process.argv.slice(2))
if(results.stderr.length){
  process.stderr.write(results.stderr)
}
if(results.stdout.length){
  process.stdout.write(results.stdout)
}
process.exit(results.stderr.length ? 1 : 0)

