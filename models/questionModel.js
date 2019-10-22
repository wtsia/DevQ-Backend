const mongoose = require("../db/connection");

const questionSchema = new mongoose.Schema({
    HTML: { },
    CSS: Object,
    Javascript: Object,
    React: Object,
    Node: Object
});

const questionModel = mongoose.model("question", questionSchema);

module.exports = questionModel;