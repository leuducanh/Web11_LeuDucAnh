// const fs = require('fs');

// let data = fs.readFileSync("./package.json", 'utf-8');
// console.log(data);

// fs.readFile("./package.json", 'utf-8',(error,data)=>{
//     if(!error) console.log(data);
// });

// let dataWriteFile = {
//     a:5,
//     b:6,
// };

// fs.writeFile('test.txt',JSON.stringify(dataWriteFile),(err)=>{
//     if(err) {console.log(err)};
//     console.log('success!');
// });

// fs.readFile("test.txt", 'utf-8',(error,data)=>{
//     if(!error) console.log(JSON.parse(data));
// });

// let fs = require('./fileController');

// // fs.readFileFunc();
// // fs.writeData();

// let readFile = ('test.txt',(fileData)=>{
//     console.log(fileData);
// });

const express = require('express');
const path = require('path');
const handlebar = require('express-handlebars');
const bodyParser = require('body-parser');
const fileController = require('./fileController')
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// khai báo engine
app.engine('handlebars', handlebar({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home', {
        number: {
            a: Math.random() * 100 - 1,
        },
        htmlData: "<p>La La La</p>",
    });
})

app.get('/ask', (req, res) => {
    res.render('ask')
})

app.post('/ask', (req, res) => {
    console.log(req.body)
    try {
        let questionList = [...fileController.readFileSync('./data.json')];
        let id = questionList.length + id;
        let newQuestion = {
            id: id,
            questionContent: req.body.question
        };
        data.push(newQuestion)
        fileController.writeFile('./data.json', questionList, (err) => {
            if (err) console.log(err);
            res.redirect('/question/' + id);
        });
    } catch (ex) {

    }

})

app.get('/question/:id',(req,res)=>{
    try {
        let questionList = [...fileController.readFileSync('./data.json')];
        let question = questionList[req.params.id-1];
        res.render('question',{
            question: question.questionContent
        })
    } catch (ex) {

    }
})



app.get('/ask', (req, res) => {
    res.render('ask')
})

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/horizolmenu.html'))
})

app.use(express.static('../'));

app.listen(6969, (err) => {

});