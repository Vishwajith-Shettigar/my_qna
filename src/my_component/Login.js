import React, { Component } from "react";
import { useState } from "react";
import Axios from "axios";
import { useEffect } from "react";
import Home from "./Home";

function Signup() {


  const [email,sete]=useState("")
  const [password,setp]=useState("")
  const [loading,setl]=useState(false)
  const [resc,setresc]=useState("")

const url="http://localhost:9000/testapi/login"

 

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

      
        e.preventDefault(); 
        if( (email).length===0 || (password).length===0 )
        {
            window.confirm("Please Fill Properly")
        }
        else{
             Axios.post(url,{
        
        
              
               email:email.inpute,
               password:password.inputp
            }).then(res=>{
        
setresc(res.data)
console.log(resc)
                
                 
            })

            console.log("loading")
           
           setl(true)

            
        }



     }


// if(loading===true)
// {
//      fetch('http://localhost:9000/testapi/logincheck')
//                      .then(results => results.text())
//                      .then(data => {
//                      setcheck(data)
             
//                      console.log("lkol,"+logincheck)
            
//                      }); 


//                     }
// // useEffect(()=>{


//   if(logincheck==true)
// {

//   console.log("inside login")
//   return( 
//     <Home/>
//   )
// }

// },[logincheck])


//      let a=0;

// useEffect(()=>{
// console.log("inaside effexr")



//   fetch('http://localhost:9000/testapi/logincheck')
//                   .then(results => results.json())
//                   .then(data => {
//                   setcheck(data)
                 
//                   console.log("lkol,"+logincheck)
                
//                   }); 
               
                 
//                     if(logincheck==false)
//               {
//                   window.confirm("Wrong Email or password")
//               } 
//               else
//               {
//                 console.log("welcome")
               
//                 a=1;
                 
                  
                
//               }
                  
            

          
// },[loading],)
               
                 
                 

       

           

  
             

              

             



//   // <-- Have to pass in [] here!

// if(a==1){
//   return( <><p>lol</p></>)
// }

if(resc==1)
{
  return(<Home/>)
}
  
        return (
            <form onSubmit={(e)=>submit(e)}>
        <h3>Sign In</h3>
        
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
            Log in 
          </button>
        </div>
       
      </form>
        );
        
        }

export default Signup