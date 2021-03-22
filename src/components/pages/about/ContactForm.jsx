import React, { useState, useEffect } from "react";
import "./AboutPage.css";

const ContactForm = () => {
    const url = "https://hev-backend.herokuapp.com/email"
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log({ name, email, message, phone });
        const requestBody = { name, email, message, phone }
        sendEmail(url, requestBody)
    };

    async function sendEmail(url, body) {
        const response = await fetch(
            url,
            {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                  'Content-Type': 'application/json'
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(body) // body data type must match "Content-Type" header
              }
        );
        return response.json();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="about__contact-form-container">
                    <div className="about__contact-form-inputs">
                        <div className="form-group">
                            <label
                                htmlFor="name"
                                className="form-control-label"
                            >
                                Full Name
                            </label>
                            <input
                                className="form-control"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                name="name"
                                type="text"
                                required
                                placeholder="Enter full name..."
                            />
                        </div>
                        <div className="form-group">
                            <label
                                htmlFor="email"
                                className="form-control-label"
                            >
                                Your Email
                            </label>
                            <input
                                className="form-control"
                                name="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                type="email"
                                required
                                placeholder="Enter your email address..."
                            />
                        </div>

                        <div className="form-group">
                            <label
                                htmlFor="phone"
                                className="form-control-label"
                            >
                                Phone
                            </label>
                            <input
                                className="form-control"
                                name="phone"
                                value={phone}
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                }}
                                type="phone"
                                placeholder="Enter your phone number..."
                            />
                        </div>
                    </div>
                    <textarea
                        className="form-control"
                        name="mesage"
                        value={message}
                        onChange={(e) => {
                            setMessage(e.target.value);
                        }}
                        placeholder="Enter message..."
                        itemType="text"
                        required
                        rows="7"
                        cols="100"
                    />
                    <button
                        className="btn-contact btn-form btn-black-outline"
                        type="submit"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
