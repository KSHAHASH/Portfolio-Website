import React from "react";
import shahashImage from "../images/shahash.jpeg";
import "../style.css";
import { Link } from "react-router-dom";
const Home = () => {
  const about = `Hi, I'm Shahash Kandel, a Master's Student in Computer Science major at Appalachian State University.
  I am passionate about learning different sorts of things in my day-to-day life. As a master's candidate, I 
  dedicate most of my time to studying, collaborating with fellow students, and contributing to research labs. Computer
  Science is a vast field, and I have particulary found my interest in learning the tools and technologies 
  necessary for building the web and mobile applicaitons.`;

  const aboutSecond = ` Driven by my passion for creating responsive and scalable software solutions, 
  I am focusing my studies on Web and Mobile Development. Additionally with the rise of Artficial Intelligence, I 
  am deeply interested in learning advanced Machine Learning concepts. Beyond academics, I enjoy palying soccer and a
  big fan of FC Barcelona. Watching boxing and UFC fights is another hobby of mine. I also, spending time with friends and exploring new places and 
  embracing new experiences.`;

  return (
    <div className="backgroundAfterNavBar">
      <div className="image_and_intro">
        <div className="image_locator" style={{ flexBasis: "1000px" }}></div>
        <div className="flex_home">
          <h1>Shahash Kandel</h1>
          <h3>A Bit About Me</h3>
          <p className="paragraph-home">{about}</p>
          <p className="paragraph-home">{aboutSecond}</p>
        </div>
      </div>

      <div className="flex_paragraphs">
        <Link className="circle" to="/resume">
          Resume
        </Link>
        <Link
          className="circle"
          style={{ backgroundColor: "#FF8C00", paddingLeft: "20px" }}
          to="/projects"
        >
          Projects
        </Link>
        <Link
          className="circle"
          style={{ backgroundColor: "#006400" }}
          to="/research"
        >
          Research
        </Link>
        <Link
          className="circle"
          style={{ backgroundColor: "#00008B", paddingLeft: "20px" }}
          to="/contact"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Home;
