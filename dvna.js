var e = require("express");
var DVNA = e();
DVNA.get('/', function(req, res) {
});
DVNA.listen(6666);

// TODO: Create ASCII art for console management

console.log("____________   ___________      _____   ");
console.log("\______ \   \ /   /\      \    /  _  \  ");
console.log(" |    |  \   Y   / /   |   \  /  /_\  \ ");
console.log(" |    `   \     / /    |    \/    |    \");
console.log("/_______  /\___/  \____|__  /\____|__  /");
console.log("        \/                \/         \/ ");
console.log("\r\n   Damn Vulnerable Node Application ");

console.log("  https://github.com/quantumfoam/DVNA \r\n");
console.log("DVNA listening at: https://127.0.0.1:6666/");
