## Change const value in Node
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

## Print the data using Template String
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
