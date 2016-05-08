1. Open a terminal and run ‘mongod’
1. Open a 2nd terminal and run ‘mongo’
  - You’re now running the mongo ‘shell’ it’s a command line way to interact with mongo
  - the concepts behind these queries are constant between the command line, mongojs in code and mongoosejs in code.
  - All of the rest of the instructions are to be run in this new terminal where you ran mongo
1.  run ‘show dbs’
  -  This shows you all of your databases
1. run ‘use lowes’
  - This will make a new database and call it lowes and point ‘db’ at it
1. run ‘db’
  - This will list the current db you’re using
1. run ‘show dbs’
  - Still not there because it’s empty
1. run ‘db.createCollection(“lumber”)
1. run ‘db.lumber.insert({“name”: “pine”, “cost”:19.99, “size”:”4x8”})
  - We’re giving it a Json object
  - We said ‘use lowes’ which means this command is equal to lowes.lumber.insert(...)
1. run ‘db.lumber.find()
  - this will find all pieces of lumber at lowes
1. Insert (Oak, 19.99, 4x8) into lumber  [See step 8]
1. Insert (Walnut, 29.99, 4x6) into lumber  [See step 8]
1. run ‘db.lumber.find();
1. run ‘db.lumber.find({“name”: “pine”});
1. run ‘db.lumber.find({“cost”: 19.99})
1. run ‘db.lumber.find({“size”: “4x8”})
1. copy the _id off of any one of the pieces of lumber we’ve made
  - Hint: You need the ObjectId wrapper too
    * ObjectId("55cb6302542d813345fbf925")
1. run ‘db.lumber.find({“_id”: ..the id you copied..})
1. run ‘db.lumber.update({“_id”: ..the id you copied..}, {“cost”: 12.99})
  - We’re having a sale!
  - The first object you pass in is the <query> object.  It’s used like in find to find the object we’re going to change.
  - By using the _id property we can be sure we’re only changing one item
  - The second object you pass in is the <update> object.  It tells mongo what properties to update on ALL items the query found
1. run ‘db.lumber.find()
  - Look for our new item that’s on sale
1. run ‘db.lumber.update(“_id”: ..the id you copied..}, {“onSale”: “true”})
1. run ‘db.lumber.find()
  - We can add properties on an update.  These are flexible objects and not all objects have to be the same
1. run ‘db.lumber.find({“onSale”: “true”})
  - Objects that don’t have properties we’re for are just ignored when querying
1. Create a new collection called ‘tools’
1. Tools will have  name, cost, and metal properties (IE {“name”: ... , “cost”: … , “metal” : …});
1. Insert (Hammer, 2.99, steel) into tools
1. Insert (Hammer, 3.99, bronze) into tools
1. Insert (Hammer, 9.99, titanium) into tools
1. Insert (Screwdriver, 1.99, steel) into tools
1. Insert (Screwdriver, 2.50, bronze) into tools
1. Insert (Screwdriver, 6.99, titanium) into tools
1. Insert a steel, bronze, and titanium wrench into tools. make up your prices
1. find all hammers
1. find all tools that are steel
1. run ‘db.tools.find({“cost”: { $lt: 3.99 } })’
  - We just found all tools with a cost less than (lt) 3.99
  - Comparison operators are here: http://docs.mongodb.org/manual/reference/operator/query-comparison/
1. Find all tools with a cost less than or equal to 3.99
1. Find all tools with a cost greater than 3.99
1. Find all Hammers and wrenches (using the $in operator)
1. Find all Screwdrivers using (using the $nin operator)
  - Hint it’s the exact same as the answer to 37 just change the operator from $in to $nin
1. Find all Hammers and screwdrivers using the $ne operator

