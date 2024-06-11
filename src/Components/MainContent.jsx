import React from 'react';
import '../App.css';
import cardData from './CardData';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const handleScroll = () => {
    window.scrollBy({
      top: 220,
      left: 0,
      behavior: 'smooth'
    });
  };
  const navigate=useNavigate();
  return (
    <>
      <div className="intro-container">
        <h1 id ="intro-heading">Welcome to 🆆🅴🅱🆇</h1>
        <p>
            We provide next gen web solutions in vaious domains like Web Design, AI Applications, Digital Marketing etc.
        </p>
        <button onClick={handleScroll} className="intro-btn"> All Services</button>
      </div>
      
      <div className="main-content">
      {cardData.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.imgSrc} alt={card.altText} className="card-image" />
          <div className="card-content">
            <h2>{card.title}</h2>
            {card.content.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
          </div>
          <button className="card-btn" onClick={()=>navigate(card.path)}>Know More</button>
        </div>
      ))}
    </div>
       
        
       <div className="contact-container">
        <h1>Let's build your first customized appliaction with 🆆🅴🅱🆇</h1>
        <button id='create-btn' onClick={()=>navigate("/form")}>Create Now</button>
      </div>
    </>
  );
};

export default App;
