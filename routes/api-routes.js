const router = require("express").Router();
const fs = require("fs");

router.get("/notes", (req, res) => {
    fs.readFile("./Develop/db/db.json", "utf8", (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
        console.log(data);
    });
});

router.post("/notes", (req, res) => {
    console.log(req.body);
    fs.readFile("./Develop/db/db.json", "utf8", (err, data) => {
      if (err) throw err;
      const allNotes = JSON.parse(data);
      allNotes.push({
        title: req.body.title,
        text: req.body.text,
      });

      console.log(allNotes);

      fs.writeFile("./Develop/db/db.json", JSON.stringify(allNotes), (err) => {
        if (err) return res.JSON({ err: "problem adding" });
        res.json({ msg: "successfully added" });
      });
    });
  });
  
module.exports = router;