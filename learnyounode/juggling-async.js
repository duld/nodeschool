/*

Same problem as HTTP Collect

However, you will be provided with THREE urls as the first COMMAND LINE ARGUMENTS.

Collect the complete content provided to you by each of URLs

Print the data to stdout.

 > one line per url
 > in order that the urls are passed by command line


*/

const http = require('http');

let urls = [process.argv[2], process.argv[3], process.argv[4]];

// MY ORIGINAL SOLUTION

// let collectData = (urls) => {
// 	let aggregateData = {};
// 	let resCount = urls.length;

// 	// Collect data response from provided URLS.
// 	urls.forEach( url => {
// 		http.get(url, res => {
// 			let resData = [];
// 			res.setEncoding('utf8');
// 			res.on('data', data => resData.push(data));
// 			res.on('end', () => {
// 				aggregateData[url] = resData.join('');
// 				resCount -= 1;
// 			}).on('error', console.error);
// 		});
// 	});

// 	// check if we have recieved all the data yet.
// 	let keepWatch = () => {
// 		setTimeout(() => {
// 			if (resCount === 0) {
// 				urls.forEach( url => console.log(aggregateData[url]))
// 			} else {
// 			keepWatch();
// 			}
// 		}, 400);
// 	}
// 	keepWatch();
// }

// collectData(urls);

// REFACTOR based on learnyounode solution.
let collectData = (urls) => {
	let aggregateData = {};
	let resCount = urls.length;

	// Collect data response from provided URLS.
	urls.forEach( url => {
		// Request data from URL
		http.get(url, res => {
			let resData = [];
			res.setEncoding('utf8');

			res.on('data', data => resData.push(data));
			res.on('end', () => {
				aggregateData[url] = resData.join('');
				resCount -= 1;
				// If this is the last async request to finish, output all the results.
				if (resCount === 0) {
					urls.forEach( url => console.log(aggregateData[url]))
				}
			}).on('error', console.error);
		});
	});
}

collectData(urls);