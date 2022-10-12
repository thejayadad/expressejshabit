
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

const stuff = new Habit ({
    habit: "drink water",
    duration: 2,
    category: "health"
})
stuff.save().then(stuff => {
    console.log(stuff)
})
.catch(e => {
    console.log(e);
})

app.listen(5000, () => {
    console.log("We are going on the port")
})