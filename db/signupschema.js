const mongoose =require("mongoose")

const mysignupschema=new mongoose.Schema({

    Firstname:String,
    Lastname:String,
    Email:String,
    Password:String

});

module.exports=mongoose.model("signups",mysignupschema);