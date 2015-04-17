var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
    	var letters = line.split("");
    	var word = {};
    	
    	for (i=0; i<letters.length; i++) {
    		if (word[letters[i]]) {
    			word[letters[i]].frequency += 1;
    		} else {
    			word[letters[i]] = {};
	    		word[letters[i]].position = i;
	    		word[letters[i]].frequency = 1;
    		}  
    	}

    	var no_repeats = [];
    	for (var letter in word) {
    		if (word[letter].frequency == 1) {
    			no_repeats.push([letter, word[letter].position]);
    		}
    	}
    	console.log(no_repeats[0][0]);
    }
});