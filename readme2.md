 * ## Change const value in Node
* Assign a value in const as json. than change the value as per requirements. See below example -
```node
const data = {
  "name": "Sumit Singh",
  "age": 25
}
console.log("Data = ",data)
// Output : Data = { name: 'Sumit Singh', age: 25}
// If want to add email id than 
data.email = "93kr.sumit@gmail.com"
// if want o change the value of age than
data.age = 28
console.log("Data = ", data)
// now output changed
// Data = { name: 'Sumit Singh', age: 28, email: '93kr.sumit@gmail.com'}
```

* ## Print the data using Template String
```node
/**
 * Use of template string
 */
var empName = "Raju singh"
var empAge = 28
var empEmail = "raju@gmail.com"
console.log(`Hi ${empName} you are ${empAge} years old and your email id is ${empEmail}`)
// ONE MORE OPTION TO PRINT THE SAME ABOVE DATA
console.log("Hi %s you are %s years old and your email id is %s", empName,empAge,empEmail)

// Output for both : Hi Raju singh you are 28 years old and your email id is raju@gmail.com
```

* # Class in NodeJS
```node
class Users {
 constructor() {
  this.name = "Sumit Singh"
  this.age = 25
 }
 // Create a function to get the name
 getName() {
 // if want to add more fields than
 this.email = "93kr.sumit@gmail.com"
  return this.name
 } 
 // Create a function to get the age
 getAge() {
  return this.age
 }
 // Create a function to get the Email
 getEmail() {
  return this.email
 }
 
}

// Create as object of Users class
var user = new Users

// get the value of name
console.log(user.getName())
// Output : Sumit Singh

// get the value of age
console.log(user.getAge())
// Output : 25

// Get the value of Email
console.lo(user.getEmail())
// Output : 93kr.sumit@gmail.com
```

* ## Prototype in NodeJS
* If you want to add some more custom object in already defined function than you prototype keyword.
#### Example: 
```node
// if not want to use var than use function student() {}
var student = function() {
    this.name = "Sumit kumar";
    this.age = 25;
    this.email = "93kr.sumit@gmail.com";
}
/**
 * use prototype here to add one more data in student function 
 */
student.prototype = {
    address: "Faridabad",
    getData:function() {
        return this.address // or use this.name or this.age or this.email etc...
    }
}
var stud = new student();
console.log(stud.getData()) // you can use stud.address or stud.name or stud.age etc...
```

* ## FileSystem in NodeJS
* Read file example (in console)
```node
const fs = require('fs)

fs.readFile(__dirname+'/hello.txt','utf8', (err,data) => {
  if(err) throw err;
  
  console.log(data);
});
// OutPut : show route file hello.txt data in console
```

* Read file in browser with HTTP server
```node
const fs    = require('fs')
const http  = require('http')

const server = http.createServer((req, res) => {
  // Read file in browser
  fs.readFile(__dirname+'/hello.txt', 'utf8', (err, data) => {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write(data);
    res.end(); // end is required for every write function
    if(err) throw err;
    
  })
}).listen(5000, ()=>console.log('server running on 5000 port'))

```
* Delete File
```node
const fs = require('fs')

fs.unlink(__dirname+'/hello.txt', (err, data) => {
  if(err) throw err;
  
  console.log("file deleted successfully");
})
//Output : file deleted successfully
```
* writeFile
* appendFile
* writeFIleSync
* appendFileSync etc.....
