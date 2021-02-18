// promise has 2 parameter resolve and reject
// So, we have to create 2 function while try to access these promise 
// call promise with promise.than keyword

// Get a variable
var data = true; // variable is true than call resolve
//var data = false; // variable is false than call reject

// create an object of promise
var promise = new Promise( (resolve, reject) => {
    if(data)
        resolve("resolve");
    else
        reject("error")
} );

// than call promise
promise.then( (msg) => {
    console.log("solve "+ msg); // this is for resolve
},
 (err) => {
    console.log("Reject "+ err); // this is for reject
 } );

 // one more option to call the promise
 // call promise with try catch block
 promise.then( (msg) => {
     console.log(msg);
 }).catch( (err) => {
     console.log(err);
 });