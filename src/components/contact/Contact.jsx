import './Contact.css';
import React from 'react';
import { FaFacebook, FaTwitterSquare, FaInstagram } from 'react-icons/fa';

function Contact() {

    return (
        <div className="Contact">
            <div className="about-us">About Us
            <span className="text">Text</span>
            </div>
            <div className="contact-form">Contact Form</div>
            <div class="container">
  <form action="action_page.php">

    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>

    <label for="country">Country</label>
    <select id="country" name="country">
      <option value="france">France</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <label for="email">Email</label>
    <textarea id="email" name="email" placeholder="For_example@hotmail.com..."></textarea>

    <input className= "submit" type="submit" value="Submit"></input>

  </form>
</div>
            <div className="social-links2" >
    <a href ><FaFacebook /></a>
    <a href><FaTwitterSquare /></a>
    <a href><FaInstagram /></a>
    </div>
        </div>
       
    )
}

export default Contact;
