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
* ./public/views/index.ejs
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

## twig template engine
* Its Configuration is same as PUG and EJS
```node
npm i twig
```
* just need little changes in app.js and change the extention and code in /public/views/index file
* ./app.js
```node
// just change view engine name from pug to twig
app.set('view engine', 'twig')
```
After that change the extention file in /public/views folder
./public/views/index.twig
```twig
<html>
  <head>
    <title>{{ headTitle }}</title>
  </head>
  <body>
    <h1>{{ message }}</h1>
  </body>
</html>
```
* Note: In ejs {{ variable }} is use for dynamic print the variable data

## Get the URL parameter value
* Get the URL parameter value and display on template engine page(similar use in all pug,ejs and twig)
using twig engine
```node
const express = require('express')
const app = express();

app.set('view engine', 'twig');
app.set('views', '/public/views')

app.get('/', (req, res) => {
  res.render('index', {headTitle: 'This is head title', message: 'This is body messsage data'})
});

app.get('/about/:a-:b', (req,res) => {
  res.render('index', {headTitle: 'URL parameter', message: 'Sum of '+ req.params.a + ' and ' + req.params.b + ' = ' + (parseInt(req.params.a)+ parseInt(req.params.b)) })
})
```
* /public/views/index.twig
```twig
<html>
  <head>
    <title>{{ headTitle }}</title>
  </head>
  <body>
    <h1>{{ message }}</h1>
  </body>
</html>
```
OutPut : Sum of 4 and 5 = 9
#### Multiple variable value 
* ./app.js
```node
const express = require('express');
const app = express();

// Set the template engine
app.set('view engine', 'pug');

// Set view folder location
app.set('views', 'views');

app.get('/', (req,res) => {
    res.render('index', {title: 'Pug Engine', message: 'Pug Template engine'});
});
app.get('/about/:a-:b', (req,res) => {
    res.render('index', {title: 'URL parameter', sum: 'Sum of '+ req.params.a + ' and ' + req.params.b + ' = ' + (parseInt(req.params.a)+ parseInt(req.params.b)), sub: 'Substraction of ' + req.params.a + ' and ' + req.params.b + ' = ' + (parseInt(req.params.a) - parseInt(req.params.b)), multi: 'Multiplication of ' + req.params.a + ' and ' +req.params.b+ ' = ' + (parseInt(req.params.a) * parseInt(req.params.b)) })
  })
app.listen(5000, ()=>console.log("Server started..."))
```
*./public/views/index.pug
```pug
html
    head
        title= title

    body
        h1= 'Sum: '+sum
        h2= 'Sub: '+sub
        h3= 'Multi: '+multi
```
### Form submit using POST method in NodeJS
* When we have to send body data then we need ```node body-parser ``` package.
To install bosy-parser package: 
```node
npm i body-parser
```
After finish the installation of the body-parser package. We need some configuration in app.js
./app.js
```node
// require the package
const bodyParser = require('body-parser')
// than add 2 more line
 // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

```
#### Let's start form submit using POST method
* ./app.js
```node
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('view engine', 'twig')
app.use('views', '/public/views')

app.get('/', (req,res) => {
  res.render('login')
})
//  Post method
app.post('/', (req,res) => {
  res.render('login-details', {title: 'Login Details page', userName: req.body.username, password: req.body.password})
})

app.listen(5000, ()=>console.log("Server Started..."))
```
* ./public/views/login.twig
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login page</title>
</head>
<body>
    <form method="POST">
        <input type="text" name="username" placeholder="Username"><br>
        <input type="password" name="password" placeholder="Password"><br>
        <input type="password" name="cpassword" placeholder="CPassword"><br>
        <input type="submit" name="search" value="search" class="btn btn-info">
    </form>
</body>
</html>

```
To display the data:
* ./public/views/login-details.twig
```twig
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ title }}</title>
</head>
<body>
    <h1>Username: {{ userName }}</h1>
    <h1>Password: {{ password }}</h1>
</body>
</html>

```
