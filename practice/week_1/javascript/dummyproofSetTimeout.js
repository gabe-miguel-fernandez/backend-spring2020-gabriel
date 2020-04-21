// pass in a value of 1000 and wait for 1,000 ms
// will cause error since first argument is rejected/invalid
// setTimeout(1000, 1000);

// does nothing if 1st argument is not a function
function dpSetTimeout(instructions, timeoutLength, count = 1) {
    if (typeof instructions === "function" && typeof timeoutLength === "number") {
        console.log("count = " + count);
        for (let i = 0; i < count; i++) {
            setTimeout(instructions, timeoutLength);
        }
        // setTimeout(instructions, timeoutLength);
        // function got good data
        return 0;
    } else {
        // function got bad data
        return 1;
    }

}

function mySpecialFunction() {
    console.log("running something here");
}

// valid input
console.log("Calling dpSetTimeout with valid input.")
dpSetTimeout(mySpecialFunction, 2000);

// 2nd argument is string; invalid input
dpSetTimeout(mySpecialFunction, "two thousand");

// passed anonymous function
dpSetTimeout(function() {console.log("this is the anonymous version.");}, 3000);


if (dpSetTimeout(function() {console.log("display data")}, 4000) === 0) {
    console.log("dpSetTimeout ran successfully.");
} else {
    console.log("Something went wrong.");
}

// run with optional count value
dpSetTimeout(mySpecialFunction, 2000, 2);

console.log("The first script has finished.");
console.log("----------");

function dpSetTimeoutWithPause(instructions, timeoutLength, count, pause) {
    if (typeof instructions === "function" && typeof timeoutLength === "number") {
        console.log("DEBUG: count = " + count);
        // console.log("DEBUG: pause = " + p);
        for (let i = 0; i < count; i++) {
            console.log("DEBUG LOOP: count = " + count);
            let pauseLength = pause * i;
            console.log("pauseLength = " + pauseLength);
            setTimeout(instructions, timeoutLength + pauseLength);
        }
        // setTimeout(instructions, timeoutLength);
        // function got good data
        return 0;
    } else {
        // function got bad data
        return 1;
    }

}

// valid input
// dpSetTimeoutWithPause(mySpecialFunction, 2000, 3, 1000);

// missing expected pause value; setTimeout treats NaN as 0
// dpSetTimeoutWithPause(mySpecialFunction, 2000, 3);

dpSetTimeoutWithPause(mySpecialFunction, 2000, -3, -3000);

console.log("The second script has finished.");