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
    fs.writeFileSync(myFile, `{"numbersList": []}`, "utf8");
    persistentObject = {numbersList: []};
}

console.log(process.argv[2]);
console.log(typeof persistentObject.numbersList);

let valueToAdd = process.argv[2];

if (valueToAdd === undefined) {
    console.log("You need to provide a number after filename in order to add to a list of numbers.");
    return;
} else if (isNaN(valueToAdd)) {
    console.log("The value you provided is not a number!");
    return;
} else {

    valueToAdd = parseInt(valueToAdd);
// if input argument is "undefined", it will become "null" when written to file
    persistentObject.numbersList.push(valueToAdd);

    let data = JSON.stringify(persistentObject);
    fs.writeFileSync(myFile, data, "utf8");

    console.log(persistentObject);

// fs.writeFileSync() vs fs.writeFile()
// writeFile() will write to file asynchronously
// writeFileSync() will finish writing before next instruction
// less efficient due to waiting

}