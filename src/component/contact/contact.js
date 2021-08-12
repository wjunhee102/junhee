import React from 'react';
import './css/contact.css';

const contact_info = {
    name : "황준희",
    phone : "010-9878-8227",
    email : "wjunhee102@gmail.com",
    cv : ""
}

function Contact() {
    return (
        <>
        <section className="contact">
            <div className="inner">
                <p className="closing">
                    <span>...</span>       
                </p>
                <div className="contact_info">
                    <p className="phone">{contact_info.phone}</p>
                    <p className="email">{contact_info.email}</p>
                    <a className="link" href="https://github.com/wjunhee102" target="_blink">https://github.com/wjunhee102</a>
                </div>
            </div>
        </section>
        <footer id="footer">
            <div className="inner">
                <p className="copy">&#169;Copyright 2021 황준희.</p>
            </div>
        </footer>
        </>
    )
}




export default Contact; 