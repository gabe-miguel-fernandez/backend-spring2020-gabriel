let firstPart, secondPart;

firstPart = "This is the start of the sentence";
secondPart = "This is the second part of the sentence";

let combined = firstPart + secondPart;
let combined2 = firstPart + ". " + secondPart + ".";
console.log(combined);
console.log(combined2);

// back ticks; not same as single quotes
let literal = `${firstPart}. ${secondPart}.`;
console.log(literal);