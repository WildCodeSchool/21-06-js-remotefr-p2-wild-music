import './Contact.css';
import React from 'react';

function Contact() {
    return (
        <div className="Contact">
            <div className="contact-form">Contact Form</div>
            <div class="container"> 

                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Name"></input>

                <label for="email">Email</label>
                <input type="text" id="email" name="email" placeholder="For-example@hotmail.com"></input>

                <label for="country">Country</label>
                <select id="country" name="country">
                <option value="france">France</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
                </select>

                <label for="Request">Request</label>
                <textarea className="request" name="request" placeholder="Text..."></textarea>

                <input className= "submit" type="submit" value="Submit" onClick={()=> alert("You've just submitted your Contact form !")}></input>

             </div>
        </div>
    )
}

export default Contact;