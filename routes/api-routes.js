const router = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

router.get("/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
        console.log(data);
    });
});

router.get("/notes/:id", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) throw err;

      const allNotes = JSON.parse(data);
      const search = req.params.id;   

      for (let i = 0; i < allNotes.length; i++) {
  
        if(allNotes[i].id === search) { 
            return res.json(allNotes[i]);
        }
    }
    return res.json({
  });
  
});
});



router.post("/notes", (req, res) => {
    console.log(req.body);
    fs.readFile("./db/db.json", "utf8", (err, data) => {
      if (err) throw err;
      const allNotes = JSON.parse(data);
      allNotes.push({
        id: uuidv4(),
        title: req.body.title,
        text: req.body.text,
      });

      console.log(allNotes);

      fs.writeFile("./db/db.json", JSON.stringify(allNotes), (err) => {
        if (err) return res.JSON({ err: "problem adding" });
        res.json({ msg: "successfully added" });
      });
    });
  });
  
module.exports = router;