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

* ## Type Variable in Node
* var
* let
* const

### var : 
The scope is global when a var variable is declared outside a function. This means that any variable that is declared with var outside a function block is available for use in the whole window.
var is function scoped when it is declared within a function. This means that it is available and can be accessed only within that function.
##### var variables can be re-declared and updated
Like : 
```node
var greeter = "hey hi";
var greeter = "say Hello instead";
// this will also
var greeter = "hey hi";
    greeter = "say Hello instead";
```

### let :
A block lives in curly braces. Anything within curly braces is a block.
So a variable declared in a block with let  is only available for use within that block. Let me explain this with an example:
```node
let greeting = "say Hi";
   let times = 4;

   if (times > 3) {
        let hello = "say Hello instead";
        console.log(hello);// "say Hello instead"
    }
   console.log(hello) // hello is not defined
```
###### We see that using hello outside its block (the curly braces where it was defined) returns an error. This is because let variables are block scoped .
### let can be updated but not re-declared.

### const :
#### const declarations are block scoped
Like let declarations, const declarations can only be accessed within the block they were declared.
### const cannot be updated or re-declared
## Note :
* var declarations are globally scoped or function scoped while let and const are block scoped.
* var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared; const variables can neither be updated nor re-declared.


