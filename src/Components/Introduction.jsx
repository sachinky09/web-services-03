import React from "react";
import '../App.css'
const Introduction = () =>{
    const handleScroll = () => {
        window.scrollBy({
          top: 500,
          left: 0,
          behavior: 'smooth'
        });
      };
   return(
    <>
    <div className="intro-container">
        <h1 id ="intro-heading">Welcome to 🆆🅴🅱🆇</h1>
        <p>
            We provide next gen web solutions in vaious domains like Web Design, AI Applications, Digital Marketing etc.
        </p>
        <button onClick={handleScroll}className="intro-btn" ><a href="./MainContent.jsx">All Services</a></button>
        
    </div>
    </>
   );
}
export default Introduction;