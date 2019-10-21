const questionModel = require('../models/questionModel')
const seedData = require("./seeds.json")

questionModel.deleteMany({})
  .then(() => {
    return questionModel.insertMany(seedData)
  })
  .then(() => {
    process.exit()
  })