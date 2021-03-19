import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__branding col-5">
                    <img src="/hev-logo.png" alt="logo" className="footer__logo"/>
                    <span className="footer__branding-title">Healthcare Excellence Ventures</span>
                </div>
                <div className="footer__contact-info col-4">
                    <h4>Address</h4>
                    <p>Secretariat road, Gwagwalada</p>
                </div>
                <div className="footer__socials col-2">
                    <ul className="footer__links">
                        <li className="footer__link"><a href="#">Facebook</a></li>
                        <li className="footer__link"><a href="#">Twitter</a></li>
                        <li className="footer__link"><a href="#">Email</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer__copyright">
              <span>{new Date().getFullYear()}&#169; Healthcare Excellence Ventures</span>
            </div>
        </footer>
    );
};

export default Footer;
