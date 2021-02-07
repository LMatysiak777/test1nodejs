const express = require("express");
const port = process.env.PORT;
const path=require ("path");
// const fromAnotherFile=require("./js/functions");
const app = express();

app.set("view engine","hbs");
app.use("/assets",express.static(path.join(__dirname,"./assets")));
app.use("/js",express.static(path.join(__dirname,"./js"))); //dolaczanie plikow js

app.get("/", function (req,res) {res.render('index', {
pageTitle: "dzisiejsza lekcja",
subTitle: fromAnotherFile.subTitle,
})
})  //przekazywanie zmiennych do strony

// app.get("/",(req,res)=>{
//     res.send("hello world")
// })

app.get("/about",(req,res)=>{
    res.send("<h2>STRONA O NAS</h2>")
})

app.listen(port, (err)=>{if (err){return console.log(err)} console.log("diala na porcie "+port)})


// npm init -y
// npm install hbs --save