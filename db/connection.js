const mongoose = require('mongoose')
mongoose.Promise = Promise

let mongoURI = "";
if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/Project3";
}

// connect to the database, with the imported mongoose instance
mongoose
  .connect(mongoURI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false })
  .then(instance =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch(error => console.log("Connection failed!", error));

module.exports = mongoose