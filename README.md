# nodeJS_code

## __Node js global variables__
* __dirname
* __filename
* require
* module
* exports etc....

## __Examples__

* ## __dirname code
```node
var dirName = __dirname
console.log(dirName)
output : d://test/node
```

* ## __filename code
```node
var fileName = __filename
console.log(fileName)
output : d://test/node/main.js
```

* ## require
```node
var main = require('./main.js')
Output = main.js file included in the that file where code written
```

* ## module & exports
```node

var add = (a,b) => {
  var c = a+b
  console.log("Addition of %s and %s is %s",a,b,c)
}
add(8,9)
var name = "Sumit Singh"

module.exports.name = name
//access this name in other file using required and get the data of name
```

