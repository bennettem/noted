const fs = require("fs");
const path = require("path");
const router = require("express").Router();
const dbPath = path.join(__dirname, "../../db/db.json");

var notesArray = [];

router.get("/notes", (req, res) => {
  res.sendFile(dbPath);
});

router.post("/notes", (req, res) => {
  let newNote = {
    title: req.body.title,
    text: req.body.text,
    id: JSON.stringify(notesArray.length),
  };

  notesArray.push(newNote);
  content = JSON.stringify(notesArray);

  fs.writeFile(dbPath, content, function (err) {
    if (err) throw err;
    console.log("This has been saved!");
  });

  res.json(dbPath);
});

module.exports = router;
