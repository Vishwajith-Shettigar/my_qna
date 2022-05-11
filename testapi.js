const express=require("express")
const app= express()
const bodyParser = require('body-parser');
// const cors = require("cors");
require('../db/config')
const Answermodel=require("../db/AnswersSchema");
const signupmodel=require("../db/signupschema");
const questionmodel=require("../db/questions_schema")
app.use(bodyParser.json());
// app.use(cors());
app.use(express.json())
app.get("/lol",function(req,res,next){
    res.send("vish")
    
    
    
    
    })
app.get("/ok",function(req,res,next){
res.send("lolllllllllll")




})

    app.get("/Home",async function(req,res,next){

let data=await Answermodel.find();
// let  data = new Answermodel({ quserid:"queygcuywe",
//     qusername:"q vish",
//     question:"What is u r anme ?",
//     auserid:"agebcjew",
//     ausername:"a Vdark",
//     answer:"Dark vish"
//    })
// let result=await data.save();
//     console.log(result)



        // res.json([
        //     {"name":"vish","q":"what lo ?"},
        //     {"name":"lol","q":"ece?"}]
        // )
        // console.log(data)

        res.json(data);
        
        
        
        
        })

let user_email="";
let user_id="";
let user_name=""


        app.get("/Profile",async function (req,res,next){


                  let data=await signupmodel.find({Email:user_email});
                  res.json(data);
  
                // let  data = new signupmodel({

                //     Firstname:"dark shettigar dark",
                //     Lastname:"shettigar lol",
                //     Email:"vish@gmail.com",
                //     Password:"vbuwygvuw"
                
                // })


                // let result=await data.save();
                // console.log(result)
   
        })

        

        app.post("/askq",async(req,res)=>{
console.log(req.body.Question)

let  data = new questionmodel(   {userid:user_email,
        question:req.body.Question})
        let result=await data.save();

        })

        app.get("/showq",async(req,res)=>{
                let data=await questionmodel.find({userid:user_email});
                res.json(data);


        })
    

        app.post("/writeans",async(req,res)=>{

                const question_user="darvsih";

                let q=await questionmodel.find({question:req.body.question});
                let quser=q[0].userid
                let  data = new Answermodel(   {quserid:question_user,
                        qusername:quser,
                        question:req.body.question,
                        auserid:user_id,
                        ausername:user_name,
                        answer:req.body.answer
                
                })
                        let result=await data.save();

                console.log(req.body)
                
        })


        app.get("/showallq",async(req,res)=>{
                let data=await questionmodel.find();
                res.json(data);


        })



        app.post("/signup",async(req,res)=>{

                user_name=req.body.firstname+" "+ req.body.lastname
                user_email=req.body.email

             
                let  data = new signupmodel(   {
                        Firstname:req.body.firstname,
                        Lastname:req.body.lastname,
                        Email:req.body.email,
                        Password:req.body.password
                    
                
                })
                        let result=await data.save();

                console.log(req.body)

              
        })





        app.post("/login",async(req,res)=>{

              console.log(req.body)

             let result= await signupmodel.findOne({ Email: req.body.email,Password:req.body.password });
             if(result){
              
                user_email=req.body.email

                     console.log("exists")
                     res.status(200).send("1")
                     let data=await signupmodel.find({Email:user_email});
                     console.log(data)
                     user_name=data[0].Firstname+" "+ data[0].Lastname
console.log(user_name)

             }else
             {
                     console.log("not exists ")
                     res.status(200).send("0")
             }
       
            
        })


        
        // app.get("/logincheck",(req,res)=>{
        //         console.log("lol",acceept)
        //         res.send(acceept);
        // })
module.exports=app;