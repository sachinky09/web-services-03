import React from 'react';
import '../App.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h3>Contact</h3>
                <p>Email: info@WebX.com</p>
                <p>Phone: +123 456 7890</p>
            </div>
            <div className="footer-section">
                <h3>Headquarters</h3>
                <p>Chowringhee St.</p>
                <p>Kolkata:700021</p>
            </div>
            <div className="footer-section">
                <h3>About Us</h3>
                <p>We provide web services including digital marketing, web design, AI solutions, and more.</p>
            </div>
            <div className="footer-section">
                <h3>Follow Us</h3>
                    <a href="https://www.facebook.com/"><FaFacebookF /></a>
                    <a href="https://www.instagram.com/"><FaInstagram /></a>
                    <a href="https://www.linkedin.com/feed/"><FaLinkedinIn /></a>
            </div>
            <div className="footer-line"></div>
            <p className="footer-copyright">© 2024 Web Services. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
