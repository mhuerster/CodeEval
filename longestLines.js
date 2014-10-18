var fs = require("fs");
var lines = fs.readFileSync(process.argv[2]).toString().split('\n');
var numberOfLines = parseInt(lines.shift());
var linesByLength = []

for (i=0;i<lines.length;i++) {
	linesByLength.push([lines[i], lines[i].length]);
}
linesByLength.sort(function(a,b) { return b[1] - a[1] });

for (x=0; x<numberOfLines; x++) {
	console.log(linesByLength[x][0]);
}