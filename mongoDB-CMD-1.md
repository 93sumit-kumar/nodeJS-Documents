# MongoDB with CMD command

## Aggregate in MongoDB using CMD

First create a new table `orders` under `inventory` table.
```cmd

//List all the DBs
$ show dbs

// Use inventory database table
$ use inventory

// Create orders table and insert many data
$ db.orders.insertMany([
  { "cust_id": 1, "qty": 2, "amount": 200 },
  { "cust_id": 2, "qty": 2, "amount": 300 },
  { "cust_id": 3, "qty": 2, "amount": 400 },
  { "cust_id": 2, "qty": 2, "amount": 400 },
  { "cust_id": 1, "qty": 2, "amount": 200 }
])

```
To show the data of `orders` table
```cmd
// display all the data
$ db.orders.find()

```
### Now create own aggregate function 
```cmd

$ db.orders.aggregate([
  { $match: { "cust_id":1 } }, // where condition
  { $group: { '_id': "$cust_id", total: { $sum: "amount" } } } // Group by total amount and _id is custom name you can change according to your req.
])

```

### Get some column value from table using aggregation projection using CMD

__Note:__ `column_field: 1` means to display the field data. `column_field: 0` means to not display the field data. __You can not use `1` & `0` in same query only _id can define 0__
```cmd

//Using aggreration
$ db.inventory.aggregate( [ { $project: { "item": 1, "qty": 1, "amount": 1 } } ] ).pretty()

```
### Get some column value from table using aggregation without projection using CMD
```cmd

// display = 1, Not display = 0
$ db.inventory.find({}, { "item": 1, "qty": 1, "amount": 1 }).pretty()

```
### Lookup(JOIN) in MongoDB using CMD
```cmd

// lookup means JOIN
$ db.inventory.aggregate([
  { $match: { "item":"computer" } },
  { $lookup: { from: "orders", localField: "item", foreginField: "item",as: "order_details" } }
]).pretty()

```
* __Note:__ localField means comman field which is available in both table and forgineField means what what data you want to get.

### Sort in MongoDB usingg cmd
```cmd

// 1 for ASC 
$ db.inventory.find().sort({ "item": 1 })

// Output will be in ASC order


// -1 for DESC
$ db.inventory.find().sort({ "item": -1 })

// Output will be in DESC order

```
### Skip in MongoDB using cmd

In skip function inter how many no you want to skip from top.
if you want to remove from bottom than you have also use sort before skip.

Let's see below __Ex:__

```cmd

// skip from top
$ db.inventory.find().skip(2)

// Output remove top 2 rows data

// skip from bottom
$db.inventory.find().sort({ "_id": -1 }).skip(2)

//Output: 1st data get in DESC order than remove 2 data from top.
// show 2 data remove from bottom as per _id

```
### Limit in MongoDB using cmd
```cmd

// Limit from top
$ db.inventory.find().limit(2)

// Output Show top 2 rows data

// limit from bottom
$db.inventory.find().sort({ "_id": -1 }).limit(2)

//Output: 1st data get in DESC order than show 2 data from top.
// show 2 data limit from bottom as per _id

```
### Indexes in MongoDB using cmd
Indexes support the efficient execution of queries in MongoDB. Without indexes, MongoDB must perform a collection scan, i.e. scan every document in a collection, to select those documents that match the query statement.
```cmd

// using users collection uder test
$ db.users.getIndexes()

//Output: data with indexes

// Create Indexes
$ db.users.createIndex({ "email":1 }) // ASC order

// Output: added one more index in DB

```
### Schema Validation(DataType validation)

MongoDB provides the capability to perform schema validation during updates and insertions.

MongoDB also provides the following related options:

validationLevel option, which determines how strictly MongoDB applies validation rules to existing documents during an update, and
validationAction option, which determines whether MongoDB should error and reject documents that violate the validation rules or warn about the violations in the log but allow invalid documents.

For example, the following example specifies validation rules using JSON schema:
```cmd
db.createCollection("students", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: [ "name", "year", "major", "address" ],
         properties: {
            name: {
               bsonType: "string",
               description: "must be a string and is required"
            },
            year: {
               bsonType: "int",
               minimum: 2017,
               maximum: 3017,
               description: "must be an integer in [ 2017, 3017 ] and is required"
            },
            major: {
               enum: [ "Math", "English", "Computer Science", "History", null ],
               description: "can only be one of the enum values and is required"
            },
            gpa: {
               bsonType: [ "double" ],
               description: "must be a double if the field exists"
            },
            address: {
               bsonType: "object",
               required: [ "city" ],
               properties: {
                  street: {
                     bsonType: "string",
                     description: "must be a string if the field exists"
                  },
                  city: {
                     bsonType: "string",
                     description: "must be a string and is required"
                  }
               }
            }
         }
      }
   }
})

```
### Create MongoDB backup and Restore
* __Backup__
__1st Step:__ Create a folder
__2nd Step:__ In CMD go to that folder
__3rd Step:__ type mongodump to take backup of all the database
* __Restore__
__1st Step:__ delete database using ```cmd $ use table_name; than $ db.dropDatabase() ```
__2nd Step:__  in CMD go to that backup folder
__3rd Step:__ Type mongorestore to restore data

```cmd


```






