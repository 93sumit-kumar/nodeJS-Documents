## Insert query with expressJS
### _Steps:_

* __1st Step:__ Install mongoose module using ```node npm i mongoose ```.
* __2nd Step:__ Create Database and collection using mongo compass UI or from cmd.
* __3rd Step:__ Create Database connection.
* __4th Step:__ Create collection object.
* __5th Step:__ Create table schema for collection.
* __6th Step:__ Open the collection and save the data in collection.

### _Let's Start_
```node
const mongoose = require('mongoose');
// Create database connection
mongoose.connect('mongodb://localhost:27017/employee', {useNewUrlParser: ture});
//Create connection object
var conn = mongoose.connection;

// Create collection object
const employeeSchema = new mongoose.schema({
  name: String,
  email: String,
  etyle: String,
  hourlyrate: Number,
  totalhour: Number,
  total: Number
});

// Create Schema for collection
const employeeModel = mongoose.model('Employee', employeeSchema); // Employee is now collection with employees. So, always use collection without s .
var employee = new employeeModel({
  name: 'Sumit Singh',
  email: '93kr.sumit@gmail.com',
  etyle: 'hourly',
  hourlyrate: 16,
  totalhour: 10,
  
});
// create function to calculate total salary in var name total
employeeSchema.methods.totalSalary = () => {
  return this.hourlyrate* this.totalHour;
}
employee.total = emloyee.totalSalary();

// check connection
conn.on('Connected', function() {
    console.log("connected successfully");
});
// Check disconnection
conn.on('disconnection', function() {
    console.log('disconnected  sucessfully');
});
// check error while connection
conn.on('error', console.error.bind(console, 'connection error'));
// open database collection and insert the data
conn.once('open', function() {
    sumit.save( (err,res) => {
        if(err) throw err;
        console.log(res);
        conn.close();
    } )
});


```
### _Output:_

```node
// Output:
 _id: 6009f6017cd1b41c98d2c9f1,
  name: 'Sumit',
  email: 'sumit@gmail.com',
  etype: 'hourly',
  hourlyrate: 10,
  totalHour: 16,
  total: 160,
  __v: 0

```
