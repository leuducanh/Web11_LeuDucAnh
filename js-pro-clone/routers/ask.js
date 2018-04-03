const express = require('express')
const path = require('path')
const fileController = require(path.resolve(__dirname, '../fileController'))
const Router = express.Router();
const questionController = require('../controllers/questionController')



Router.post('/', (req, res) => {

    try {
        questionController.addQuestion(req.body.question, (err, question) => {
            if (err) console.log(err);
            res.redirect('/answer/' + question._id);
        })
    } catch (ex) {

    }

})

Router.get('/otherQuestion',(req,res)=>{
    questionController.findRandom((err,doc)=>{
        console.log(doc.content);
        res.send(doc);
    });

    
})
module.exports = Router;