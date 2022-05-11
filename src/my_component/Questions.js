import React from 'react'
import './Questions.css'
import Axios from 'axios'
import {useState,useEffect} from 'react'
function Questions() {











const url="http://localhost:9000/testapi/askq";

const [data,setdata]=useState({input:""})

function handle(e){

    const newdata={...data};
    newdata[e.target.id]=e.target.value;
    setdata(newdata)
    console.log(newdata);
}


function submit(e)
{

    e.preventDefault();
if(data.input.length==0)
{
    window.confirm("Enter your Question")
}
else{
     Axios.post(url,{


        Question:data.input
    }).then(res=>{

        // console.log(res.data)
    })
}

   

   setdata({input:""})
}








// show q part 
const [showq,setshowq]=useState([]);
const [loading,setloading]=useState(true);





useEffect(() => {
  fetch('http://localhost:9000/testapi/showq')
    .then(results => results.json())
    .then(data => {
      setshowq(data);
      setloading(false)
    });
}, []); // <-- Have to pass in [] here!


if(loading==true)return <p>Loading</p>

console.log(showq)

  return (
    <div className='qcontainer'>
        <div className='inputq'>
            <h3>Ask your question</h3>
            <form onSubmit={(e)=>submit(e)}>
            <textarea  id="input" onChange={(e)=>handle(e)} type="textarea"  value ={data.input} name="input" placeholder='Type here'  />
            <button  >Submit</button>
            </form>
        </div>

        <div className='showquestion'>
            <h3>Your Recent Questions</h3>
{showq.map((item)=>(

    <h5>{item.question}</h5>
    
    
))}
        </div>
    </div>
  )
}

export default Questions