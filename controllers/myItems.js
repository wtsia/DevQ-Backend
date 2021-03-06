const express = require("express");
const router = express.Router();
const questionModel = require('../models/questionModel');
const fetch = require("node-fetch");

// Get
router.get("/", (req, res) => {
    questionModel.find({})
        .then(myInstances => res.json( myInstances ));
});

router.get("/:type", (req, res) => {
    fetch("https://immense-citadel-86220.herokuapp.com/")
    .then(res => res.json())
    .then(res => res.filter(question => question.type == req.params.type))
    .then(result => res.json(result));
});

router.get('/edit/:id', (req, res) => {
    questionModel.findOne({_id: req.params.id})
        .then(myInstances => res.json( myInstances ))
})

// Post
router.post('/new', (req, res) => {
    questionModel.create(req.body)
        .then(myInstances => {
        res.redirect(`https://wtsia.github.io/DevQ/`)
    })
})

// Put
router.put('/edit/:id', (req, res) => {
    questionModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(myInstances => {
        res.redirect(`https://wtsia.github.io/DevQ/`)
    })
})

// Delete
router.delete('/edit/:id', (req, res) => {
    questionModel.findOneAndRemove({ _id: req.params.id })
        .then(() => {
        res.redirect(`https://wtsia.github.io/DevQ/`)
    })
})

module.exports = router;