import React from 'react'
import './Home.css'


class Home extends React.Component{

    constructor(props)
    {
      super(props)
      this.state={ home:[]}
    }
  
  

   callAPI(){
  
  
    fetch("http://localhost:9000/testapi/Home")
    .then(res=>res.json())
    .then(res=>{
    
      
       this.setState({home: res})})
  }
  
  componentWillMount(){
    this.callAPI();
  }
  
  










render() { 
    console.log((this.state.home.length))
    const {home}=this.state;

    if (home.length==0) return <p>Loading</p>
  return (
     
    
      
    
      <div className='Home'>
<div className='left'>
<h3>Left</h3>
</div>


      
      
      <div className='center'>
     { home.map((item) => (
        <div className='container'>
<div className='q'>
<span>{item.qusername} </span>
<h4>{item.question}</h4>
</div>
<div className='a'>
<span>{item.ausername}</span>
<h4>{item.answer}</h4>

</div>


           
       
        </div>

      
))}
</div>



<div className='right'>
<h3>right</h3>
</div>


      </div>
     



// wait ahaya

// {/* <p>{this.state.home.}</p> */}
//     {/* //  {"home":[{"name":"vish","q":"what lo, ?"},{"name":"lol","q":"ece?"}]} */}

  )
}


}
export default Home