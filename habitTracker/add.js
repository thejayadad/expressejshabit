

//Adding data into MongoDB with Express

const express = require("express")
const app = express();
const path = require("path")
const mongoose = require("mongoose");

//Build Schema for data being added in database

const Habit = require("./models/habits")

// added a dotenv to protect sensitive information
const port = process.env.PORT || 4500;
require("dotenv").config();

// express to Mongodb. Add variable for Mongodb connection string
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true}
    );

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDb is connected baby!")
})



//How to pull items from DB and display via ejs

// setting up assests in public folder
app.use(express.static(path.join(__dirname, "public")))


// setting up views engine
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "/views"))

//middleware to allow the posting of frontend info
app.use(express.urlencoded({extended: true}))



// first get route to display data from DB thru ejs template

app.get("/", async (req, res) => {
    const habits = await Habit.find({})
    res.render("home", {habits})
})



// Single Habit details page
app.get("/habit/:id", async(req, res) => {
    const {id} = req.params;
    const habit = await Habit.findById(id)
    res.render("show", {habit})
})


//get route to display new habit form


app.get("/new", (req, res) => {
    res.render("new");
})



































// add a few habits to database

// const stuff = new Habit({
//     habit: "learning Javascript",
//     duration: 60,
//     category: "study"
// })
// stuff.save().then(stuff => {
//     console.log(stuff)
// })
// .catch(e => {
//     console.log(e)
// })

// listening for server on port via express app
app.listen(5000, () => {
    console.log("We are up and going")
})