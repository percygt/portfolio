import React from "react";
import { MdHome } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { MdImportContacts } from "react-icons/md";
import "./nav.css";
import { useState, useMemo, useEffect } from "react";
// import { aboutRef } from "../about/About";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  // const callbackFunction = (entries) => {
  //   const [entry] = entries;
  //   setActiveNav(entry.isIntersecting);
  // };

  // const options = useMemo(() => {
  //   return { root: null, rootMargin: "0", threshold: 0 };
  // }, []);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(callbackFunction, option);
  //   const currentTarget = aboutRef.current;
  //   if (currentTarget) observer.observe(currentTarget);

  //   return () => {};
  // });

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <MdHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <BsPersonFill />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <MdWork />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdImportContacts />
      </a>
    </nav>
  );
};

export default Nav;
