const mongoose=require("mongoose")

const myschema=new mongoose.Schema({

    quserid:String,
    qusername:String,
    question:String,
    auserid:String,
    ausername:String,
    answer:String
   

})

module.exports= mongoose.model("answers",myschema)
