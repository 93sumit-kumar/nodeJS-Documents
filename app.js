 // const log = require('./modules')
 // const fs = require('fs')
 
 // // var data = fs.readFileSync('test.txt', 'utf8')
	// // console.log(data)
 // fs.appendFile('./test.txt', ' and now this is apended code content.', (err) => {
	//  if(err)
	// 	 console.lgo(err)
	//  else
	// 	 var data = fs.readFileSync('./test.txt', 'utf8')
	// 	 console.log(data)
 // })
 // const servers = require('./server/server.js')
 // console.log("Server started...")
 // logPerson = new log.person('sumit', 'Kumar')
 // console.log(logPerson.fullName())
 // 
 const myEmitter = require('./events/events.js');
// console.log(myEmitter);
 // myEmitter.emit('event');
 // myEmitter.emit('error', new Error('whoops!')); // return error and throw error
 myEmitter.emit('async');
 myEmitter.emit('error', new Error('whoops!')); // error event return error message 
 myEmitter.emit('errorEvent');
 myEmitter.emit('incrementEvent'); //output 1
 myEmitter.emit('incrementEvent');// output 2
 myEmitter.emit('incrementEventOnce');// output 1
 myEmitter.emit('incrementEventOnce');// Ignored 
 myEmitter.emit('success', 'This is success event');