import React from "react";

function ContactForm() {
    return (
        <div class="contact-form-section">
            <h1>Here is the contact form</h1>
            <div class="form-container">
                <form class="contact-form">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required></input>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required></input>
                    <label for="reason">Reason:</label>
                    <input type="text" id="reason" name="reason"></input>
                    <label for="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;
