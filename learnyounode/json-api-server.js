/*

Write an HTTP server that serves JSON data when it receives a GET request to the path:
 * '/api/parsetime'.

Expect the request to contain a QUERY STING with a key 'iso' and an ISO-FORMAT time as the value
 > /api/parsetime?iso=2013-08-10T12:10:15.474Z

The JSON response should only contain: 'hour, 'minute' and 'second'
 > {
	"hour": 14,
	"minute": 23,
	"second": 15
   }

Add a second endpoint for the path '/api/unixtime', which accepts the same query string
but returns UNIX epoch time in milliseconds, under the property 'unixtime'

> { "unixtime": 12322342384748 }

The server shuld listen on the port provided by the first argument to the program.

*/
// standard library imports
const http = require('http');
const url = require('url');

// command line args
const PORT = process.argv[2];

// Server
let server = http.createServer( (req, res) => {
	req.setEncoding('utf8')
	let reqURL = url.parse(req.url, true);
	let queryTime = new Date(reqURL.query['iso']);

	// GET /api/parsetime
	if (req.method === 'GET' && reqURL.pathname === '/api/parsetime') {
		

		let resObj = JSON.stringify({
			'hour' : queryTime.getHours(),
			'minute' : queryTime.getMinutes(),
			'second' : queryTime.getSeconds()
		});

		res.writeHead(200, {'Content-type': 'application/json'});
		res.write(JSON.stringify(resObj));
		return res.end();;

	}

	// GET /api/unixtime
	if (req.method === 'GET' && reqURL.pathname === '/api/unixtime') {

		let resObj = JSON.stringify( { 'unixtime' : queryTime.getTime() } );

		res.writeHead( 200, {'Content-type': 'application/json'});
		res.write(resObj);
		return res.end()
	}

	res.writeHead(404)
	res.end();
});

server.listen(PORT);