// import React from 'react'
// import './Answers.css'
// import useRef from 'react'
// import ReactDOM from "react-dom";
// function Answers() {
//   const inputRef = useRef("lol")
//     function myFunction() {
//         // document.getElementById("myDropdown").classList.toggle("show");
//        console.log( "lol")
//       }
//       function loll()
//       {
//         console.log("loll")
//       }
//       // Close the dropdown menu if the user clicks outside of it
//       window.onclick = function(event) {
//         if (!event.target.matches('.dropbtn')) {
//           var dropdowns = document.getElementsByClassName("dropdown-content");
//           var i;
//           for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//               openDropdown.classList.remove('show');
//             }
//           }
//         }
//       }
//   return (
//    <div className='anscontainer'>
//        <h2>Answer for quesions</h2>
//        <div className='anscontainer'>
//        <div class="dropdown">
//   <button onClick={()=>myFunction()} class="dropbtn">What are you doing ?</button>
//   <div id="myDropdown" ref={inputRef}  class="dropdown-content">
//   <textarea  name="answertext" placeholder='Type here'  />
//   </div>
// </div>
//        </div>
//    </div>
//   )
// }
// export default Answers
"use strict";