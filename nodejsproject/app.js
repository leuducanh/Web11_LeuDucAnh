const express = require('express');
const path = require('path');
let app = express();

app.use(express.static('css'));
app.use(express.static('html'));
app.use(express.static('js'));

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname + '/html/index.html'))
})
app.get('/frontendpractice',(req,res)=>{
    res.sendFile(path.resolve(__dirname + '/html/frontendpractice.html'))
})
app.get('/flexbox',(req,res)=>{
    res.sendFile(path.resolve(__dirname + '/html/flexbox.html'))
})
app.listen(6972,(err)=>{

});