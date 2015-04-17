var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {       
    	var ints = line.split(",");
    	var multiple = 0;
    	while (multiple < parseInt(ints[0])) {
    		multiple += parseInt(ints[1]);
    	}
    	console.log(multiple);
    	return multiple;
    }
});