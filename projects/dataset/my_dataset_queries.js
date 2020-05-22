const fs = require("fs");
// const filename = "listings.csv";
const filename = "listings.txt";

let dataset = fs.readFileSync(filename, "utf8");
let datasetListings = dataset.split("\n");
// console.log(datasetListings[0]);

let listingData = [];

for (let i = 0; i < datasetListings.length; i++) {
    let currentItem = datasetListings[i].split("\t");
    // remove unneeded data columns starting from right side
    currentItem.splice(61);
    currentItem.splice(57, 3);
    currentItem.splice(53, 1);
    currentItem.splice(44, 7);
    currentItem.splice(42, 1);
    currentItem.splice(28, 12);
    currentItem.splice(20, 7);
    currentItem.splice(1, 18);

    // if (!isNaN(currentItem[0]) || currentItem[4] !== "San Francisco") {
    //     listingData.push(currentItem);
    // }
    listingData.push(currentItem);
    
}

console.log(listingData[0]);
console.log("==============");
console.log(listingData[1]);
console.log("==============");
console.log(listingData[2]);
console.log("==============");
console.log(listingData[3]);
console.log("==============");
console.log(listingData[3]);