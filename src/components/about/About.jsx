import React from "react";
import { useRef, useEffect, useState, useMemo } from "react";
import "./about.css";
import GRADME from "../../assets/gradme.png";

const About = () => {
  return (
    <section className="about" id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <section className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={GRADME} alt="percy" />
          </div>
        </div>
        <div className="about__content">
          <p>
            A registered <span>Electronics Engineer</span> carving a path to the
            career that I ❤️,
            <span> Software Development</span>. A fanatic of
            <span> blockchain technology</span> and the brillance of
            <span> dApps</span> and<span> web3</span>. A well-organized person
            with high attention to detail and can work independently.
          </p>
          <p>
            I have a fair amount of knowledge building applications using
            <span>
              JavaScript, PHP, Python, and libraries/frameworks such as JQuery
              and ReactJS
            </span>
            .
          </p>
          {/* <p>
            I know that my experience in software development is a bit short.
            And to compensate for that, I am constantly studying and improving
            every single day to enhance my skill as a software developer.
          </p> */}
          <p>
            If given a chance to work with you, rest assured that I will be the
            best version of myself to fulfill my job description in any way
            possible.
          </p>
          <div className="contactme">
            <a href="#contact" className="btn btn-primary">
              Let's talk
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
