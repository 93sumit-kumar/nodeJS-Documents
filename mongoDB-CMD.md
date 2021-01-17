# Setup MongoDB to Localhost
#### Compass: 
MongoDB Compass is used for userInterface(UI) to view the database with all tables.
* MongoDB has auto ID for every data in a table.

__1st Step:__ Download MongoDB community server or Enterprise Server as per requirements.

__2nd Step:__ In Windows Install the downloaded server.

__3rd Step:__ To check the MongoDb configuration type __mongod__ in cmd.

__4th Step:__ To continue use MongoDB using CMD than just type __mongo__ command in cmd.

## Now using MongoDB with CMD

### Show all the database using CMD
```cmd

// 1st start the MongoDB server
$ mongo

// than use the command to show the database
$ show dbs

```
### Select the database using CMD
```cmd

// Select database command
$ use database_name

```
### Show the database tables or you can say database collections
```cmd

// Show database connection command
$ show collections

```
### To Create new database using CMD
```cmd

// To Create Database 1st write use database_name command
$ use database_name

// Than use below command
$ db.createCollection('inventory')
// if return {ok:1} means created successfully

```
### To Create new database collection using CMD
```cmd

// Select Database
$ use inventory

// than create new collection for inventroy
$ db.createCollection('inventory')

```
### To Insert the single data into database collection using CMD
```cmd

// Insert single data into collection
$ db.collection_name.insertOne({ data_in_json_format })

// Ex.
$ db.collection.inventory.insertOne({name: 'Sumit Kumar', email: '93kr.sumit@gmail.com', phone: 850*****43})

// Success Output
{
   "acknowledged" : true,
   "insertedId" : ObjectId("60034cc04dac76889873c5b8")
}

```
### TO find the data from database collection using CMD
```cmd

// Find the single data from collection
$ db.inventory.find({ name: 'Sumit'})

// Output: Fetch the database according to name where name = sumit

```
### To Find the data from database collection with Beautfy 
```cmd

// using pretty() to display data in style format
$ db.inventory.find({name: 'Sumit kumar'}).pretty()

```
### To Insert Many data into database collection using CMD
```cmd

// Insert many data using insertMany
db.inventory.insertMany([
   { name: 'Sumit Singh',email: 'sumit@gmail.com', phone: 767*****52 },
   { name: 'Amit Kumar', email: 'amit@gmail.com', phone: 985*****52 },
   { name: 'Ram', email: 'ram@gmail.com', phone: 785*****85 }
])

// Output:
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("600354d84dac76889873c5b9"),
                ObjectId("600354d84dac76889873c5ba"),
                ObjectId("600354d84dac76889873c5bb")
        ]
}

```
### To Find All Data From Database Collection using CMD
```cmd

// Find all data
$ db.inventory.find({}).pretty()

// Return all data
```

## Here is some conditional operator in MongoDB

* __$lt__ means __lessthan__
* __$gt__ means __greaterthan__
* __$lte__ means __lessthan Equalto__
* __$gte__ means __greaterthan Equalto__
__ETC......__

### To use IN in select data from collection using CMD
```cmd

// Find data according to IN
$ db.inventory.find( { field_name: { $in: ['value1', 'value2', 'value3'] } } )

```
## Note: 
According to SQL we need to set table schema 1st than insert the data according to table schema. But in MongoDB we can change our table schema whenever required and not neccessery to insert data according to table schema we can create our own schema according to requirement.

### Specify AND condition with lessThan condition using CMD
```cmd

// $lt = lessthan

```






