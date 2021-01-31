# Insert form POST data using Express's ejs(Embedded JavaScript templating) in NodeJS

* First install express js template engine __ejs__ 
```node
npm i ejs;
```

### _Overview of EJS_

* ``` <%  %> ``` 'Scriptlet' tag,Control flow.

* ``` <%=  %> ``` Outputs the value(HTML Escaped).

* ``` <%- %> ``` Outputs the unescaped value.

* ```  <%_  _%> ``` Whitespace-trim mode

* End with ``` -%> ``` for New line.

* ``` <%# ``` Comment tag.

* ``` _%> ``` Whitespace Slurping’ ending tag, removes all whitespace after it.

## Than install mongodb(mongoose)

```node
npm i mongoose

```
# Display data from database table

## Than create a new folder name modules

under modules folder create __employee.js__ file

#### ./modules/employee.js
```node

const mongoose = require('mongoose');
// Create connection
// 27017 is default port no and employee is database table name
mongoose.connect('mongodb://localhost:27017/employee', {useNewUrlParser: true});
// connection object
const conn = mongoose.connection;

// Create database table schema 
var employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  etype: String,
  hourlyrate: Number,
  totalhour: Number,
  total: number
});

// create schema object
var employeeModel = mongoose.model('Employee', employeeSchema);

// export module
module.exports = employeeModel;

```
## Now Create Route under ./routes/index.js main file

#### ./routes/index.js
```node 

const express = require('express');
const empModel = require('./modules/employee');
// create express Router object
var router = express.Router();

//Grab all the data from employee table
var employee = empModel.find({});

// Parse URL-encoded bodies (as sent by HTML forms)
router.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
router.use(express.json());
/* Get the home page Router */
router.get('/', (req,res,next) => {
  employee.exec((err, res) => {
    if(err) throw err;
    res.render('index', {title: 'Employee Records', records: data});
  });
});
// export router
module.exports = router;

```

## Now create HTML Table under ./views/index.ejs

#### ./views/index.ejs

```ejs

<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1><%= title %></h1>
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Emp Type</th>
          <th>Hourly Rate</th>
          <th>Total Hour</th>
          <Th>Total Amount</Th>
        </tr>
      </thead>
      <tbody>
        
          <% records.forEach(function(row) { %>
            <tr>
              <td><%= row.name %></td>
              <td><%= row.email %></td>
              <td><%= row.etype %></td>
              <td><%= row.hourlyrate %></td>
              <td><%= row.totalhour %></td>
              <td><%= row.total %></td>
            </tr>
          <% }) %>
        
      </tbody>
    </table>
   </body>
 </html>

```

# Insert data using form POST method

### First create HTML form under views/index.ejs

#### ./views/index.ejs

```ejs

<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1><%= title %></h1>
<!-- Insert form  -->
    <div class="container">
      <div class="row">
          <div id="signupbox" style="margin-top:50px" class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
              <div class="panel panel-info">
                  <div class="panel-heading">
                      <div class="panel-title">Employee Details Form</div>
                       </div>  
                  <div class="panel-body" >
                      <form action="/"  class="form-horizontal" method="post" >
                          
                          <div id="signupalert" style="display:none" class="alert alert-danger">
                              <p>Error:</p>
                              <span></span>
                          </div>
                              
                          <div class="form-group">
                              <label for="firstname" class="col-md-3 control-label">Name</label>
                              <div class="col-md-9">
                                  <input type="text" class="form-control" name="uname" placeholder="Enter Your Name">
                              </div>
                          </div>
                            
                          <div class="form-group">
                              <label for="email" class="col-md-3 control-label">Email</label>
                              <div class="col-md-9">
                                  <input type="text" class="form-control" name="email" placeholder="Email Address">
                              </div>
                          </div>
                              
                          
                          <div class="form-group">
                              <label for="lastname" class="col-md-3 control-label">Employee Type</label>
                              <div class="col-md-9">
                                <select class="form-control" name="emptype">
                                  <option value="Hourly">Hourly</option>
                                  <option value="Fixed">Fixed</option>
                                </select>
                              </div>
                          </div>
                          <div class="form-group">
                              <label for="password" class="col-md-3 control-label">Hourly Rate</label>
                              <div class="col-md-9">
                                  <input type="text" class="form-control" name="hrlyrate" placeholder="Enter Hourly Rate">
                              </div>
                          </div>
                              
                          <div class="form-group">
                              <label for="icode" class="col-md-3 control-label"> Total Hour</label>
                              <div class="col-md-9">
                                  <input type="text" class="form-control" name="ttlhr" placeholder="Enter Total Hours">
                              </div>
                          </div>
                          <div class="form-group">
                              <!-- Button -->                                        
                              <div class="col-md-offset-3 col-md-9">
                              <input type="submit" type="button"  value="submit" class="btn btn-primary">   
                              </div>
                          </div>
                      </form>
                   </div>
              </div>

  </body>
</html>


```

### Than add POST route in routes/index.js file

#### ./routes/index.js

```node

const express = require('express');
const empModel = require('./modules/employee');
// create express Router object
var router = express.Router();

//Grab all the data from employee table
var employee = empModel.find({});

// Parse URL-encoded bodies (as sent by HTML forms)
router.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
router.use(express.json());
/* Get the home page Router */
router.get('/', (req,res,next) => {
  employee.exec((err, data) => {
    if(err) throw err;
    res.render('index', {title: 'Employee Records', records: data});
  });
});

// Create POST Route
router.post('/', (req,res,next) => {
  var empDetails = new empModel({
    name: req.body.uname, // req.body.form_field_name
    email: req.body.email,
    etype: req.body.emptype,
    hourlyrate: req.body.hrlyrate,
    totalhour: req.body.ttlhr,
    total: parseInt(req.body.hrlyrate) * parseInt(req.body.ttlhr), //parseInt is use for parse only Int value. 
  });
  // save data into database table and redirect to data table
  employee.save( (err, resData) => {
    if(err) throw err;
    // After data insert redirect to data table with inserted data
    employee.exec( (err, data) => {
      if(err) throw err;
      res.render( 'index', { title: 'Insert data', records: data } )
     } )
  } );
});
// export router
module.exports = router;


```



