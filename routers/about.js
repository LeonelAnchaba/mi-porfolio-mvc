const express = require("express");
const router = express.Router();


const {about} = require("../controllers/mainController.js")

router.get("/about", about)

module.exports = router;