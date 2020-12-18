* ## ExpressJS in NodeJS
* ExpressJS is default framework of NodeJS.
** ExpressJS install
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

