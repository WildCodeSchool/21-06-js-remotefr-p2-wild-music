import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitterSquare, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <div className= "Footer">
            <div className="footer-columns-container">
                 <div className="footer-column footer-column-about">
                     <h4>About Us</h4>  
                     <div className='text'> 
                         <p>WildMusic aims</p>
                         <p>to give you access to a</p>
                         <p>wide choice of playlists.</p>
                         <p className="greetings-text">Developped by the wilders</p>
                         <p>Sarah, Karim, JM, Moana</p>
                         <p>and Anne.</p>
                     </div>
                 </div>
                <div className="footer-column footer-column-adress">
                    <div className="adress">
                       <h4>Adress</h4>
                       <p className="email-adress">WildMusic@hotmail.com</p>
                       <p>Remote</p>
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