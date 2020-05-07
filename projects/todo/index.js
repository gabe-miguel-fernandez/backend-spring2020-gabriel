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

// finished setting up saved file

/* ToDo Routes: 
    "/" is important because express will interpret it as directory, not a file.
 */
app.use("/", express.static("public_html/"));


/*
    Object to receive from front-end for /newNote:
    {
      note: String (note's text to save later)
      author: Null or string (user or owner of note)
    }
    Object to send to front-end for /newNote:
    {
      saveStatus: Number (0 for saved, 1 for error)
    }
 */

 class Note {
   constructor(note, author) {
     this.note = note;
     this.author = author;
     this.completed_status = false;
     this.create_date = Date.now();
   }
 }

 // ToDo Routes
app.post("/newNote", (request, response) => {
  let receivedData = request.body;

  let newNoteObject = new Note(receivedData.note, receivedData.author);

  data.notes.push(newNoteObject);

  let dataToSend = {
    saveStatus: 0
  }

  console.log(data);

  response.send(dataToSend);

});
