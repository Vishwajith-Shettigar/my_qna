

import React, { useRef } from "react";
// import ReactDOM from "react-dom";
import './Answers.css'
import Axios from 'axios'

import {useState,useEffect} from 'react'
function Answers() {

  const [listquesrions, setlistq] = useState([]);
  const [listqloading,setlistql]=useState(true)


useEffect(() => {
    fetch('http://localhost:9000/testapi/showallq')
      .then(results => results.json())
      .then(data => {
        setlistq(data);
        setlistql(false)
      });
  }, []);
  


// const qref=useRef("")

  const url="http://localhost:9000/testapi/writeans";

  const [answer,seta]=useState("")
  const [question,setq]=useState("")
  
  
  function handle(e,key){
  
      const newdata={...answer};
      newdata[e.target.id]=e.target.value;
      seta(newdata)

   
      console.log(answer.input)
      setq(e.target.name)

       
  // setq(h.textContent)
      
  }
  

 
  // console.log(qref.target.current.value)
  function submit(e,key)
  {
  
    //  console.log(h.textContent)
  console.log(question)
   
     console.log(question,"ho  ",answer )
   
console.log(key)
      e.preventDefault();
  if((answer.input).length==0)
  {
      window.confirm("Write Answer")
  }
  else{
       Axios.post(url,{
  
  
          question:question,
          answer:answer.input
      }).then(res=>{
  
          console.log(res)
      })
  }
  
document.querySelector('#input').value=""
     
  
     
  }
  
  
  //  displaying questions below



if(listqloading===false)
{
  console.log(listquesrions);

}else
{
  console.log(false)
}


  return ( 


    <div className="anscontainer">
 <h2>Answer the questions</h2>

  

{
listquesrions.map((item,key)=>(
<div className="awriteans">

  <form onSubmit={(e)=>submit(e,"h")}>
    <h5 id={"h"}>{item.question}</h5>
  <textarea name={item.question}  id="input"   onChange={(e)=>handle(e,key)} placeholder='Type here' />
  <button  >Submit</button>
    </form>
</div>
  ))
  }

  

    </div>
  )
}

export default Answers