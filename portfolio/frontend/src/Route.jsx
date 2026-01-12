import React from "react";
import { Element } from "react-scroll";
import Home from "./assets/pages/Home/Home";
import About from "./assets/pages/About/About";
import Project from "./assets/pages/Project/Project";
import Skills from "./assets/pages/Skills/Skills";
import Contact from "./assets/pages/Contact/Contact";

const Route = () => {
  return (
    <>
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <Project />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </>
  );
};

export default Route;
