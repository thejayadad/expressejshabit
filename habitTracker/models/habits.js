
const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema({
    habit: {type: String, required: true},
    duration: {type: Number, required: true},
    category: {type: String, enum:["study", "fitness", "health"]}
})

const Habit = mongoose.model("Habit", habitSchema)

module.exports = Habit

//Add into main file