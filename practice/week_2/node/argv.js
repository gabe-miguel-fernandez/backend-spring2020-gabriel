// exploring the "process.argv";
// Holds an array with all the parts that were typed
// in the "terminal."

console.log(`The array held by "process.argv" currently holds ${process.argv}`);
console.log(process.argv);


console.log(`Our first custom Bash argument is: ${process.argv[2]}`);