var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var numberOfPeople = line.split(",")[0];
        var mthPerson = line.split(",")[1];
        var prisoners = new Array;
        for (i = 0; i < numberOfPeople; i++) {
            prisoners.push(i);
        }
        console.log(typeof prisoners);

        executePrisoners(prisoners, mthPerson);
    }
});

Array.prototype.remove = function(x) {
    var rest = this.slice((x+1) || this.length);
    this.length = from < 0 ? this.length + x : x;
    return this.push.apply(this, rest);
};

function executePrisoners(prisoners, m) {
    console.log(typeof prisoners);
    console.log(prisoners.remove(m));
}
// [0,1,2,3,4,5,6,7,8,9]
    // 2, 5, 8
// [0,1,3,4,6,7,9]
    // 1, 6
// [0, 3, 4, 7, 9]
    // 0, 7
// [3,4,9]
    // 4
// [3,9]
    // 9
// [3]