
let someText = "test";

function someFunction() {
    console.log("We ran this function that is global to whole script.");
}

// tests if selector found something
function test$(arrayToTest) {
    if (arrayToTest.length === 0) {
        console.log("Your jQuery selector found nothing! Check if that you spelled selector string properly.");
        console.log(arrayToTest);
        return arrayToTest;
    } else {
        console.log(arrayToTest);

        return arrayToTest;
    }
};

// wait until HTML has fully loaded.


$(document).ready(() => {

    // use test$ to test jQuery Selector: test$( $("CSS Selector"));
    test$($("ol")).append();
    test$($("body")).append();

    console.log("Hello world!");


    // storing what we searched for into a variable
    let myHeading = $("h1");
    console.log(myHeading);
    console.log(myHeading[0]);
    myHeading.css("color", "red");

    // waiting 5 seconds to change color for all headings to green
    // setInterval(() => {
    //     myHeading.css("color", "green");
    // }, 5000);

    // waiting 5 seconds to change color for all headings to green
    setTimeout(() => {
        myHeading.css("color", "green");
    }, 5000);

    // inspecting what we searched
    myHeading.click(() => {
        myHeading.css("color", "blue");

        let aPTag = "<p>This is a paragraph tag.</>"
        // .html, .append or .prepend
        $("body").append(aPTag);
    });

    // does nothing because there is no popup-container object when this is run
    $("#popup-container").click();

    // specifying html covers whole page
    // $("body").click(function() {
    // $("html").click(function() {
    $("#create-popup").click(() => {

        $(this).css("background-color", "grey");
        console.log(someText);
        someFunction();

        // setting up our popup
        let myPopup =
        `
        <div id="popup-block">
            <div id="popup-container">
                <p>You must deal with me.</p>
            </div>
            
        </div>
        `;

        // attaching popup to our body element
        $("body").append(myPopup);

        // stylizing popup "blocker"
        $("#popup-block").css({
            "width": "100%",
            "height": "100%",
            "background-color": "rgba(177, 177, 177, 0.5)",
            "position": "absolute",
            "top": "0",
            "left": "0"
        });

        // using shortcut for popup-container since it's used a lot
        let popup = $("#popup-container");

        // stylizes the white box
        popup.css({
            "margin": "0 auto",
            "width": "300px",
            "height": "300px",
            "background-color": "white",
            "border": "solid 5px grey",
        });

        // no errors if no elements selected
        $("pop-container").append("<h1>I have been added AFTER THE FACT!</h1>")

        // adds h1 to white box
        popup.append("<h1>I have been added AFTER THE FACT!</h1>")

        // adds a "close" button to white box
        popup.append("<button id='close'>Close this popup!</button>")
    
        $("#close").click(() => {
            $("#close").parent().parent().remove();
        });
    });

});