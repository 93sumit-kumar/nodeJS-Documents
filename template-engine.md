# Template Engine in NodeJS
## PUG
* Pug is a high performance template engine heavily influenced by Haml and implemented with JavaScript for Node.js and browsers.
#### Package Installation
```node
$ npm i pug or $ npm install pug or $ npm install pug --save (--save if NPM < 5.0 version)
```
#### After or Before installation set some required configuration below
* View Engine: Set view template engine which engine going to use in this project
#### Ex:
```node
app.set('view engine', 'pug')
```
* View Folder: Create a view folder any where in your project to render pug code. Because all pug code written in by-default in view folder
#### Ex:
```node
// set the location of view folder to render file 
// without .extention ex- index.pug now only index and .pug removed after below code
app.set('view', '/public/views'); 
// if pug code is under public/views folder
```
#### Now Ready for use
* ./app.js
```node
const express = require('express')
const app = express();

// set the template engine to PUG
app.set('view engine', 'pug')

// set the views of pug code location
app.set('views', '/public/views') // if pug code file is under public/views folder

// Router
app.get('/', (req,res) => {
  // render is use to render the file as output.
  // Title and message is json variable inline data supply
  res.render('index'/, {headTitle: 'Pug Engine', message: 'Pug Template engine'})
});

// server with port 5000
app.listen(5000,()=>console.log('Server started...')
```
* ./public/views/index.pug
```pug
html
  head
    titile: headTitle
    
  body
    h1: message
    
```
#### Now pug convert code into below html code
```html

<html>
  <head>
    <title>Pug Engine</title>
  </head>
  <body>
    <h1>Pug Template engine</h1>
  </body>
</html>
```
## EJS template engine
* EJS is similar to PUG 
```node
npm i ejs
```
* just need little changes in app.js and change the extention and code in /public/views/index file
* ./app.js
```node
// just change view engine name from pug to ejs
app.set('view engine', 'ejs')
```
After that change the extention file in /public/views folder
./public/views/index.ejs
```ejs
<html>
  <head>
    <title><%= headTitle %></title>
  </head>
  <body>
    <h1><%= message %></h1>
  </body>
</html>
```
* Note: In ejs <%%> is use for ejs dynamic code use <%= %> use to print the variable data