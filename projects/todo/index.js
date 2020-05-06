// setting up express server
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const http = require("http").Server(app);
const port = 3000;

http.listen(port);
console.log("Express is running on port: " + port);
// finished express server setup

// setting up body-parser with express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// finished connecting body-parser with express

// setting up saved file
// bonus feature: different people have different notes
const filename = "./users/default_user.json";
let data = {
  notes: [],
};

if (fs.existsSync(filename)) {
  const read = fs.readFileSync(filename, "utf8");
  data = JSON.parse(read);
} else {
  const converted = JSON.stringify(data);
  fs.writeFileSync(filename, converted, "utf8");
}
