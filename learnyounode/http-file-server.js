/* 

Create an HTTP server that serves the same text file for each request it receives.

The Server should listen on the PORT provided by the first argument to the program.

you will be provided with the location of the file to serve as the second command-line arg.

you must use fs.createReadStream() to stream to file contents to the response

*/

const http = require('http');
const fs = require('fs');

let port = process.argv[2];
let fileLocation = process.argv[3];

let server = http.createServer((req, res) => {
	// create a new ReadStream based on file specified.
	let file_rs = fs.createReadStream(fileLocation);

	file_rs.pipe(res)
});

server.listen(port);