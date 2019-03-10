var fs = require('fs');

var fbuffer = fs.readFileSync(process.argv[2]).toString();

var nCount = fbuffer.split("\n");
console.log(nCount.length - 1);


// fs is a file system module used to read/write files in node