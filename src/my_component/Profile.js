import React from 'react'
import './Profile.css'
import guest from './859030.png'
import { useState } from 'react'

import { useEffect } from 'react'
function Profile() {



  const [data, setdata] = useState([]);
  const [loading,setloading]=useState(true);





  useEffect(() => {
    fetch('http://localhost:9000/testapi/Profile')
      .then(results => results.json())
      .then(data => {
        setdata(data);
        setloading(false)
        console.log(data)
      });
  }, []); // <-- Have to pass in [] here!

  
if(loading==true)return <p>Loading</p>



  return (

  
      <div className='pcontainer'>
    <div className='pageprofile'>

    <img src={guest}></img>
    <div className='firstname'>
    <label>
    First name:
    <input type="text"  readOnly={true} name="name" value={data[0].Firstname } />
  </label>
    </div>
    <div className='lastname'>
    <label>
    Last name:
    <input type="text"  readOnly={true} name="name" value= {data[0].Lastname } />
  </label> 
  </div>
  <div className='email'>
  <label>
    Email:
    <input type="email" readOnly={true} name="name" value={data[0].Email } />
  </label>
  </div>


   
   
    </div>
    </div>
  )
}

export default Profile