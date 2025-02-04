// Imports
import React from "react";

// Components
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import About from "../About/About";
import Skills from "../Skills/Skills";
import TechStack from "../TechStack/TechStack";
import Tools from "../TechStack/Tools";
import Projects from "../Projects/Projects";
import Experience from "../Experience/Experience";
import Contact from "../Contact/Contact";

const Details: React.FC = () => {
  return (
    <div
      className="Details"
      style={{
        background: "white",
        width: "90%",
        margin: "auto",
        borderRadius: "11px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <Home />
      <About />
      <Skills />
      <TechStack />
      <Tools />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
};

export default Details;
