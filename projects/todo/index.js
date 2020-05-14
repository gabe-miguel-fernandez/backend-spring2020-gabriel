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
    Object to receive from front-end for /readNotes
    {

    }
    Object to send to front-end for /readNotes
    {
      notes: Array
    }
    Object to receive from front-end for /deleteNote
    {
      create_date: Number,
      author: String
    }
    Object to send to front-end for /deleteNote
    {
      deleteStatus: Number (0 for successful deletion, 1 for not found, 2 for found but not deleted)
    }

    The /update Note route allows the front-end to send information to the
    back-end to change the note string of a specified note

    Object to send back for /updateNote
    {
      updated_note: String
      create_date: Number,
      author: String
    }

    Object to send to the front-end for /updateNote
    {
      updatedStatus: Number (0 if found, 1 if not found, 2 if found but not updated)
      author: String
    }

    The /markComplete route sets a specific note to completed status, it
    should return confirmation of the request

    Object to send to back-end for /markComplete
    {
      create_date: Number,
      author: String
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

  // save data to file
  let converted = JSON.stringify(data);
  fs.writeFileSync(filename, converted, "utf8");

  let dataToSend = {
    saveStatus: 0
  }

  // console.log(data);

  response.send(dataToSend);
  // alternative way to send status
  // response.sendStatus(200);

});

// route for updating a specific note

// route for deleting a specific note
app.post("/deleteNote", (req, res) => {
  let noteToDelete = req.body;

  let noteID = noteToDelete.create_date + noteToDelete.author;

  for (let i = 0; i < data.notes.length; i++) {
    let currentNote = data.notes[i];
    let currentNoteID = currentNote.create_date + currentNote.author;
    
    if (noteID === currentNoteID) {
      data.notes.splice(i, 1);

      // save data to file
      let converted = JSON.stringify(data);
      fs.writeFileSync(filename, converted, "utf8");

      let dataToSend = {
        deleteStatus: 0
      }

      res.send(dataToSend);
      return; // exits the for loop and stops the function

    }
  }

  let dataToSend = {
    deleteStatus: 1
  }

  res.send(dataToSend);

});


app.post("/updateNote", (req, res) => {
  let noteToUpdate = req.body;

  const noteToUpdateID = req.body.create_date + req.body.author;

  console.log(noteToUpdate);

  for (let i = 0; i < data.notes.length; i++) {
    // referring to object; not copying object
    // TO DO: study "deep copy" vs "shallow copy"
    let currentNote = data.notes[i];
    const currentNoteID = currentNote.create_date + currentNote.author;
    console.log(i + ": " + currentNote, currentNoteID);

    if (noteToUpdateID === currentNoteID)  {
      currentNote.note = noteToUpdate.updated_note;

      // save data object to json file
      let converted = JSON.stringify(data);
      fs.writeFileSync(filename, converted, "utf8");

      const dataToSend = {
        updatedStatus: 0
      }

      return;
    } else {
      continue;
    }
  }

  const dataToSend = {
    updateStatus: 1
  }

  res.send(dataToSend);

});


// route for updating a specific note
app.post("/markComplete", (req, res) => {
  let noteToComplete = req.body;

  let noteID = noteToComplete.create_date + noteToComplete.author;

  for (let i = 0; i < data.notes.length; i++) {
    let currentNote = data.notes[i];
    let currentNoteID = currentNote.create_date + currentNote.author;

    if (noteID === currentNoteID) {
      data.notes[i].completed_status = true;

      // save data to file
      let converted = JSON.stringify(data);
      fs.writeFileSync(filename, converted, "utf8");

      let dataToSend = {
        markedComplete: 0
      }

      res.send(dataToSend);
      return; // exits the for loop and stops the function

    }
  }

  let dataToSend = {
    markedComplete: 1
  }

  res.send(dataToSend);

});








// route for reading all notes
app.post("/readNotes", (req, res) => {
  res.send(data);
});