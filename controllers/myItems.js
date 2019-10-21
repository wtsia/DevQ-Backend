const express = require('express');
const router = express.Router();
const questionModel = require('../models/question');

router.get("/", (req, res) => {
    questionModel.find({})
        .then(myInstances => res.send());
});

//Get a specific question by id
router.get('/something/:id', (req, res) => {
    questionModel.findOne({_id: req.params.id})
        .then(myInstances => res.send())
})

router.post('/', (req, res) => {
    questionModel.create(req.body)
        .then(myInstances => {
        res.redirect('/')
    })
})

router.put('/:id', (req, res) => {
    questionModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(myInstances => {
        res.redirect('/')
    })
})

router.delete('/:id', (req, res) => {
    questionModel.findOneAndRemove({ _id: req.params.id })
        .then(() => {
        res.redirect('/')
    })
})

module.exports = router;