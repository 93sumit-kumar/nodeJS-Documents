# Middleware in NodeJS
```node
const express = require('express');
const app = express();
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
