var fs = require("fs");

function nthFibonacci(n) {
	if (n === 0 || n === 1) {
		return n;
	} else {
		return nthFibonacci(n-1) + nthFibonacci(n-2);
	}
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line !== "") {
		var number = parseInt(line);
		console.log(nthFibonacci(number));
	}
});