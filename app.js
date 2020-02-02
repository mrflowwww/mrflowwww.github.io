
const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs");

const app = express()

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("index", )
})

app.get("/infos", function(req, res){
    res.render("infos", )
})

app.get("/sucher", function(req, res){
    res.render("sucher", )
})

app.get("/helfer", function(req, res){
    res.render("helfer", )
})

app.get("/charity", function(req, res){
    res.render("charity", )
})



/* ============ Login + Registrierung ============= */
app.get("/login", function(req, res){
    res.render("login", )
})

app.get("/registrieren", function(req, res){
    res.render("registrieren", )
})

app.get("/dashboard", function(req, res){
    res.render("dashboard", )
})





/* ============ Rechtliches ============= */
app.get("/impressum", function(req, res){
    res.render("impressum", )
})
app.get("/datenschutz", function(req, res){
    res.render("datenschutz", )
})
app.get("/agb", function(req, res){
    res.render("agb", )
})

app.listen(3000, function(){
    console.log("Server started on port 3000")
})