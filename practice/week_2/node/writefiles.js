// brings in node FS package into our program
const fs = require("fs");

// 3 methods of fs
// fs.existsSync(); - checks if file exists
// fs.readFileSync(); - read the file
// fs.writeFileSync(); - write a new or existing file
// Write a new or existing file: fs.writeFileSync();
// Use appendFileSync to update file instead.

// arguments: file to save to as a string, data to save,
// character set
fs.writeFileSync("writtenbyjs.txt", "New content from JavaScript.\n", "utf8");

// append to existing file
fs.appendFileSync("writtenbyjs.txt", "even more lines of text.\n", "utf8");

// delete a file
// fs.unlinkSync("writtenbyjs.txt");

