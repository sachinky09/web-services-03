import React, { useState } from 'react';
import '../App.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const handleScroll = () => {
        window.scrollBy({
          top: 500,
          left: 0,
          behavior: 'smooth'
        });
    };
    const handleScroll1 = () => {
        window.scrollBy({
          top: 5000,
          left: 0,
          behavior: 'smooth'
        });
    };
    return (
        <nav className="navbar">
            <div className="navbar-logo">
            🆆🅴🅱🆇
            </div>
            <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <a className="preserve-whitespace" href="#home"> Home </a>
                <a className="preserve-whitespace" href="#services"onClick={handleScroll}> Services </a>
                <a className="preserve-whitespace" href="#about"onClick={handleScroll1}> About </a>
                <a className="preserve-whitespace" href="#contact"onClick={handleScroll1}> Contact </a>
            </div>
            <div className="navbar-toggle" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
        </nav>
    );
};

export default Navbar;
