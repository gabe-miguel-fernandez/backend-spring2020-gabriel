// topics used in this file: fs package, JSON, JS Objects
const fs = require("fs");

let persistentObject = null;

let myFile = "persistentObject.json";

let doesFileExist = fs.existsSync(myFile);

if (doesFileExist)  {
    let existingJSON = fs.readFileSync(myFile);
    console.log(`Read file: ${existingJSON}`);

    persistentObject = JSON.parse(existingJSON);
    console.log(`Object convert from JSON: `);
    console.log(persistentObject);
} else {
    // empty JSON object needs "{}" at minimum
    console.log("File does not exist, creating new file");
    fs.writeFileSync(myFile, "{}", "utf8")
}

// fs.writeFileSync() vs fs.writeFile()
// writeFile() will write to file asynchronously
// writeFileSync() will finish writing before next instruction
// less efficient due to waiting
