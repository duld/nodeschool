// read a file
// print the number of newline '\n'
// first arg is file process.argv[2]

// bring in the file sytem module
var fs = require("fs")

// read in the file from process.argv
function countNewLine() {
	fs.readFile(process.argv[2], function(err, data) {
		if (err) throw err;
		var fileArr = data.toString().split("\n");
		console.log(fileArr.length -1);
	});
};

// call function
countNewLine();