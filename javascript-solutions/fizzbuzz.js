var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {       
        var arr = line.split(" "); // Splits the string by space
        var output = [];
        for (i=1;i<arr[2]+1;i++) {
        	if (i%(parseInt(arr[0])) === 0 && i%(parseInt(arr[1])) === 0) {
        		output.push("FB");
        	} else if (i%(parseInt(arr[0])) === 0) {
        		output.push("F");
        	} else if (i%(parseInt(arr[1])) === 0) {
        		output.push("B");
        	} else {
        		output.push(i);
        	}
        }
    console.log(output.join(" "));  
    }
});