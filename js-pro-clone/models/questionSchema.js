const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    content: {type: String,default:"a",require:true},
    yes:{type:Number,default:0},
    no:{type:Number,default:0},
},{
    timestamps : true,
    // _id
});

module.exports = mongoose.model("Question",questionSchema)