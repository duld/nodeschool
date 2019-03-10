/*

Write a tcp time server

> Server should listen to TCP CONNECTIONS on the PORT 
  provided by the FIRST ARGUMENT provided to your program.

> For each connection you must write the current data and 
  24 hour time in the format:
    "YYYY-MM-DD hh:mm\n"

> After sending the string, close the connection.

*/

const net = require('net');

let port = process.argv[2];

let server = net.createServer( socket => {
	// send connection time data to the socket
	let curDate = new Date();
	let month, day, hours, minutes;

	month = zeroPad(curDate.getMonth() + 1);
	day = zeroPad(curDate.getDate());
	hours = zeroPad(curDate.getHours());
	minutes = zeroPad(curDate.getMinutes());

	let outStr = `${curDate.getFullYear()}-${month}-${day} ${hours}:${minutes}\n`;
	socket.write(outStr);
	// close the socket.
	socket.end();
});
server.listen(port);


function zeroPad(num) {
	if (num < 10) {
		return `0${num}`;
	}
	return num;
}