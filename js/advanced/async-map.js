// implement a function asyncMap.
// takes two params: array of tasks, callback.
// each task takes separate cb, invokes when complete.
// cb passed to asyncMap is performed on results of cbs of tasks.
// order of results should be same as order of tasks.
// once all cbs are returned, asyncMap should invoke cb on results array.
// example:
// asyncMap([
//  function(cb){
//    setTimeout(function(){
//      cb('one')
//    }, 200)
//  },
//  function(cb){
//    setTimeout(function(){
//      cb('two')
//    }, 100)
//  }
// ],
//  function(results){
//    // the results array will equal ['one','two'] even though
//    // the second function had a shorter timeout.
//    console.log(results); // ['one', 'two']
// })
