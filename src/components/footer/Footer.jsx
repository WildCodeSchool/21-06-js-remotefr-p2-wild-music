import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitterSquare, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <div className= "Footer">
            <div className="footer-columns-container">
                 <div className="footer-column footer-column-about">
                     <h4>About Us</h4>
                     <span className='text'> 
                         <p>Wild music aims to allow access </p>
                         <p>to a large choices of playlists.</p>
                         <p>This website has been developped by the wilders</p>
                         <p>...</p>
                     </span>
                 </div>
                <div className="footer-column footer-column-adress">
                    <div className="adress">
                       <h4>Adresses</h4>
                       </div>
                </div>
                <div className="footer-column footer-column-social">
                    <h4>Social Networks</h4>
                <div className="social-links" >
                        <a href ><FaFacebook /></a>
                        <a href><FaTwitterSquare /></a>
                        <a href><FaInstagram /></a>
                    </div> 
                </div>
            </div>
            <p className="greetings">Made with Openwhyd API </p>
        </div>
    )
}

export default Footer;