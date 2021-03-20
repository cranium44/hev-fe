import React from "react";
import "./AboutPage.css";

const ContactForm = () => {
    return (
        <div className="about__contact-form-container">
            <div className="about__contact-form-inputs col-8 ">
                <input
                    name="name"
                    type="text"
                    placeholder="Enter full name..."
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Enter your email address..."
                />
            </div>
            <textarea name="mesage" placeholder="Enter message..." />
            <button className="about__contact__btn">Send</button>
        </div>
    );
};

export default ContactForm;
