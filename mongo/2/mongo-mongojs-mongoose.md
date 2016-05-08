# MONGO, MONGOJS, & MONGOOSE

Push yourself.

Answer these on your own time, if you'd like to. We don't do quizzes here,
so this is entirely self-led. If you're unfamiliar with any of these topics, MongoDB and Mongoose
both have pretty good API docs.

## General Topics
* CRUD
  * general groupings for action definitions
  * comparison to MongoJS methods
* Creating/Using A Controller
* Documents DB Attributes
  * flexible properties (vs column creation)
  * loosely typed values (vs column data_type validation)

## Mongoose vs MongoJS
* Why/How Mongoose Adds:
  * Validations
  * Data_Types
  * Prototypical Functions
  * Code Management (chaining callbacks/promises)

## Schemas
* define the 'shape' of documents within
* a schema is mapped to a collection
  * Data_Type
  * Validations
    * Required
  * Indexing
  * Unique

## Models
* constructors compiled from schema definitions
* instances of models represent documents

## Mongoose Lifecycle
* Model
  1. Scheme defined -- configuration for a document constructor
  1. Model created -- document constructor
* Request/Response
  1. Document -- query instance building
  1. Docuemnt -- pre-middleware
  1. Document -- request sent to mongo
  1. Document -- response returned
  1. Document -- post-middleware
  1. Callback/promise invoked

## CRUD w/ Mongoose
* Documents
  * Build
    * Create a new instance of a Model by passing in a JS Object
  * Execution Methods
    * save
* Queries
  * Run Methods
    * nearly every method except save
  * Building Methods
    * where
    * limit
    * sort
    * select
  * Execution Method
    * exec -- sends request && returns promise

## Middleware && Hooks
* Inject functions to be run at certain points in the lifecycle for certain actions
* Lifecycle Hooks
  * pre
  * post
* Methods
  * save
  * remove
  * count
  * find
  * findOne
  * findOneAndRemove
  * findOneAndUpdate
  * update


Example: making sure a first name is capitalised before saving into Mongo:
```javascript
var schema = new mongoose.Schema({
  name : String
, age  : Number
})
schema.pre('save', function(next) {
  this.name = this.name.charAt(0).toUpperCase() * this.name.slice(1)
  next()
})
```

```javascript
Person
.find()
.where('role').equals('admin')
.where('age').gt(30)
.limit(10)
.sort(-'name)
.exec(function(err, persons) {
  //do this next
})
```

bcrypt:
```javascript
//basic schema
var schema = new mongoose.Schema({
  username : String
, password : String
})

//middleware to save a hashed password
schema.pre('save', function(next) {
  var user = this
  if (!user.isModified('password')) {
    return next()
  }
  bcrypt.genSalt(12, function(err, salt) {
    if (err) return next(err)
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err)
      user.password = hash
      next()
    })
  })
})

//Login comparison method
schema.methods.comparePassword = function(pass) {
  var deferred = q.defer()
  bcrypt.compare(pass, this.password, function(err, isMatch) {
    if (err) {
      return deferred.reject(err)
    }
    return deferred.resolve(isMatch)
  }
  return deferred.promise
}

//Usage inside a controller
User.findOne({email: req.body.email}).exec().then(function(err, user) {
  user.comparePassword(req.body.password)
  .then(function(isMatch) {
    if (isMatch) {
      //log them in!
    }
  })
  .catch(function(err) {
    //no luck!
  })
})
```


```javascript
// queries

//find
Person
.find({occupation : 'engineer'})
.exec(function(err, person) {
  //do this next
})

//findOne
Person
.findOne({
  email : 'someone@something.stuff'
})
.exec(function(err, person) {
  //do this next
})
```

--------

# SELF QUIZ

## MongoJS vs Mongoose
* Give a business case where Mongoose would be preferred to MongoJS
* Give a business case where MongoJS would be preferred to Mongoose

## Schemas
* Write a userSchema that conforms to the following property requirements:
  * moniker
    * string
    * min length of 8
    * ensure this always exists
  * hair_style
    * string
    * only allow values: "on fleek", "busy bee", "SOS"
  * facial_hair
    * boolean
    * make this 'false' if not provided
  * number_of_eyes
    * number
    * max of 3

* Given the schema below, sort the queries in order of most efficient to least efficient.

```javascript
{
  name      : String
, email     : String
, bio       : String
, createdAt : Date
, age       : 26
}
```

```javascript
User.find({name: function(doc) { return doc.charAt(0) === 'F'; }}).exec()
User.findOne({name: function(doc) { return doc.charAt(0) === 'F'; }}).exec()
User.findOne({name: new RegExp('^F'}).exec()
User.findOne({bio: new RegExp('some phrase', 'g').exec()
User.findOne({createdAt: {'$gt': new Date(2015, 02, 12)}}).exec()
User.findOne({age: 12}).exec()
```

## General
* Put the following components into a hierarchy:
  * Documents
  * Databases
  * Collections
* What data structure does Mongo use to store documents?
* Can you think of two ways a document store differs from a relational database?
* Are calls from Node to Mongo synchronous or asynchronous?

## Lifecycle
* What does having multiple phases in req/res help us accomplish?
* How is the Mongoose's req/res cycle similar to Express's?

