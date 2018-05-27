const express = require('express');
const path = require('path');
const handlebar = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fileController = require('./fileController')
const homeRouter = require('./routers/home.js')
const answerRouter = require('./routers/answer.js')
const askRouter = require('./routers/ask.js')
const questionRouter = require('./routers/question.js')


let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.engine('handlebars', handlebar({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/ask', (req, res) => {
    res.render('ask',{
        homeRouter:'active',
        askRouter:''
    });
})

app.use('/',homeRouter)


app.use('/answer', answerRouter)

app.use('/ask',askRouter)

app.get('/error', (req, res) => {
    res.render('error', {
        mess: req.query.mess,
    })
})



mongoose.connect('mongodb://localhost/mycon',err=>{
    if(err)console.log(err)
    console.log("connect success");
})

app.use(express.static('public'));

app.listen(6969, (error) => {

})