var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {       
    	var characters = line.toLowerCase().split("");
    	var changeCase = true;
    	for (i=0; i<characters.length; i++) {
    		if (/[A-Za-z]/.test(characters[i]) && changeCase === true) {
    			changeCase = false;
    			characters[i] = characters[i].toUpperCase();
    		} else if (/[A-Za-z]/.test(characters[i]) && changeCase === false) {
    			changeCase = true;
    		}
    	}
    	console.log(characters.join(""));
    }
});