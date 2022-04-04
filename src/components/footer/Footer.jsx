import React from "react";
import "./footer.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="foote" r>
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
        <a
          href="https://web.facebook.com/perxz05/"
          rel="noreferrer"
          target="_blank"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/ngr.prcy/"
          rel="noreferrer"
          target="_blank"
        >
          <FaInstagram />
        </a>
        <a href="https://twitter.com/PercyGT0" rel="noreferrer" target="_blank">
          <FaTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        &copy; Percy Timon. All rights reserved.
        <div>
          {" "}
          Made with ❤️. GitHub source code link{" "}
          <a
            href="https://github.com/percygt/portfolio"
            rel="noreferrer"
            target="_blank"
            style={{ color: "blue" }}
          >
            here.
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
