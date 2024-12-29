import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Let's Talk Section */}
        <div className="footer-talk">
          <h2>БУДЕМ НА СВЯЗИ!</h2>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-links">
            <a
              href="https://wa.link/aq18hw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://t.me/aizhanov_adil"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram />
            </a>
            <a
              href="https://www.linkedin.com/in/adilaizhanov/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/your.adil_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
          <a href="tel:+77761156416">+7-776-115-64-16</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
