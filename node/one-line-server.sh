#!/bin/sh

# write a one-line node server that assumes an index.html

node -e "require('http').createServer((req,res) => {require('fs').createReadStream(require('path').resolve(__dirname,'index.html')).pipe(res)}).listen(4444)"
