
const fs = require('fs');

let readFile = (path,readFileDone)=>{
    fs.readFile(path,'utf-8', readFileDone)     
    fs.readFile(path, 'utf-8')

    let readFilePromise = new Promise((resolve, reject) => {
        fs.readFile(path,'utf-8', (err, data) => {
            if (err) reject(err) 
            else resolve(data)
        }) 
    })

    readFilePromise.then(data => {}).catch(err => {})
}

let writeFile = (path,data,writeFileDone)=>{
    fs.writeFile(path,JSON.stringify(data),writeFileDone)
}

module.exports = {
    readFile,
    writeFile
}