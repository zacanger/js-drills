// you've all seen a REPL, now. pretty cool stuff, right?
// it's really useful. why bother running chrome, opening up a new tab,
// opening devtools, and opening the console, when you can just run
// js in your terminal?
// let's write a REPL using nothing but node built-ins.
// you'll want to require `repl`, here.
// don't forget to `chmod +x index.js` and throw in the shebang
// if you want to execute this.
// bonus: check the API docs for `net`, and figure out how you could
// connect to this REPL remotely.
// bonus bonus: figure out how to start the repl and load in source files

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
 */

#!/usr/bin/env node

const net = require('net')
const repl = require('repl')
const port = 5100

net.createServer((socket) => {
  let remote = repl.start(' |> ', socket)
}).listen(port)

console.log(`remote repl available on ${port}`)

let local = repl.start(' |> ')


// or
const net = require('net')
const repl = require('repl')
const port = process.env.PORT || 5000

let connections = 0

repl.start({
  prompt: 'stdrepl|> ',
  input: process.stdin,
  output: process.stdout
})

net.createServer(socket => {
  connections += 1
  repl.start({
    prompt: 'nixsockrepl|> ',
    input: socket,
    output: socket
  }).on('exit', () => {
    socket.end()
  })
}).listen('/tmp/node-repl-sock')

net.createServer((socket) => {
  connections += 1
  repl.start({
    prompt: 'tcpsockrepl|> ',
    input: socket,
    output: socket
  }).on('exit', () => {
    socket.end()
  })
}).listen(port)



// this one lets you load in files
const
  fs   = require('fs')
, vm   = require('vm')
, path = require('path')
, repl = require('repl')

// let repl source files
repl.REPLServer.prototype.source = function(file){
  if (!~file.indexOf('.')) {
    file += '.js'
  }
  if (path.existsSync(file)) {
    vm.runInContext(fs.readFileSync(file).toString(), this.context)
  } else {
    this.outputStream.write('ERROR: file ' + file + ' not found!\n')
  }
  this.displayPrompt()
}

const server = repl.start()

// `./ filename` will source `./filename.js`
server.defineCommand('/', {
  help   : 'source file'
, action : function(file){
    this.source(file)
  }
})

// from command args
for (let i = 2; i < process.argv.length; i++){
  server.source(process.argv[i])
}



// so does this one
// npm i -S temp
// chmod +x thisFile.js
// ./thisFile.js someOtherFile.js

const temp = require('temp')
const fs = require('fs')
const repl = require('repl').start('> ')
const lastContents = {}
const inputFile = process.argv[2]

const hasChanged = (file, newData) => {
  let oldData = lastContents[file]
  if (!oldData) {
    return true
  }
  if (oldData.length != newData.length) {
    return true
  }
  for (let i = 0, l = oldData.length; i < l; i++) {
    if (oldData[i] != newData[i]) {
      return true
    }
  }
  return false
}

const reload = (file) => {
  fs.readFile(file, (err, data) => {
    if (err) {
      throw err
    }
    if (!hasChanged(file, data)) {
      return
    }
    if (file in lastContents) {
      console.log(`\nreloading ${file}\n`)
    }
    lastContents[file] = data
    temp.open('filerrepl-temp-source', (err, info) => {
      if (err) {
        throw err
      }
      fs.write(info.fd, data, 0, data.length, 0, (err, written) => {
        if (err) {
          throw err
        }
        try {
          let module = require(info.path)
          for (let each in module) {
            repl.context[each] = module[each]
          }
        } catch (e) {
          console.log(e.stack)
        }
      })
    })
  })
}

const start = (file) => {
  reload(file)
  fs.watchFile(file, reload.bind(null, file))
}

start(inputFile)
