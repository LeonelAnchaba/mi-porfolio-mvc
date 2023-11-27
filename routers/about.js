const express = require("express");
const router = express.Router();
const path = require("path")

//const {index} = require("../controllers/mainController.js")

router.get("/about", (req,res) =>{
    res.sendFile(path.join(__dirname, "../views/about.html"))
})

module.exports = router;