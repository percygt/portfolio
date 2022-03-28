import React from "react";
import "./footer.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Percy Timon
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="http://facebook.com" rel="noreferrer" target="_blank">
          <FaFacebook />
        </a>
        <a href="http://instagram.com" rel="noreferrer" target="_blank">
          <FaInstagram />
        </a>
        <a href="http://twitter.com" rel="noreferrer" target="_blank">
          <FaTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        &copy; Percy Timon. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
