const express = require('express');
const myController = require('./controllers/myItems');
const parser = require('body-parser');
const cors = require("cors");
const methodOverride = require("method-override")

//initiate express
const app = express();

app.use(cors());
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(methodOverride('_method'));

app.use("/", myController);

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} running here`);
});