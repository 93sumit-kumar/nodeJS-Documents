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

const blogSchema = new Schema({
    author: ObjectId,
    title:  String, // String is shorthand for {type: String}
    
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    }
  });

```

### The permitted SchemaTypes are:
* __String__
* __Number__
* __Date__
* __Buffer__
* __Boolean__
* __Mixed__
* __Array__
* __ObjectId__
* __Decimal128__
* __Map__

The following example shows some of these features:

```node

const Comment = new Schema({
  name: { type: String, default: 'hahaha' },
  age: { type: Number, min: 18, index: true },
  bio: { type: String, match: /[a-z]/ },
  date: { type: Date, default: Date.now },
  buff: Buffer
});

// a setter
Comment.path('name').set(function (v) {
  return capitalize(v);
});

// middleware
Comment.pre('save', function (next) {
  notify(this.get('email'));
  next();
});

```

### Model Accessing
Once we define a model through ```node mongoose.model('ModelName', mySchema) ```, we can access it through the same function

```node

const MyModel = mongoose.model('ModelName');

```
Or just do it all at once

```node

const MyModel = mongoose.model('ModelName', mySchema);

```
First argument is the singular name of the model collection.

__Mongoose automatically looks for the plural version of your model name.__

__Ex:__

```node
const MyModel = mongoose.model('Ticket, mySchema');

```
Now Mongoose will create model for your __Tickets__ collection, not your __Tiket__ collection.

After Creating our Model __save__ the instance
```node

const instance = new MyModel();
instance.my.key = 'hello';
instance.save(function (err) {
  //
});

```

