# Node Drills

* In each directory, you'll find an `index.js` with instructions.
* There _will_ be things in here that are completely unfamiliar. I strongly suggest
  keeping [this](https://nodejs.org/api/) open at first.
* There's a directory of bare Node (no Express/Koa/Hapi/whatever framework) problems.
* There's a handful of Express drills.
* The Mongo directory contains some reading material and problems for MongoDB and Mongoose.
* You'll touch on ES2015 going through these. It's time to exercies your Googling skillz!
  * Read up on `let`, `const`, and arrow functions.
  * You may need to upgrade Node. I highly recommend using `n` for this.
    * `npm i -g n ; n latest ; npm i -g npm`
* Remember that programming in Node should almost always be done asynchronously.
  * `require`s are synchronous; almost everything else should be using callbacks.

Here's an example of a very simple Node program, using modern ECMAScript.

```javascript
'use strict'

const
  net    = require('net')
, port   = 5678
, server = net.createServer(connection => {
  // do stuff
})
server.listen(port)
console.log(`server listening on ${port}`)
```

This is a lot of new material all at once. Do what you're comfortable doing.
If you're looking for something to do over interim week, maybe do some research
and try to finish the rest. If you power through them all, I'd definitely
recommend [trying this project](https://github.com/r-walsh/es6-profiles).

Have fun!

