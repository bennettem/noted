const fs = require("fs");
const path = require("path");
const router = require("express").Router();
const db = path.join(__dirname, "../../db/db.json");

var notesArray = [];

router.get("/notes", (req, res) => {
  res.sendFile(db);
});

router.post("/notes", (req, res) => {
  let newNote = {
    title: req.body.title,
    text: req.body.text,
    id: JSON.stringify(notesArray.length),
  };

  notesArray.push(newNote);
  content = JSON.stringify(notesArray);

  fs.writeFile(db, content, function (err) {
    if (err) throw err;
    console.log("This has been saved!");
  });

  res.json(db);
});

module.exports = router;
