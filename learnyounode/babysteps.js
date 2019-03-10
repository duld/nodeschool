
//console.log(process.argv.length);

function addArgs() {
	let sum = 0;
	// loop over process.argv
	for (let i=2; i < process.argv.length; i++) {
		sum += Number(process.argv[i]);
	}
	return sum
}

console.log(addArgs());