# Search data from database table in ejs

### 1st step to create a file search.ejs unsder views folter

#### ./views/search.ejs
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
    <form action="/search/" method="POST">
    <div class="col-md-3" style="margin-top: 20px">
      <label for="ByName">By Name</label>
      <input type="text" name="fltrname" placeholder="By Name" class="form-control">
    </div>
    <div class="col-md-3" style="margin-top: 20px">
      <label for="ByEmail">By Email</label>
      <input type="email" name="fltremail" placeholder="By Email" class="form-control">
    </div>
    <div class="col-md-3" style="margin-top: 20px">
      <label for="ByEmployeeType">By Employee Type</label>
      <select name="fltremptype" class="form-control">
        <option value="Hourly">Hourly</option>
        <option value="Fixed">Fixed</option>
      </select>
    </div>
    <div class="col-md-3" style="margin-top: 20px">
      <input type="submit" value="Search" name="submit" class="btn btn-success">
    </div>
  </form>
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
      <% if(records.length > 0) { %>
        <% records.forEach(function(row) { %>
          <tr>
            <td><%= row.name %></td>
            <td><%= row.email %></td>
            <td><%= row.etype %></td>
            <td><%= row.hourlyrate %></td>
            <td><%= row.totalhour %></td>
            <td><%= row.total %></td>
          </tr>
        <% }) } else { %>
          <tr>
            <td colspan="6">No Record Found!!!</td>
          </tr>
      <% } %>
    </tbody>
  </table>
  </body>
</html>

```

### 2nd step add get route for search page in index.js under routes

#### ./routes/index.js
```node

var express = require('express');
var empModel = require('../modules/employee');
var router = express.Router();
var employee = empModel.find({}); // Grab all the data from database
// Parse URL-encoded bodies (as sent by HTML forms)
router.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
router.use(express.json());
/* GET home page. */
router.get('/', function(req, res, next) {
  employee.exec( (err, data) => {
    if(err) throw err;

    res.render('index', { title: 'Employee Records', records: data });
  });
  
});

// Get Route for search form
router.get('/search', (req,res, next) => {
  employee.exec( (err, data) => {
    if(err) throw err;
    res.render('search-data', {title: 'Search data', records: data });
  });
});

module.exports = router;


```

### Now add code for search data in index.js
```node


// Post Route for search data

router.post('/search/', (req,res, next) => {
  var filterName = req.body.fltrname;
  var filterEmail = req.body.fltremail;
  var filterEType = req.body.fltremptype;

  if(filterName != '' && filterEmail != '' && filterEType !='') {
    var filterParameter = { $and: [ { name: filterName } , { $and: [ { email: filterEmail }, { etype: filterEType } ] }] }
  } else if(filterName != '' && filterEmail == '' && filterEType !='') {
    var filterParameter = { $and: [ { name: filterName } , { etype: filterEType } ] }  
  } else if(filterName == '' && filterEmail != '' && filterEType !='') {
    var filterParameter = { $and: [ { email: filterEmail } , { etype: filterEType } ] }  
  } else if(filterName == '' && filterEmail == '' && filterEType !='') {
    var filterParameter = { etype: filterEType }
  } else {
    var filterParameter = {};
  }
  var employeeFilter = empModel.find(filterParameter);
  employeeFilter.exec( (err, data) => {
    if(err) throw err;
    res.render('search-data', {title: 'Search data', records: data });
  });
});

```

### Last step to create schema under modules folder in employee.js
```node

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/employere', {useNewUrlParser: true});

const conn = mongoose.connection;

var employeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    etype: String,
    hourlyrate: Number,
    totalhour: Number,
    total: Number,
});

var employeeModel = mongoose.model('Employee', employeeSchema);

module.exports = employeeModel;

```

### Search data by name, by email or by emptype.

## The End





