var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {       
    	var characters = line.split(" ");
    	var m = characters.pop();
    	if (m >= characters.length) {
    		console.log(characters[0]);
    	} else {
    		console.log(characters[characters.length - m]);
    	}
    }
});