const express = require('express');
const myController = require('./controllers/myController');
const parser = require('body-parser');

//initiate express
const app = express();

app.use(parser.json());

app.use("/", myController);

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} running here`);
});