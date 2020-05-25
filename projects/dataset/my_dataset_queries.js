const fs = require("fs");
// const filename = "listings.csv";
const filename = "listings-simplified.csv";

let dataset = fs.readFileSync(filename, "utf8");
let datasetListings = dataset.split("\r\n");
// console.log(datasetListings[0]);

let listingData = [];
let listingWithHost = {};
let listingsPerNeighborhood = {};
let neighborhoodWithAcceptRate = {};
let neighborhoodWithARCount = {};

// skipping 1st line which has header strings
for (let i = 0; i < datasetListings.length; i++) {
    let currentItem = datasetListings[i].split(",");

    // remove unneeded data columns starting from right
    currentItem.splice(44);
    currentItem.splice(41, 2);
    currentItem.splice(37, 1);
    currentItem.splice(29, 6);
    currentItem.splice(27, 1);
    currentItem.splice(25, 1);
    currentItem.splice(15, 9);
    currentItem.splice(10, 4);
    currentItem.splice(1, 8); 

    if (i === 0) {
        console.log(`currentItem`)
    }

    /*
        Resutling array map from lowest to highest index
        (col a/1)   id
        (col j/10)  host_id
        (col o/15)  host_acceptance_rate
        (col y/25)  neighbourhood_cleansed
        (col aa/27) city
        (col ac/29) zipcode
        (col aj/36) property_type
        (col ak/37) room_type
        (col am/39) bathrooms
        (col an/40) bedrooms
        (col ao/41) beds
        (col ar/44) price 
     */

    listingData.push(currentItem);
    // console.log(`currentItem = ${currentItem}`);

    // tally listings by host ID
    let host_id = currentItem[1];
    if (listingWithHost[host_id] === undefined) {
        listingWithHost[host_id] = 1;
    } else {
        listingWithHost[host_id] += 1;
    }

    // tally listings by neighborhood
    let neighborhood = currentItem[3];
    if (listingsPerNeighborhood[neighborhood] === undefined) {
        listingsPerNeighborhood[neighborhood] = 1;
    } else {
        listingsPerNeighborhood[neighborhood] += 1;
    }

    // tally acceptance rate by neighborhood
    if (currentItem[2] !== "N/A") {
        let acceptanceRate = parseInt(currentItem[2]);
        neighborhood = currentItem[3];
        if (neighborhoodWithAcceptRate[neighborhood] === undefined) {
            neighborhoodWithAcceptRate[neighborhood] = acceptanceRate;
            neighborhoodWithARCount[neighborhood] = 1;
        } else {
            neighborhoodWithAcceptRate[neighborhood] += acceptanceRate;
            neighborhoodWithARCount[neighborhood] += 1
        }
    }

}

console.log(`headers = ${listingData[0]}`);

// get stats of hosts by # of listings
let numListings = datasetListings.length;
let numHosts = Object.entries(listingWithHost).length;
let listings_1 = 0;
let listings_2to5 = 0;
let listings_6to10 = 0;
let listings_11to15 = 0;
let listings_16plus = 0;

Object.values(listingWithHost).forEach((value) => {
    switch (true) {
        case (value < 2):
            listings_1 += 1;
            break;
        case (value < 6):
            listings_2to5 += 1;
            break;
        case (value < 11):
            listings_6to10 += 1;
            break;
        case (value < 16):
            listings_11to15 += 1;
            break;
        default:
            listings_16plus += 1;
            break;
    }
})

function getPercentage (num, denom) {
    return parseFloat(num/denom * 100).toFixed(2);
}

console.log(`\n\t======== Listings by Hosts ========`);
console.log("QUESTION 2: What is the % of hosts with more than 1 listing?");
console.log(`\t-----------------------------------`);
console.log(`# of listings in San Francisco = ${numListings}`);
console.log(`# of hosts in San Francisco = ${numHosts}`);
console.log(`# of hosts with 1 listing = ${listings_1}, (${getPercentage(listings_1, numHosts)}%)`);
console.log(`# of hosts with 2 - 5 listings = ${listings_2to5}, (${getPercentage(listings_2to5, numHosts)}%)`);
console.log(`# of hosts with 6 - 10 listings = ${listings_6to10}, (${getPercentage(listings_6to10, numHosts)}%)`);
console.log(`# of hosts with 11 - 15 listings = ${listings_11to15}, (${getPercentage(listings_11to15, numHosts)}%)`);
console.log(`# of hosts with 16+ listings = ${listings_16plus}, (${getPercentage(listings_16plus, numHosts)}%)`);
console.log(`\t===================================`);

// get stats of listings by neighborhood
let numNeighborhoods = Object.entries(listingsPerNeighborhood).length;

console.log(`\n\t======== Listings by Neighborhood ========`);
console.log("QUESTION 1a: What are the SF neighborhoods that have listings?");
console.log("QUESTION 1b: How many listings does each SF neighborhood have?");
console.log(`\t------------------------------------------`);
console.log(`# of listings in San Francisco = ${numListings}`);
console.log(`# of neighborhoods in San Francisco = ${numNeighborhoods}`)
Object.keys(listingsPerNeighborhood).sort().forEach((neighborhood) => {
    console.log(`# of listings in ${neighborhood} = ${listingsPerNeighborhood[neighborhood]}`);
});
console.log(`\t==========================================\n`);

// get stats of acceptance rate by neighborhood
console.log(`\n\t======== Acceptance Rate by Neighborhood ========`);
console.log("QUESTION 3: What is the average acceptance rate per neighborhood?");
console.log(`\t------------------------------------------`);
console.log(`# of listings in San Francisco = ${numListings}`);
console.log(`# of listings in San Francisco with Acceptance Rate = ${numListings}`);
console.log(`# of neighborhoods in San Francisco = ${numNeighborhoods}`)
Object.keys(neighborhoodWithAcceptRate).sort().forEach((neighborhood) => {
    let percentAcceptanceRate = neighborhoodWithAcceptRate[neighborhood]/neighborhoodWithARCount[neighborhood];
    console.log(`Average acceptance rate in ${neighborhood} = ${parseInt(percentAcceptanceRate)}%`);
});
console.log(`\t==========================================\n`);
