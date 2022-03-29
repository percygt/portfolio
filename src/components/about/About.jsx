import React from "react";
import "./about.css";
import GRADME from "../../assets/gradme.png";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="gradme">
          <img src={GRADME} alt="percy" />
        </div>
        <div className="about__content">
          <p>
            Hi, I'm an <span>Electronics Engineer</span> carving a path into{" "}
            <span>Software Development</span> which I ❤️. An avid fan of
            <span> blockchain technology</span> and its potential to be globally
            adopted and change our financial system .
          </p>
          <p>
            I am a problem-solver, a well-organized person, and an independent
            employee with high attention to detail. I have a fair amount of
            knowledge building applications using{" "}
            <span>
              JavaScript, PHP, Python, and libraries such as JQuery and ReactJS
            </span>
            .
          </p>
          <p>
            I know that my experience in software development is a bit short.
            And to compensate for that, I am constantly learning every day to
            enhance my skill.
          </p>
          <p>
            If given a chance to work with you rest assured that I will be the
            best version of myself to fulfill my job description in any way I
            can.
          </p>
        </div>
      </div>
      <div className="contactme">
        <a href="#contact" className="btn btn-primary">
          Contact me
        </a>
      </div>
    </section>
  );
};

export default About;
