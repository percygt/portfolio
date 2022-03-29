import React from "react";
import "./header.scss";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import { init } from "ityped";
import { useEffect, useRef } from "react";

const Header = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Coder", "Electronics Engineer", "Blockchain Enthusiast"],
    });
  }, []);
  return (
    <div className="header">
      <div className="container header_container">
        <h5>Hi there, I'm</h5>
        <h1>Percy</h1>
        <h5 className="text-light">
          <span ref={textRef}></span>
        </h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="percy" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </div>
  );
};

export default Header;
