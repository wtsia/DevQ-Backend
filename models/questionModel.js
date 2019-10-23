const mongoose = require("../db/connection");

const questionSchema = new mongoose.Schema({
  id: Number,
  _id: Number,
  question: String,
  hint: String,
  answer: String,
  url: String,
  type: String
});

const questionModel = mongoose.model("question", questionSchema);

module.exports = questionModel;