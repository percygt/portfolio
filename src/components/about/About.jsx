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
            I'm an <span>Electronics Engineer</span> by profession carving a
            path to the career that I ❤️ which is
            <span> Software Development</span> . An avid fan of
            <span> blockchain technology</span> and the brillance of
            <span> dApps</span>(decentralize applications). A problem-solver,
            well-organized person, and an independent employee with high
            attention to detail.
          </p>
          <p>
            I have a fair amount of knowledge building applications using{" "}
            <span>
              JavaScript, PHP, Python, and libraries such as JQuery and ReactJS
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
            best version of myself to fulfill my job description in any way I
            can.
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
