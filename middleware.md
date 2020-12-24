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

// Create Middleware 
var validation = (req,res,next) => {
    console.log("Middleware started...");
    next();
}

// Create Route without Middleware
app.get('/',(req,res) => {
   res.send("Home page without Midddleware access"); 
})
// Create Route with Middleware
app.get('/user', validation, (req, res) => {
    res.send("User page with Middleware");
})
// Create server
app.listen(5000, ()=>console.log("server started..."))

```
