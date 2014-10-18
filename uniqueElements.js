var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {       
    	var elements = line.split(",").map(function(x) { return parseInt(x) });
    	var unique_elements = [elements[0]];
    	for (i=1; i<elements.length; i++) {
    		if (elements[i] > unique_elements[unique_elements.length - 1]) {
    			unique_elements.push(elements[i]);
    		}
    	}
    	console.log(unique_elements.join(","));
    }
});