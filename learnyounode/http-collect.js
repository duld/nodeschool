/*

Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument.

Collect ALL data from the server, not just the first data event

Write two lines to the console

1) an integer representing the number of characters received form the server.
2) the complete string of characters sent by the server.

*/

const http = require('http');

// Command line input - URL
let urlInput = process.argv[2];

// make our server request
http.get(urlInput, (res) => {
	res.setEncoding('utf8');
	let dataList = [];

	// aggregate all data responses.
	res.on('data', (data) => dataList.push(data));
	res.on('error', console.error);

	// output all data at end of stream.
	res.on('end', () => {
		// combine response data into a single String & output
		let out = dataList.join('');
		console.log(out.length);
		console.log(out);
	});
}).on('error', console.error);