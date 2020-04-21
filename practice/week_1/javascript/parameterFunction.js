function myFunction (option, option2) {
    console.log("The value of the option parameter is " + option + ", " + option2);
    if (option && option2 ) {
        console.log("Product = " + (option * option2));
    } else if (option === 0) {
        console.log("Everything is good!");
    } else if (option === 1) {
        console.log("An error occurred!");
    } else if (option === -1) {
        console.log("Everything is bad!");
    } 
}

console.log("first function call with no args");
myFunction();
console.log("second function call with one arg");
myFunction(-1);
console.log("third function call with two args");
myFunction(-1, -2);

