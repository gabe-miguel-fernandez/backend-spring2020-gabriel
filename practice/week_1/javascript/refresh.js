// creating variables
var myName = true;
var myVar;
var myUndefined;

myVar = null;

console.log(myName);
console.log(myVar);
console.log(myUndefined);

// let and const

let myRealFirstVar = true;

const FIRSTCONST = "cannotbechangedonceset";
// updating const below will throw error
// 
// FIRSTCONST = "NEWVALUE";

const MYCONSTOBJECT = {};
MYCONSTOBJECT.firstArgument = "something";

// cannot declare const without initializing it too
// const SECONDCONST;
// cannot change const once value is set in line below
// SECONDCONST = 10;


// if statement
if (myVar) {

}

// while loop 
// tests condition first before running 
while (false) {

}

// for loop
for (var counter = 0; counter < 10; counter++) {

}

// do while loop
// runs code at least one
do {

} while (false)

// object
var myObject = {
    my: "my value for the key",
    "my second key": null
};

// function
function myFunction (aVar, bVar, cVar) {
    console.log(aVar);
    console.log(bVar);
    console.log(bVar, cVar);
}

// will be undefined since it's outside its scope of function where it's defined
// console.log(aVar);