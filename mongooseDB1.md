# MongoDB with Mongoose in NodeJS
Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. 
Mongoose provides a straight-forward, schema-based solution to model your application data. Mongoose supports both promises and callbacks. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

__Note:__ First be sure you have MongoDB and Node.js installed.
## Installation
Now install __Mongoose__ by below command line using __npm__
```node

$ npm install mongoose

```
## Importing
```node

// Using Normal NodeJS
const mongoose = require('mongoose');

// Using ES6
import mongoose from 'mongoose';

```
## Mongoose Overview
### Create connection for MongoDB
```node

await mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

```
__Note:__ First, We definded connection. If you are using only one database then use ```node mongoose.connection() ```. If you want to create additional connections, Than use ```node mongoose.createConnection```.

Both ```node connection ``` and ```node createConnection ``` need ```node mongodb:// ``` URI Or need parameters ```node host, database, port, options```.

__Once__ connected, the open event is fired on the Connection instance. If you're using mongoose.connect, the Connection is mongoose.connection. Otherwise, mongoose.createConnection return value is a Connection.

__Important!__ Mongoose buffers all the commands until it's connected to the database. This means that you don't have to wait until it connects to MongoDB in order to define models, run queries, etc.

## Defining a Model
For Model defining we need to create with __Schema interface__
```node

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date
});

```


