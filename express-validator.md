## Express-validator in NodeJS
* 1st step:
```node
// Install express-validator
npm i express-validator

```
* 2nd step: include the express-validator module in route JS file
```node

cosnt { body, validationParser, matchedData } = require('express-validator')
// above body is for request body data, 
// validationParser is used for error handing,
// matchedData is used for parse the data after validation matched

```
#### Example to get the form data and validate data and check confirm password
================ ./app.js ==================
* ./app.js
```node
const express = require('express');
const bodyParser = require('body-parser');
const { body, validationResult, matchedData } = require('express-validator')
const app = express();

// parse application/x-www-form-urlencoded
var urlEncodedParser = bodyParser.urlencoded({ extended: false });

// parse application/json
var jsonParser = bodyParser.json();
// Set the template engine
app.set('view engine', 'twig');

// Set view folder location
app.set('views', 'views');

app.get('/', (req,res) => {
    res.render('index', {title: 'Pug Engine', message: 'Pug Template engine'});
});

// post method to submit form
app.post('/', urlEncodedParser, 
  [ 
    body('username','Username shoud be Email id').trim().isEmail(),
    body('password','Password must be 5 char').trim().isLength({min:5}),
    body('cpassword').custom((value, {req}) => {
    if(value != req.body.password ) {
      throw new Error('Password confirmation not matched')
    }
    return true; // for true value
  })
  ], 
  (req,res) => {
    const errors = validationResult(req)
    // console.log(errors.mapped())
    // console.log(req.body)
    if (!errors.isEmpty()) {
      const data = matchedData(req)
      res.render('index', 
      {
        title: 'Error on submit',
        error: errors.mapped(),
        data: data
      })
    } else {
      const data = matchedData(req)
      console.log(data)
      res.render('login', 
      {
        title: 'Post method', 
        data: data
      });
    }
});

app.get('/about/:a-:b', (req,res) => {
    res.render('index', 
    {
      title: 'URL parameter', 
      sum: 'Sum of '+ req.params.a + ' and ' + req.params.b + ' = ' + (parseInt(req.params.a)+ parseInt(req.params.b)), 
      sub: 'Substraction of ' + req.params.a + ' and ' + req.params.b + ' = ' + (parseInt(req.params.a) - parseInt(req.params.b)), 
      multi: 'Multiplication of ' + req.params.a + ' and ' +req.params.b+ ' = ' + (parseInt(req.params.a) * parseInt(req.params.b)) 
    })
  })
app.listen(5000, ()=>console.log("Server started..."))
```
=========== ./public/views/index.twig ==================
* ./public/views/index.twig
```twig
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ title }}</title>
</head>
<body>
    <form method="POST">
        <input type="text" name="username" value="{{ data.username }}" placeholder="Username"><br>
        {% if (error.username) %}
            <p>{{ error.username.msg }}</p>
        {% endif %}
        <input type="password" name="password" placeholder="Password"><br>
        {% if (error.password) %}
            <p>{{ error.password.msg }}</p>
        {% endif %}
        <input type="password" name="cpassword" placeholder="CPassword"><br>
        {% if (error.cpassword) %}
            <p>{{ error.cpassword.msg }}</p>
        {% endif %}
        <input type="submit" name="search" value="search" class="btn btn-info">
    </form>
</body>
</html>
```
============= ./public/views/login.twig =======================
* ./public/views/login.twig
```twig
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ title }}</title>
</head>
<body>
    <h1>Username: {{ data.username }}</h1>
    <h1>Password: {{ data.password }}</h1>
    <h2>Cpassword: {{ data.cpassword }}</h2>
</body>
</html>
```

