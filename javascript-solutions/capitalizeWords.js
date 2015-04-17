var file = require('fs');

String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
}

file.readFileSync(process.argv[2]).toString().split('\n').forEach(function(line) {
	var words = line.split(' ');
	var sentence = [];	
	for (i = 0; i < words.length; i++) {
		sentence.push(words[i].capitalize());
	}
	console.log(sentence.join(' '));
});