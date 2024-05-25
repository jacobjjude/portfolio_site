// src/pages/Contact.js

import React from 'react';
import ContactForm from '../components/contactform';
import SocialSidebar from '../components/socialsidebar';
import '../styles/Contact.css';

function Contact() {
    return (
        <div className="mt-5 contact-content">
            <h1>Contact</h1>
            <p>This is my contact page.</p>
            <div className="row">
                <div className="col-lg-8 col-md-4">
                    <ContactForm />
                </div>
                <div className="col-lg-3 col-md-3">
                    <SocialSidebar />
                </div>
            </div>
        </div>
    );
}

export default Contact;
