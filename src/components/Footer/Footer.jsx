import React from "react";
import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Logo and Contact Section */}
                <div className="footer-contact">
                    <h1 className="footer-logo">Kanak Naturals</h1>
                    <div className="contact-info">
                        <p>Get in touch</p>
                        <a href="mailto:info@kanaknaturals.com">INFO@KANAKNATURALS.COM</a>
                    </div>
                    <div className="contact-info">
                        <p>Contact</p>
                        <a href="tel:+12604904790">+1 (260) 490 4790</a>
                    </div>
                    <div className="contact-info">
                        <p>Headquarters</p>
                        <p>321 HOVAN DRIVE, FORT WAYNE, IN 46825</p>
                    </div>
                </div>

                {/* Let's Talk Section */}
                <div className="footer-talk">
                    <h2>LET'S TALK!</h2>
                    <a href="/contact" className="arrow-link">
                        →
                    </a>
                </div>

                {/* Collapsible Links */}
                <div className="footer-links">
                    <details>
                        <summary>PRODUCTS & SERVICES</summary>
                        <ul>
                            <li><a href="#product1">Product 1</a></li>
                            <li><a href="#product2">Product 2</a></li>
                        </ul>
                    </details>
                    <details>
                        <summary>KUSTOMERS</summary>
                        <ul>
                            <li><a href="#customer1">Customer 1</a></li>
                            <li><a href="#customer2">Customer 2</a></li>
                        </ul>
                    </details>
                    <details>
                        <summary>ABOUT</summary>
                        <ul>
                            <li><a href="#about">Our Story</a></li>
                            <li><a href="#team">Team</a></li>
                        </ul>
                    </details>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <div className="footer-legal">
                        <p>TERMS OF USE</p>
                        <p>PRIVACY POLICY</p>
                    </div>
                    <p>© 2024 Kanak Naturals. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
