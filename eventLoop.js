// console.log("This is the first statement");

// setTimeout(function(){
// 	console.log("This is the second statement");
// }, 1000);

// console.log("This is the third statement"); 


// console.log('Start');

// setTimeout(() => {
// 	console.log('Timeout callback');
// }, 2000);

// console.log('End');

console.log('Start');

setImmediate(() => {
	console.log('Immediate callback');
});

console.log('End');

const fs = require('fs');
const readStream = fs.createReadStream('./file.txt');

console.log('Start');

readStream.on('data', (chunk) => {
	console.log(chunk.toString());
});

console.log('End');


