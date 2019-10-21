const mongoose = require("../db/connection")

const questionSchema = new mongoose.Schema({
  id: Number,
  question: String,
  answer: String
})

const questionModel = mongoose.model("question", questionSchema)

module.exports = questionModel