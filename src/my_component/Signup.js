import React, { Component } from "react";
import { useState } from "react";
import Axios from "axios";

function Signup() {


      const [firstname,setf]=useState("")
  const [lastname,setl]=useState("")
  const [email,sete]=useState("")
  const [password,setp]=useState("")
const url="http://localhost:9000/testapi/signup"

  function handlef(e){
  
    const newdata={...firstname};
    newdata[e.target.id]=e.target.value;
    setf(newdata)
    
console.log(firstname.inputf,"vkjv")
 


     
// setq(h.textContent)
    
}

function handlel(e){
  
    const newdata={...lastname};
    newdata[e.target.id]=e.target.value;
    setl(newdata)
    
console.log(lastname.inputl,"vkjv")
 


     
// setq(h.textContent)
    
}

function handlee(e){
  
    const newdata={...email};
    newdata[e.target.id]=e.target.value;
    sete(newdata)
    
console.log(email.inpute,"vkjv")
 


     
// setq(h.textContent)
    
}

function handlep(e){
  
    const newdata={...password};
    newdata[e.target.id]=e.target.value;
    setp(newdata)
    
console.log(password.inputp,"vkjv")
 


     
// setq(h.textContent)
    
}

     function submit(e){

       
        e.preventDefault(); console.log(firstname.length)
        if((firstname).length===0 ||(lastname).length===0 || (email).length===0 || (password).length===0 )
        {
            window.confirm("Please Fill Properly")
        }
        else{
             Axios.post(url,{
        
        
               firstname:firstname.inputf,
               lastname:lastname.inputl,
               email:email.inpute,
               password:password.inputp
            }).then(res=>{
        
                console.log(res)
            })
        }

     }
    
  
        return (
            <form onSubmit={(e)=>submit(e,)}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control" id="inputf"
            placeholder="Enter your first name" onChange={(e)=>handlef(e)}
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input onChange={(e)=>handlel(e)}
            type="text"
            className="form-control"
            placeholder="Enter your last name" id="inputl"
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input 
            type="email"
            className="form-control"
            placeholder="Enter email" id="inpute" onChange={(e)=>handlee(e)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input 
            type="password"
            className="form-control"
            placeholder="Enter password" id="inputp" onChange={(e)=>handlep(e)}
          />
        </div>
        
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
        </div>
       
      </form>
        );
    }


export default Signup