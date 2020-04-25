const fs = require('fs');
const filename = "notes.json";
/*
 * Data format:
    {
        "notes": [
            {name: "Notes 1",
            note: "Get Milk",
            create_date: 123456789234,
            completed_status: true
            },
            {name: "Note 2",
            note: "Get Pizza",
            create_date: 98134389343,
            completed_status: false
            }
        ]
    }
 */
let data = {
    "notes": []
};

if (fs.existsSync(filename)) {
    let read= fs.readFileSync(filename, "utf8");
    data = JSON.parse(read);
} else {
    let converted = JSON.stringify(data);
    fs.writeFileSync(filename, converted, "utf8")
}

/*
 * Check 3rd argument, process.argv[2] (zero-based index), in command line for 
 * these 4 commands: delete, edit, new & list.
 *     
 * Check 4th argument, process.argv[3] (zero-based index), in command line for
 * note number or note text in the context of these 3 commands: delete, edit & new
 * 
 * Check 5th argument, process.argv[4] (zero-based index), in command line for
 * note text in the context of this command: edit
 */
let cmdAction = process.argv[2];
let cmdNumberOrText = process.argv[3]; 
let cmdText = process.argv[4]; 
let noteIndex;
if (typeof cmdText === 'undefined') {
    cmdText = null;
}

if (cmdAction === "list") {
    // list existing notes
    listNotes();
} else if (cmdAction === "new") {
    if (hasNoteText(cmdNumberOrText)) {
        let newNote = {
            note: cmdNumberOrText,
            completed_status: false
        };
        data.notes.push(newNote);
        saveChange("Note successfully added.");
    }
} else if (cmdAction === "edit") {
    noteIndex = checkIndex(cmdNumberOrText) - 1;
    if (hasNoteText(cmdText)) {
        data.notes[noteIndex].note = cmdText;
        saveChange("Updated note.");
    }    
} else if (cmdAction === "delete") {
    noteIndex = checkIndex(cmdNumberOrText) - 1;
    data.notes.splice(checkIndex(noteIndex), 1);
    saveChange("Deleted note.");
} else if (cmdAction === "done") {
    noteIndex = checkIndex(cmdNumberOrText) - 1;
    data.notes[checkIndex(noteIndex)].completed_status = true;
    saveChange("Completed note.");
} else {
    console.log(`ERROR: "${cmdAction}" command is not recognized.`)
    showUsage();
}

// hoisting - functions can be put anywhere; code read once and 
//            then executed
function listNotes() {
    for (let i = 0; i < data.notes.length; i++) {
        // ternary status is like a 1-line if statement;
        // 1st part is condition, 2nd part is value returned if true,
        // 3rd part is value returned if false
        let status = data.notes[i].completed_status ? " COMPLETED" : "";
        console.log(`Note #${i + 1}: ${data.notes[i].note}` + status);
    }
}

function saveChange(message) {
    fs.writeFileSync(filename, JSON.stringify(data), "utf8");
    console.log(message);
    listNotes();
}

// Is the Note's index # valid?
function checkIndex(noteNumber) {
    /*
     * Convert input string for Note # to number, and then
     * check if it's an integer that's greater than 0.
     */
    let convertedNoteNumber = Number(noteNumber);
    if (noteNumber === undefined || noteNumber === null || noteNumber === "") {
        console.log(`ERROR: Note number was not entered. Please provide the note's number.`);
        showUsage();
        return process.exit(1);
    } else if (Number.isInteger(convertedNoteNumber) && convertedNoteNumber > 0) {
        if (convertedNoteNumber > data.notes.length) {
            console.log(`ERROR: Note #${noteNumber} does not exist.`);
            return process.exit(1);
        } else {
            return convertedNoteNumber;
        }
    } else {
        console.log(`ERROR: "${noteNumber}" is not a valid note number.`);
        showUsage();
        return process.exit(1);
    }
}

// Is the Note's text missing?
function hasNoteText(noteText) {
//    console.log("typeof noteText = " + (typeof noteText));
    if (typeof noteText === "undefined" || noteText === null) {
        console.log(`ERROR: Missing text for note. Your command requires text for the note.`);
        showUsage();
        return process.exit(1);
    } else if (noteText === "") {
        console.log(`WARNING: "${noteText}" is an empty string. Is that your intention?`);
    }
    return true;
}

// displays how to use todo.js script
function showUsage() {
    console.log(`
ToDo script allows user to add, edit, delete and list notes.

USAGE FORMAT:  node todo.js <action> <note_number> <note_text>

EXAMPLES:
new: This command creates a new note with the specified text:
    % node todo.js new "Note text"
edit: This command updates an existing note identified by its note number.
      with specified text.
    % node todo.js edit 10 "Note text"
delete: This command deletes an existing note identified by its note number.
    % node todo.js delete 1
done: This command marks an existing note identified by its note number as done.
    % node todo.js done 1
list: This command lists any existing notes.
    % node todo.js list
`);
}
