This will need express and body-parser.

Make a server for a quotes API! Assume you have data (the quotes) provided.
Feel free to hard-code them in somewhere, like:

```javascript
let quotes = [
  {author : "Person McPersonly"  , "text" : "I frequently like to person around."}
, {author : "Something Humanoid" , "text" : "What are you looking at?"}
]
```

Allow the client to perform a get request for all quotes, requests for specific quotes
(params), and to post and delete quotes. And, just for fun, why not let them get a
random quote as well?

The solution branch uses a few ES2015 features: `let` and `const` take the place of `var`,
and the arrow function is used frequently. Especially in Node, where anonymous functions
are _everywhere_ (because Node is all about the callbacks), this shorthand can be quite a
time-saver. Here's are two usage examples:

```
// ES5.1
app.listen(port, function(){
  console.log('listening on port ' + port)
})

// ES2015
app.listen(port, () => {
  console.log('listening on port ' + port)
})

// ES5.1
var returner = function(returnMe){
  return returnMe
}

// ES2015
var returner = returnMe => returnMe
```

[And a good blog post on what's new with arrow functions](https://www.nczonline.net/blog/2013/09/10/understanding-ecmascript-6-arrow-functions/).

