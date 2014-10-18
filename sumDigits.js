// function addDigits(digitsArray) {
// 	var sum = digitsArray.reduce(function(x,y) {
// 			return x + y;
// 		});
// 	if (sum < 10) {
// 		return sum;
// 	} else {
// 		return addDigits(sum.toString().split("").map(function(x) { return parseInt(x) }));
// 	}
// }

function addDigits(digitsArray) {
	var sum = digitsArray.reduce(function(x,y) {
			return x + y;
		});
	return sum;
}

var fs = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line !== "") {
		var digits = line.split("").map(function(x) { return parseInt(x) });
		var summedDigits = addDigits(digits);
		// if (summedDigits < 10) {
			// return summedDigits;
			console.log(summedDigits);
		// } else {
			// console.log("do it again: "+summedDigits);
		// }
	}
});