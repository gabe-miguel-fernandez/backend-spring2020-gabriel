// include Express package in script
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

// run the Express Server
const app = express();


// run HTTP module/package; load HTTP and attach our Express server to it
const http = require("http").Server(app);

// the port we will listen on
const port = 3000;

// Tells HTTP which port to listen to
// declare before routes
http.listen(port);

// Express routes
// express.static("./public_html") -> tells express that it is a directory/folder

// uses body-parser so we can read JSON from the front-end
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use("/", express.static("./public_html"));
// app.use("/client", express.static("./public_html"));
// app.use("/secretwebpage", express.static("./secret  "));

app.post("/submitAge", (request, response) => {
    console.log(request.body);
    let canDrink = (request.body.age >= 21);

    let dataToSendBackObject = {
        "canDrink": canDrink
    }

    response.send(dataToSendBackObject);
});

// signify Express Server is running
console.log(`Express is now running on ${port}.`);