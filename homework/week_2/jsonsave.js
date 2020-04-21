// Convert the following object into JSON and save that JSON file inside of the homework folder of YOUR repository.
const fs = require("fs");

let objectToSave = {
    key1: "Some key",
    isTrue: false,
    someFunction: function () {console.log("hello");},
    totalAmount: 100900
};

console.log("Saving object to file.")
fs.writeFileSync("savedJSON.json", JSON.stringify(objectToSave), "utf8");
console.log("Finished saving.");
