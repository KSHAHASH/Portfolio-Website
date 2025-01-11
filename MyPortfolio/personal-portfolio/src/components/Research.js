import React from "react";
import "../experience.css";
import appalachian from "../images/experience/appalachian.webp";
import jackson from "../images/experience/jackson.png";
import takeo from "../images/experience/takeo.png";
import wallace from "../images/experience/wallace.png"
const Research = () => {
  const languages = [
    "JavaScript",
    "Kotlin",
    "C++",
    "Java",
    "Python",
    "SQL",
    "HTML/CSS",
  ];
  const frameworks = [
    "React",
    "Redux",
    "Node.js",
    "Express.js",
    "Bootstrap",
    "Retrofit",
    "Junit",
    "Espresso",
  ];
  const tools = [
    "VS Code",
    "Android S.",
    "Git",
    "MongoDB",
    "Firebase",
    "Wireshark",
    "Postman",
    "Bash",
  ];

  const experienceInformation = [
    {
      
      image: appalachian,
      name:"Appalachian State University",
      title: "Research Assistant",
      date: `August '24 - Present`,
    },
    {
  
      image: appalachian,
      name:"Appalachian State University",
      title: "Teaching Assistant",
      date: `August '24 - December '24`,
    },

    {
      
      image: jackson,
      name: "Jackson State University",
      title: "Research Assistant",
      date: `August '19 - December '19`,
    },
    {
      
      image: wallace,
      name: "Wallace Community College",
      title:"Tutor",
      date: `January '18 - May '18`
    },

    {
      
      image: takeo,
      name: `Takeo.AI`,
      title: "React Developer Bootcamp",
      date: `March '22 - May '22`,
    },
   
  ];

  return (
    <div className="main-container">
      <div className="flex---container">
        <div>
          <p className="skills">Skills</p>
          <div className="flex-container-skills">
            <div className="flex-container-skills-languages">
              <p className="take-full-space">Languages</p>
              {languages.map((language, index) => (
                <div key={index} className="flex-item-skills">
                  <p>{language}</p>
                </div>
              ))}
            </div>

            <div className="flex-container-skills-languages">
              <p className="take-full-space">Frameworks/Libraries</p>
              {frameworks.map((frameworks, index) => (
                <div key={index} className="flex-item-skills">
                  <p>{frameworks}</p>
                </div>
              ))}
            </div>
            <div className="flex-container-skills-languages">
              <p className="take-full-space">Tools</p>
              {tools.map((tools, index) => (
                <div key={index} className="flex-item-skills">
                  <p>{tools}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* flex for the experience */}
        <div>
          <p className="title-para">Experience</p>

          {experienceInformation.map((information) => (
            <div key={information.index} className="experience-container">
              <div className="appalachian-container">
                <img
                  className="image-styler"
                  src={information.image}
                  alt="image"
                />
                <div className="paragraph-styler">
                  <p style={{fontWeight:"bolder"}}>{information.name}</p>
                  <p>{information.title}</p>
                  <p>{information.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Research;
