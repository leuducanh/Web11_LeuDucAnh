const questionModel = require("../models/questionSchema")

let addQuestion = (question,callback)=>{
    let newQuestion = {
        content: question
    }
    questionModel.create(newQuestion,function(err,question){
        callback(err,question)
    });
};

let updateQuestion = (id, answer,callback)=>{
    try{

        questionModel.findById(id,(err,doc)=>{
            if(err) console.log(err);
            if(answer == 'yes'){
                doc.yes += 1;
            }else{
                doc.no += 1;
            }
            
            doc.save((err,question)=>{
                callback(err,question);
            })
        })

    }catch(ex){

    }
}

let search = ()=>{

}

let findAll = (callback)=>{
    try{
        
        questionModel.find({},(err,docs)=>{
            callback(err,docs)
        })

    }catch(ex){

    }
}

let findQuestionById = (id,callback)=>{
    try{
        console.log(""+id)
        
        questionModel.findOne({_id:id},function(err,question){
            console.log("abc")
            callback(err,question)
        })
    }catch(ex){

    }
}

let findRandom = (callback)=>{
    try{
        questionModel.count().exec((err,length)=>{
            if(err) callback(err)
            else{
                questionModel
                    .findOne()
                    .skip(Math.floor(Math.random()*length))
                    .exec((err,doc)=>{
                        callback(err,doc);
                    })
            }
        })
    }catch(ex){

    }
}

module.exports={
    addQuestion,
    findQuestionById,
    findAll,
    updateQuestion,
    findRandom
}