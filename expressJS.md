# ExpressJS in NodeJS
* ExpressJS is default framework of NodeJS.
* ExpressJS install
```node
npm install express
```
* Note : --save is required if your NPM is less than 5 version otherwise it is optional
* After express install
example : 
```node
const express = require('express'); // require express file

const app = express(); // create new object of express

// Create Route and server
// app.get parameters ('URL_address', function(){ than logic })
app.get('/', (req, res) => { 
// res.send is use to display the content in browser
  res.send("Express JS server is started..."); 
})

app.server(5000, () =>console.log("Server started at port : 5000"));

// Output at localhost:5000 - Express JS server is started...
// console  - Server started at port : 5000
```

# Basic Routing in NodeJS
* GET
* POST
* PUT
* Delete
#### Route definition takes the following structure:
```node
app.METHOD(PATH, HANDLER)
```
#### Parameter Details
* app is an instance of express.
* METHOD is an HTTP request method, in lowercase.
* PATH is a path on the server.
* HANDLER is the function executed when the route is matched.
#### Example:
* GET Request:
```node
app.get('/', function (req, res) {
  res.send('Hello World!')
})
```
* POST Request:
```node
app.post('/', function (req, res) {
  res.send('Got a POST request')
})
```
* PUT Request:
```node
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})
```
* DELETE Request:
```node
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})
```

# Static File in NodeJS
* To use static files such as images, CSS files, and JavaScript files in NodeJS with the #### express.static built-in middleware function
Syntax:
```node
express.static(root, [options])
```
Note: If you want to use CSS, JS and images file in HTML using below code is not working
#### index.html
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Static page express js</title>
        <link rel="styleshet" href="./expressJS/public/css/style.css">
    </head>
    <body>
        <h1>Static File in ExpressJS</h1>
        <img src="./expressJS/public/images/bharat.jpg" alt="Image Tag">
    </body>
</html>
```
* #### use the following code to serve images, CSS files, and JavaScript files in a directory named public
```node
// Use this code in Route page
app.use(express.static('public'))
```
Example:
#### index.js
```node
const express = require('express')
const app = express();

app.use(express.static('public')); // Use This code to get the data from "public" folder

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});
app.get('/user', (req,res) => {
    res.send("User page in expess js");
});
app.listen(5000, ()=>console.log("Server started..."));

```
#### index.html
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Static page express js</title>
        <link rel="styleshet" href="/css/style.css">
    </head>
    <body>
        <h1>Static File in ExpressJS</h1>
        <img src="/images/bharat.jpg" alt="Image Tag">
    </body>
</html>
```
#### Now it is working
