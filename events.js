const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('error', (err) => {
    console.error('whoops! there has some error...')
});
myEmitter.on('event', () => {
    console.log('event is now fired ....');
});
myEmitter.on('errorEvent', () => {
    console.log('Error event is now fired...');
});
myEmitter.on('success', (msg) => {
    console.log(msg);
})
myEmitter.on('async', (a,b) => {
    setImmediate(() => {
        console.log('This is happped in Async');
    });
});
let m = 0;
myEmitter.on('incrementEvent', () => {
    console.log(++m);
});
/*
* myEmitter.once is used for only one time.
* myEmitter.on is used for nTH time
*/
let n = 0;
myEmitter.once('incrementEventOnce', () => {
    console.log(++n)
})
module.exports = myEmitter