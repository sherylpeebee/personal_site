// Your program should accept as its first argument a path to a filename.
// Each line in this file contains two comma separated positive integers. E.g.
// Sample code to read in test cases:
var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        //do something here
        //console.log(answer_line);
    }
});
