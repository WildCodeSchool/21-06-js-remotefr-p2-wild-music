import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitterSquare, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <div className= "Footer">
            <div className="footer-columns-container">
                <div className="footer-column footer-column-social"></div>
                <div className="social-links" >
                    <a href ><FaFacebook /></a>
                    <a href><FaTwitterSquare /></a>
                    <a href><FaInstagram /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;