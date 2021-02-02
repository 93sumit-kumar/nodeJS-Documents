## Edit & Delete Query using ejs in NodeJS

* Add get route for HTML form for edit & delete in ejs

### edit page ./routes/index.js

```node

// Route to get the edit delete page
router.get('/action', (req,res,next) => {
  employee.exec( (err,data) => {
    if(err) throw err;

    res.render('edit-delete-data', {title: 'Action', records: data});
  });
});

```

* Edit the table with action for edit and delete data

### ./view/edit-delete-data.ejs file

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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/fontawesome.min.css" integrity="sha512-shT5e46zNSD6lt4dlJHb+7LoUko9QZXTGlmWWx0qjI9UhQrElRb+Q5DM7SVte9G9ZNmovz2qIaV7IWv0xQkBkw==" crossorigin="anonymous" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/js/fontawesome.min.js" integrity="sha512-pafh0hrrT9ZPZl/jx0cwyp7N2+ozgQf+YK94jSupHHLD2lcEYTLxEju4mW/2sbn4qFEfxJGZyIX/yJiQvgglpw==" crossorigin="anonymous"></script>
    <link rel='stylesheet' href='/stylesheets/style.css' />
  </head>
  <body>
    <h1><%= title %></h1>
    <% if(locals.msg) { %>
    <h4 class="alert alertprimary"><%= msg %></h4>
    <% } %>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Emp Type</th>
          <th>Hourly Rate</th>
          <th>Total Hour</th>
          <th>Total Amount</th>
          <th>Action</th>
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
              <td><a href="/edit/<%= row._id %>" class="btn btn-primary"><i class="far fa-edit"></i></a>&nbsp;&nbsp;<a href="/delete/<%= row._id %>" class="btn btn-danger"><i class="fas fa-trash-alt"></i></a></td>
            </tr>
          <% }) %>
        
      </tbody>
    </table>
    </body>
</html>

```

## Now add get router for edit data

### edit file ./routes/index.js

```node

// Route for edit data
router.get('/edit/:id', (req,res,next) => {
  var id = req.params.id;
  var edit = empModel.findById(id);

  // render file
  edit.exec( (err,data) => {
    if(err) throw err;
    res.render('edit-form', {title: 'Edit form', records: data});
  });
  
});

```

## Now create a form for edit the data

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
                      <div class="panel-title">Employee Details Form</div><br>
                       </div>  
                  <div class="panel-body" >
                      <form action="/update/"  class="form-horizontal" method="post" >
                          
                          <div id="signupalert" style="display:none" class="alert alert-danger">
                              <p>Error:</p>
                              <span></span>
                          </div>
                             <input type="hidden" name="id" value="<%=records._id %>"> 
                          <div class="form-group">
                              <label for="firstname" class="col-md-3 control-label">Name</label>
                              <div class="col-md-9">
                                  <input type="text" class="form-control" name="uname" value="<%= records.name %>" placeholder="Enter Your Name">
                              </div>
                          </div>
                            
                          <div class="form-group">
                              <label for="email" class="col-md-3 control-label">Email</label>
                              <div class="col-md-9">
                                  <input type="text" class="form-control" name="email" value="<%= records.email %>" placeholder="Email Address">
                              </div>
                          </div>
                              
                          
                          <div class="form-group">
                              <label for="lastname" class="col-md-3 control-label">Employee Type</label>
                              <div class="col-md-9">
                                <select class="form-control" name="emptype">
                                    <option >Select Emp Type</option>
                                  <option value="Hourly" <% if(records.etype == 'Hourly') { %> selected <% } %>>Hourly</option>
                                  <option value="Fixed" <% if(records.etype == 'Fixed') { %> selected <% } %>>Fixed</option>
                                </select>
                              </div>
                          </div>
                          <div class="form-group">
                              <label for="password" class="col-md-3 control-label">Hourly Rate</label>
                              <div class="col-md-9">
                                  <input type="text" class="form-control" value="<%= records.hourlyrate %>" name="hrlyrate" placeholder="Enter Hourly Rate">
                              </div>
                          </div>
                              
                          <div class="form-group">
                              <label for="icode" class="col-md-3 control-label"> Total Hour</label>
                              <div class="col-md-9">
                                  <input type="text" class="form-control" value="<%= records.totalhour %>" name="ttlhr" placeholder="Enter Total Hours">
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

## Now add route for update the data into database

### edit file ./routes/index.js

```node

// Route for Update data
router.post('/update/', (req,res,next) => {
  var update = empModel.findByIdAndUpdate(req.body.id, {
    name: req.body.uname,
    email: req.body.email,
    etype: req.body.emptype,
    hourlyrate: req.body.hrlyrate,
    totalhour: req.body.ttlhr,
    total: parseInt(req.body.hrlyrate) * parseInt(req.body.ttlhr),
  });

  update.exec( (err,data) => {
    if(err) throw err;

    res.redirect('/action/');
  })
});


```

## Now create the delete route for delete the data

### edit file ./routes/index.js

```node

// Route for dalete data 
router.get('/delete/:id', (req,res, next) => {
  var id = req.params.id;
  var del = empModel.findByIdAndDelete(id);

  // render file
  del.exec( (err, data) => {
    if(err) throw err;
    res.redirect('/action');
    
  });
});

```














