// callbacks and functions

function functionName() {
    let text = "Hello there!";
}

// run anywhere in document and call anywhere in document
functionName();
functionName();

// return keyword
function anotherFunction() {
    let text = "Some other text";
    return text;
    // return 100;
}

let results  = (10* anotherFunction()) + 100;
console.log(results);

anotherFunction();

// let results = anotherFunction() + anotherFunction();

// the line below throws error
// let moreResults = anotherFunction()++;
let moreResults = anotherFunction() + 1;

console.log(results);
console.log(moreResults);

let additionalResults = (anotherFunction() * 10) + 100;

console.log(additionalResults);

let evenMoreResults = (10* anotherFunction()) + 100;

console.log(evenMoreResults);


// return keyword
function someFunction() {
    // scope here is private; only within function
    let number = 105;
    let text = "Some other text";
    let anotherText = "Some more text";
    return [text, anotherText, number];
}

let someResults = (1 * someFunction()[2]) + 100;
console.log(someResults);

// parameters and arguments

// parameters are only defined in the parentheses of the 
// function definition
//function argumentPractice(shouldIRun = 10) {
function argumentPractice(shouldIRun) {
        if (shouldIRun === 10) {
        console.log("This function ran.")
    }
}

// arguments are provided in the parameters of the function calls

argumentPractice();

argumentPractice(true);

function testFunction() {
    // scope here is private; only within function
    let number = 105;
    let text = "Some other text";
    let anotherText = "Some more text";
    return (number, anotherText, text);
}

testFunction();
console.log(testFunction());

// callbacks - provide functions to other functions

// ready function takes callback function
// $(document).ready();
// passing function directly to ready function
// $(document).ready(function() {});

console.log();

Math.random();

function callBackReader(parameter) {
    console.log("callBackReader has started.");

    // console.log("Given parameter has value: " + parameter);

    if (typeof parameter === "function") {
        console.log("INFO: The data of this value is a function.");
        // don't use () when passing in parameter();
        setTimeout(parameter, 3000);
    } else {
        console.log("The parameter is holding something else, should only be a function.");
    }

    console.log("callBackReader has ended.");
}

callBackReader();

callBackReader(true);

callBackReader("hello there!");

console.log(typeof(someFunction()));
console.log(typeof someFunction());

console.log(typeof someResults);

let storedFunction = function() {};

callBackReader(typeof storedFunction);

console.log(typeof storedFunction);

console.log(typeof function() {});

console.log(typeof null);

let myArray = [1, 2, 3];
// for determining thing is an array, use isArray method
console.log(Array.isArray(myArray));
console.log(Array.isArray(100));
console.log(Array.isArray("test"));

callBackReader(function() {});

callBackReader(function() {console.log("howdy there!");});

callBackReader([1, 2]);
callBackReader(["ab", "cd"]);

let mySpecialFunction = function() {
    console.log("my special function ran!");
}

mySpecialFunction();

// pass function with ()
callBackReader(mySpecialFunction);