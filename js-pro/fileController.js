const fs = require('fs');

let readFile = (path,onReadFileDone)=>{
     fs.readFileSync(path,'utf-8',(err,data)=>{
         if(err) {
             console.log(err)
         }
         onReadFileDone(data);
     });
};

let writeFile = (path,writeData,onWriteDataSuccess)=>{
    fs.writeFile(path,writeData,'utf-8',(err)=>{
        if(err){
            console.log(err); 
        }
        onWriteDataSuccess('Success!');
    });
};

module.exports = {
    readFileFunc : readFile,
    writeData
}