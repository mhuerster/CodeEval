var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var input = line.split(", ");
        var string = input[0];
        var characters = input[1];
        console.log(removeCharacters(string, characters));
    }
});

function removeCharacters(string, characters) {
    var charactersToRemove = new RegExp('\['+characters+'\]', 'gi');
    return string.replace(charactersToRemove, "");
}