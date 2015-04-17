var fs  = require("fs");
var sum = 0;

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	// console.log("Old Sum: "+sum);
	// console.log("Add: "+line);
    sum += parseInt(line);
    // console.log("New Sum: "+sum+"\n");
});

console.log(sum);
return sum;