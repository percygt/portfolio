import React from "react";
// import { useRef, useEffect, useState, useMemo } from "react";
import "./about.css";
import GRADME from "../../assets/gradme.png";

const About = () => {
  return (
    <section className="about" id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={GRADME} alt="percy" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__content-text">
            <p>
              A registered <span>Electronics Engineer</span> carving a path to
              the career that I ❤️, <span> Software Development</span>. I'm a
              well-organized person with high attention to detail and can work
              independently.{" "}
            </p>
            <p>
              As fanatic of
              <span> blockchain technology</span> and the brillance of
              <span> web3</span> and<span> dApps</span>, I have a fair amount of
              knowledge using{" "}
              <span>
                JavaScript, PHP, Python, and libraries/frameworks such as JQuery
                and ReactJS{" "}
              </span>
              as tools for building apps.
            </p>
            {/* <p>
            I know that my experience in software development is a bit short.
            And to compensate for that, I am constantly studying and improving
            every single day to enhance my skill as a software developer.
          </p> */}
            <p>
              If given a chance to work with you, rest assured that I will be
              the best version of myself to fulfill my job description in any
              way possible.
            </p>
          </div>

          <div className="contactMe">
            <a href="#contact" className="btn btn-primary">
              Let's talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
