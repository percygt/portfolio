import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { useRef, useEffect, useState, useMemo } from "react";
// import useNavDetect from "./hooks/useNavDetect";
import "./App.scss";

const App = () => {
  const sectionRef = useRef();
  const headerRef = useRef();
  const aboutRef = useRef();
  const expRef = useRef();
  const contactRef = useRef();

  const [isNav, setIsNav] = useState("header");

  const callBack = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
        setIsNav(entry.target.id);
      }
    });
  };

  const optionsMemo = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.55,
    };
  }, []);
  useEffect(() => {
    headerRef.current = sectionRef.current.children[0];
    aboutRef.current = sectionRef.current.children[1];
    expRef.current = sectionRef.current.children[2];
    contactRef.current = sectionRef.current.children[3];
    const observer = new IntersectionObserver(callBack, optionsMemo);
    observer.observe(headerRef.current);
    observer.observe(aboutRef.current);
    observer.observe(expRef.current);
    observer.observe(contactRef.current);
  }, [sectionRef, optionsMemo]);

  return (
    <div className="app">
      <Nav data={isNav} />
      <div className="sections" ref={sectionRef}>
        <Header />
        <About />
        <Experience />
        {/* <Portfolio /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
