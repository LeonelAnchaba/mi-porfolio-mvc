const express = require("express");
const router = express.Router();
const path = require("path")

//const {index} = require("../controllers/mainController.js")

router.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname, "../views/home.html"))
})

module.exports = router;