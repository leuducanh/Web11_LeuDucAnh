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
let app = express();

app.use(express.static('../'));

app.get('/',(req,res)=>{
    res.send("hello it's github")
})

app.get('/about',(req,res)=>{
    res.sendFile(path.resolve(__dirname + '/horizolmenu.html'))
})



app.listen(6969,(err)=>{

});