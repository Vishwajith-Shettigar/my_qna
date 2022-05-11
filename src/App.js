import logo from './logo.svg';
import './App.css';
import Answers from './my_component/Answers';
import Profile from './my_component/Profile';
import { Component } from 'react';
import { render } from '@testing-library/react';
import Questions from './my_component/Questions';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Signup  from './my_component/Signup';
import Login from './my_component/Login';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Home from './my_component/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

class App extends React.Component{

  constructor(props)
  {
    super(props)
    this.state={apiResponse:"", lol:""}
  }


callAPI(){

  fetch("http://localhost:9000/testapi/ok")
  .then(res=>res.text())
  .then(res=>this.setState({apiResponse:res}))
}


componentWillMount(){
  this.callAPI();
  


  
}


render(){
  return (
    <Router>

<div className='App'>


<div className='header'>
  <img src={logo}/>
  <h2>Dont be fraid</h2>

  <div className='enterclass'>

     <Link to="/signup" className='enterclassop'>Sign up</Link>

  <Link to="/login" className='enterclassop'>Log in</Link>
  </div>
 
</div>
<div className='main_home'>


</div>
  
    <div className="nav">

     <div className='navop'>

<Link to="/Home" className='singleclassnamefornavop'>Home</Link>
     </div>
     <div className='navop'>

<Link to="/askq" className='singleclassnamefornavop'>Ask Questions</Link>
       
</div>

<div className='navop'>

<Link to="/Writeans" className='singleclassnamefornavop'>Write Answer</Link>
</div>


<div className='navop'>

<Link to="Profile" className='singleclassnamefornavop'>Profile</Link>
  
</div>


  
    
</div>

<Routes>


<Route
            path="/"
            element={
              <>
               <Home/>
              </>
            }
          ></Route>

<Route
            path="/Home"
            element={
              <>
               <Home/>
              </>
            }
          ></Route>

<Route
            path="/Profile"
            element={
              <>
               <Profile/>
              </>
            }
          ></Route>



<Route
            path="/Writeans"
            element={
              <>
               <Answers/>
              </>
            }
          ></Route>



<Route
            path="/askq"
            element={
              <>
               <Questions/>
              </>
            }
          ></Route>

<Route
            path="/signup"
            element={
              <>
               <Signup/>
              </>
            }
          ></Route>

<Route
            path="/login"
            element={
              <>
               <Login/>
              </>
            }
          ></Route>


</Routes>
    </div>  
    </Router>
  );
}
}

export default App;
