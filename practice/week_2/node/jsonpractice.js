const fs = require("fs");

// JSON: JavaScript Object Notation
// before JSON, we had XML

let myObject = {
    "myName": "Eduardo",
    "myJob": "sleep",
    "favFood": "burrito",
    myFunction: function() {console.log("Hello!")},
    "favFood": {
        food1: "burrito",
        food2: "pizza",
        food3: "sushi"
    }
};

// myObject.myFunction();

// let converted = myObject.toString();
// console.log(converted);

// convert a JavaScript object to string in JSON format
// JSON.stringify();

let converted = JSON.stringify(myObject);
console.log(typeof converted);
console.log(converted);

// cannot save function contained in object
// save object with append function;
// must save multiple JSON objects as part of
// one JSON object
console.log("Saving object to file.")
fs.writeFileSync("savedData.json", JSON.stringify(myObject), "utf8");
console.log("Finished saving.");

// read our JSON from a file
let contents = fs.readFileSync("savedData.json", "utf8");
console.log(contents);

let anObjectAgain = JSON.parse(contents);
console.log(anObjectAgain);

