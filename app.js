const express = require("express");
const app = express();
const path = require("path")

app.listen(3000, () =>{
    console.log("Servidor funcionando");
});

app.use(express.static("public"))


const homeRouter = require("./routers/main")
const aboutRouter = require("./routers/about")

app.get("/", homeRouter);

app.get("/about", aboutRouter)