# Middleware in NodeJS
* #### Globally accessable middleware with ```node app.use(middleware_name) ```
```node
const express = require('express');
const app = express();

// Create middleware
var validation = (req,res,next) => {
    console.log('middleware started...');
    next(); // next is use for if middleware running than call next route
}

app.use(validation) // use the middleware globally

app.get('/', (req, res) => {
    res.send("Server started");
});

app.listen(5000, ()=>console.log('server started at 5000'));

```

* #### Middleware used for specific Route 
```node
const express = require('express');
const app = express();

// Create Middleware for route page
var validation = (req,res,next) => {
    console.log("Middleware started...");
    next();
}

//Create middleware for user page
var userValidation = (req,res,next) {
    console.log("User middlewar working");
}

// Create Route without Middleware
app.get('/', validation, (req,res) => {
   res.send("Home page without Midddleware access"); 
})

// Create Route with Middleware
app.get('/user', userValidation, (req, res) => {
    res.send("User page with Middleware");
})

// Create server
app.listen(5000, ()=>console.log("server started..."))

```
* #### Middleware with parameter Validation
```node
const express = require('express');
const app = express();

// Create middleware for user parameter
var validation = (req,res,next) => {
    if(req.params.username == 'Sumit')
        console.log('username valid');
    else
        console.log('Username invalid');
        
  next();
}
app.get('/user/:username', validation, (req,res) => {
    res.send('username validation');
})

// Create server
app.listen(5000, ()=>console.log('Server started...'));
```
