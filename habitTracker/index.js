const express = require("express");
const app = express();
const path = require("path")
const mongoose = require('mongoose');
const Habit = require("./models/habits")

const port = process.env.PORT || 4500;


require('dotenv').config();

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.use(express.static(path.join(__dirname, "public")))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))

app.get("/", (req, res) => {
    res.render("home")
})
app.get("/new", (req, res) => {
    res.render("new")
})

app.get("/template", (req, res) => {
    res.render("template")
})




app.listen(4500, () => {
    console.log("Listening on port 4500")
})