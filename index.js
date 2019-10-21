const express = require('express');
const myController = require('./controllers/myController');
const parser = require('body-parser');

//initiate express
const app = express();

app.use(parser.json());

app.use("/", myController);

app.listen(3000, () => console.log("Running on port 3000!"));