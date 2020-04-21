

function mySpecialFunction() {
    let myTime = new Date();
    console.log("mySpecialFunction function was called:  " + myTime.getHours() + ":" + myTime.getMinutes() + ":" + myTime.getSeconds() + ":" + myTime.getMilliseconds());
}


function dpSetTimeoutWithPause(instructions, timeoutLength, count, pause) {
    // check values of given arguments
    console.log("----- INPUT VALUES Start -----");
    if (typeof instructions == "undefined") {
        console.log("INPUT VALUE: 'instructions' is undefined.");
    } else {
        console.log("INPUT VALUE: 'instructions' is a " + typeof instructions);
    }

    if (typeof timeoutLength == "undefined") {
        console.log("INPUT VALUE: 'timeoutLength' is undefined.");
    } else {
        console.log("INPUT VALUE: 'timeoutLength' is a " + typeof timeoutLength);
    }

    if (typeof count == "undefined") {
        console.log("INPUT VALUE: 'count' is undefined.");
    } else {
        console.log("INPUT VALUE: 'count' is a " + typeof count);
    }

    if (typeof pause == "undefined") {
        console.log("INPUT VALUE: 'pause' is undefined.");
    } else {
        console.log("INPUT VALUE: 'pause' is a " + typeof pause);
    }
    console.log("----- INPUT VALUES End -----");

    
    if (typeof instructions === "function" && typeof timeoutLength === "number") {
        
        // debug statements
        console.log("----- IF VALUES Start -----");
        if (typeof count == "undefined") {
            console.log("AFTER 1ST IF: 'count' is undefined.");
        } else {
            console.log("AFTER 1ST IF: count = " + count);
        }
    
        if (typeof pause == "undefined") {
            console.log("AFTER 1ST IF: 'pause' is undefined.");
        } else {
            console.log("AFTER 1ST IF: pause = " + pause);
        }
        console.log("----- IF VALUES End -----");

        console.log("FOR LOOP: line before");
        for (let i = 0; i < count; i++) {
            console.log("FOR LOOP: i = " + i);
            let pauseLength = pause * i;
            console.log("FOR LOOP: pauseLength = " + pauseLength);
            console.log("FOR LOOP: timeoutLength + pauseLength = " + (timeoutLength + pauseLength) );
            setTimeout(instructions, timeoutLength + pauseLength);
        }
        console.log("FOR LOOP: line after");
        // setTimeout(instructions, timeoutLength);
        // function got good data
        return 0;
    } else {
        // function got bad data
        return 1;
    }

}

/*
 *  valid input.
 */
// dpSetTimeoutWithPause(mySpecialFunction, 2000, 3, 1000);

/*
 *  missing expected pause value; setTimeout treats NaN as 0.
 */
// dpSetTimeoutWithPause(mySpecialFunction, 2000, 3);

/*
 *  missing counter & pause values; setTimeout is never called.
 */
// dpSetTimeoutWithPause(mySpecialFunction, 2000);

/* 
 *  since counter = -3, never enters FOR loop, and setTimeout never called
 */
// dpSetTimeoutWithPause(mySpecialFunction, 2000, -3);

/* 
 *  since pause = -3000, setTimeout gets neg value for milliseconds 
 *  which it treats as if it were 0 value.
 */
// dpSetTimeoutWithPause(mySpecialFunction, 2000, 2, -3000);
// dpSetTimeoutWithPause(mySpecialFunction, 2000, 1, -3000);

console.log("The script has finished.");

console.log("----- START setTimeout Test -----");

// no error when string is passed for time (number) value
// setTimeout(mySpecialFunction,"this stuff");

// no error when string is passed for zero for time (numeric) value
// setTimeout(mySpecialFunction,0);

// no error when string is passed for negative time (numeric) value
// setTimeout(mySpecialFunction, -100);

// no error when string is passed an array
// setTimeout(mySpecialFunction, [1, 2, 3]);

console.log("----- END setTimeout Test -----");

