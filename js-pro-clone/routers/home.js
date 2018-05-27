const express = require('express')
const path = require('path')
const fileController = require(path.resolve(__dirname,'../fileController'))
const questionController = require('../controllers/questionController')
const Router = express.Router();

Router.get('/', (req, res) => {
    questionController.findAll((err, questions) => {
        res.render('answer', {
            question: questions[Math.floor(Math.random() * questions.length)],
            homeRouter: 'active',
            askRouter: ''
        })
    })
})

module.exports = Router;