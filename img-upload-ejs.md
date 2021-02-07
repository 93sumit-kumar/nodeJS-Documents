## Upload image in NodeJS using ejs

### In Node js need ``` _multer_ ``` package to manage ``` _multipart/form-data_ ```

* To install ``` multer ``` Package 

``` npm i multer ```

__Note:__ Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files.
_Multer will not process any form which is not multipart (multipart/form-data)._

### First create image uploading form using ``` ejs ```

#### ./views/upload-img.ejs

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
    <form action="/upload" method="POST" enctype="multipart/form-data">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="Image">Upload File</label>
                        <input type="file" name="file" id="" class="form-control">
                    </div>
                </div><br>
                <div class="col-md-3">
                    <input type="submit" value="Upload" name="submit" class="btn btn-info">
                </div>
            </div>
        </div>
    </form>
  </body>
</html>

```

### Now create get router to display the uploading form

#### ./routes/index.js

```node

// Create get router for img upload file
router.get('/upload', (req, res, next) => {
  res.render('upload-img', {title: 'upload file', success: ''});
});

```

### Now create post route for upload img with ejs and multer

#### ./routes/index.js

```node
const express = require('express');
// include multer
const multer = require('multer');
// require path
const path = require('path');
// Set static value
router.use(express.static(__dirname+"./public/")); 

// Destination path
var Storage = multer.diskStorage({
  destination:'./public/uploads/',
  filename: (req, file, cb) => {
    cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname))
    
  }
});


var upload = multer({
  storage:Storage
}).single('file');

/**
 * Router for upload image file
 */
router.post('/upload/',upload, (req,res,next) => {
  var success = req.file.filename+ 'uploaded successfully...';
  res.render('upload-img', {title: 'uploaded img', success: success });
});
module.exports = router;

```










