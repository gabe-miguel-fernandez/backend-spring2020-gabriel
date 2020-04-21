const fs = require("fs");

const file = "practice.txt";
const text = " This is added every time files.js is run.\n";

// check if the file exists

if (fs.existsSync(file)) {
    // console.log("File " + file + " was found!");
    console.log(`File, '${file},' was found!`);
    let data = fs.readFileSync(file, "utf8");

    
    // console.log("The contents of the file are:\n'" + data + "'");
    console.log(`The contents of the file are:\n '${data}'`);
    console.log(`Added '${text}' to the file, '${file}.'`);
    fs.appendFileSync(file, text, "utf8");

} else {
    // console.log("File " + file + " was not found! Ending program.");
    console.log(`File, '${file}', was not found!`);
    // console.log("Creating file with the name '"+ file + ".'");
    console.log(`Creating file with the name '${file}'`);

    // create empty file
    fs.writeFileSync(file, "", "utf8");
    console.log("Finished creating file.")
}