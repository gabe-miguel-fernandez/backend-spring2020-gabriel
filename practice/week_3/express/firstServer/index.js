// include Express package in script
const express = require("express");
// use fs so we can read/write files
const fs = require("fs");
let filename = "history.json";
let tempAgeObject = {
  historyOfSubmissions: [],
};

if (fs.existsSync(filename)) {
  let historyString = fs.readFileSync(filename, "utf8");
  tempAgeObject = JSON.parse(historyString);
} else {
  dataToSave = JSON.stringify(tempAgeObject);
  fs.writeFileSync(filename, dataToSave, "utf8");
}

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
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", express.static("./public_html"));
// app.use("/client", express.static("./public_html"));
// app.use("/secretwebpage", express.static("./secret  "));

app.post("/submitAge", (request, response) => {
  console.log(request.body);
  let canDrink = request.body.age >= 21;

  // Adds data to temporary object, converts object to
  // JSON and saves new JSON to file
  tempAgeObject.historyOfSubmissions.push(request.body);
  console.log(tempAgeObject);
  // console.log(tempAgeObject);
  let stringToWrite = JSON.stringify(tempAgeObject);
  fs.writeFileSync(filename, stringToWrite, "utf8");

  let dataToSendBackObject = {
    canDrink: canDrink,
  };

  response.send(dataToSendBackObject);
  // can only send one response; not two
  // respond that everything is okay but nothing is sent back
  // response.sendStatus(200);
});

// signify Express Server is running
console.log(`Express is now running on ${port}.`);
