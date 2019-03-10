/*

Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument.

Write the String contents of each "data" event from the response to a new line in the console (stdout)

*/
const http = require('http');


let urlInput = process.argv[2];

http.get( urlInput, (res) => {
	res.setEncoding('utf8');
	res.on('data', (data) => console.log(data));
	res.on('error', (err) => console.error(err));
}).on('error', (err) => console.error(err))

