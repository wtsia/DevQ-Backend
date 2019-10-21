const myModel = require('../models/question')
const seedData = require("./seeds.json")

myModel.deleteMany({})
  .then(() => {
    return myModel.insertMany(seedData)
  })
  .then(() => {
    process.exit()
  })