import React, { useState } from 'react';
import '../App.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="navbar">
            <div className="navbar-logo">
            🆆🅴🅱🆇
            </div>
            <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <a className="preserve-whitespace" href="#home"> Home </a>
                <a className="preserve-whitespace" href="#services"> Services </a>
                <a className="preserve-whitespace" href="#about"> About </a>
                <a className="preserve-whitespace" href="#contact"> Contact </a>
            </div>
            <div className="navbar-toggle" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
        </nav>
    );
};

export default Navbar;
