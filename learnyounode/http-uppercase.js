/*

Write an HTTP server that receives only POST requests

Each incoming POST body characters are converted to upper-case and returned to client.

Server should listen to the port provided by the first COMMAND LINE argument.

*/

const http = require('http')

const PORT = process.argv[2];

let server = http.createServer((req, res) => {
	if (req.method === 'POST') {
		req.setEncoding('utf8');
		
		req.on('data', data => {
			res.write(data.toUpperCase());
		});

		req.on('end', () => {
			res.end();
		});
	}
});

server.listen(PORT);

