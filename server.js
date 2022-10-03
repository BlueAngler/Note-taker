const express = require('express');
const path = require('path');
const fs = require('fs');
const { randomUUID } = require('crypto');



const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));


//get request for homepage file
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "/public/index.html")); 

// }); 

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/develop/public/index.html'))
);

//get request for notes page
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/develop/public/notes.html")); 

}); 




app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);





//GET for saved notes
app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/develop/public/notes.html")); 

});

//POST for writting notes
app.post("/api/notes", (req, res) => {
    console.info(`${req.method} request received to add a note`);
    
    const { } = req.body; 

    if({}){
        const NewNote = {
            note_id: randomUUID(),
        };

        const noteString = JSON.stringify(NewNote); 

      fs.writeFile("/develop/db/db.json", noteString, (err) => 
      err 
        ? console.erroe(err)
        : console.log("note added"))  
    }

});