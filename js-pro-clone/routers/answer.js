const express = require('express')
const path = require('path')
const fileController = require(path.resolve(__dirname, '../fileController'))
const Router = express.Router();
const questionController = require('../controllers/questionController')

Router.get('/:id', (req, res) => {

    console.log("" + req.params.id);
    questionController.findQuestionById(req.params.id, (err, question) => {
        console.log("qwe" );
        if(err)console.log(err)
        console.log("" + question.content);
        res.render('question', {
            question: question,
            totalVotes: question.yes + question.no,
            percentYes: (question.yes * 100) / (question.yes + question.no),
            percentNo: (question.no * 100) / (question.yes + question.no),
            homeRouter: '',
            askRouter: ''
        })
    })

})


Router.get('/:id/:answer', (req, res) => {

    // fileController.readFile(path.resolve(__dirname, './data.json'), (err, data) => {
    //     let questions = [...JSON.parse(data)];

    //     if (req.params.choose === 'no') {
    //         questions[req.params.id - 1].no += 1
    //     }
    //     else {
    //         questions[req.params.id - 1].yes += 1;
    //     }

    //     question = questions[req.params.id - 1];
    //     fileController.writeFile(path.resolve(__dirname, './data.json'), questions, (err) => {
    //         if (err) res.redirect('/error?mess=' + 'loi khong nhap dc cau hoi')
    //         res.render('question', {
    //             question: question,
    //             totalVotes: question.yes + question.no,
    //             percentYes: (question.yes * 100) / (question.yes + question.no),
    //             percentNo: (question.no * 100) / (question.yes + question.no),
    //             homeRouter: '',
    //             askRouter: ''
    //         })

    //     })
    // })

    questionController.updateQuestion(
        req.params.id,
        req.params.answer,
        (err,questionUpdated)=>{

            if(err) console.log(err)
            res.redirect("/answer/" + questionUpdated._id);
    })
});

module.exports = Router;