const express = require("express");
const router = express.Router();
const questionModel = require('../models/questionModel');
const seedData = require("../db/seeds.json")

//Handler
const questionsByType = (type) => {
    return seedData.filter(question => question.type == type);
}

// Get
router.get("/", (req, res) => {
    questionModel.find({})
        .then(myInstances => res.json( myInstances ));
});

router.get("/:type", (req, res) => {
    res.json(questionsByType(req.params.type));
});

router.get('/edit/:id', (req, res) => {
    questionModel.findOne({_id: req.params.id})
        .then(myInstances => res.json( myInstances ))
})

// Post
router.post('/new', (req, res) => {
    questionModel.create(req.body)
        .then(myInstances => {
        res.redirect('/')
    })
})

// Put
router.put('/edit/:id', (req, res) => {
    questionModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(myInstances => {
        res.redirect('/')
    })
})

// Delete
router.delete('/edit/:id', (req, res) => {
    questionModel.findOneAndRemove({ _id: req.params.id })
        .then(() => {
        res.redirect('/')
    })
})

module.exports = router;