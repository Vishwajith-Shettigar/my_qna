const mongoose =require("mongoose")

const questions=new mongoose.Schema({

    userid:String,
    question:String

});

module.exports=mongoose.model("questions",questions);