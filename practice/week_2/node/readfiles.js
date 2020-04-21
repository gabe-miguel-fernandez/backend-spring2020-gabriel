// brings in node FS package into our program
const fs = require("fs");

// 3 methods of fs
// fs.existsSync(); - checks if file exists
// fs.readFileSync(); - read the file
// fs.writeFileSync(); - write a new or existing file
// Write a new or existing file: fs.writeFileSync();
// Use appendFileSync to update file instead.

fs.readFileSync("example.txt", "utf8");

// testing for file that does NOT exist
let doesFileExist = fs.existsSync("example.tx");
console.log(doesFileExist);

if (doesFileExist) {
    fs.readFileSync("aFileThatDoesNotExist.txt", "utf8");
} else {
    console.log("File, aFileThatDoesNotExist, does not exist.");
}

// Reading files and accessing contents through JavaScript
let content = fs.readFileSync("example.txt", "utf8");

console.log(content);