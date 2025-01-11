import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../project.css";
import cardFirst from "../images/cardFirst.png";
import cardSecond from "../images/cardSecond.png";
import cardThird from "../images/cardThird.png";
import cardFourth from "../images/cardFourth.png";
import laptopImage from "../images/laptop.png";
import githubImage from "../images/github.png";
import forwardButton from "../images/forward.png";
import backwardButton from "../images/backward.png";
import mountaineerFirst from "../images/mountaineer/mountaineerFirst.png";
import mountaineerSecond from "../images/mountaineer/mountaineerSecond.png";
import mountaineerThird from "../images/mountaineer/mountaineerThird.png";
import mountaineerFourth from "../images/mountaineer/mountaineerFourth.png";
import exerciseFirst from "../images/exercise/exerciseFirst.png";
import exerciseSecond from "../images/exercise/exerciseSecond.png";
import exerciseThird from "../images/exercise/exerciseThird.png";
import exerciseFourth from "../images/exercise/exerciseFourth.png";
import weatherFirst from "../images/weather/weatherFirst.png";
import weatherSecond from "../images/weather/weatherSecond.png";
import weatherThird from "../images/weather/weatherThird.png";
import weatherFourth from "../images/weather/weatherFourth.png";
import criminalFirst from "../images/criminal/criminalFirst.png";
import criminalSecond from "../images/criminal/criminalSecond.png";
import criminalThird from "../images/criminal/criminalThird.png";
import criminalFourth from "../images/criminal/criminalFourth.png";
import newsFirst from "../images/news/newsFirst.png";
import newSecond from "../images/news/newsSecond.png";
import newsThird from "../images/news/newsThird.png";
import newsFourth from "../images/news/newsFourth.png";

const Projects = () => {
  const [currentFlexBox, setNextFlexBox] = useState(1);

  const projects = [
    {
      id: 1,
      title: "PLAY YOUR CARDS RIGHT",
      descriptionFirst: `i). Developed an Android app featuring War and Blackjack, with
      dynamic gameplay powered by the Deck of Cards API.`,
      descriptionSecond: `ii). Implemented efficient data handling using Kotlin coroutines
      and a robust ViewModel-Repository architecture to ensure
      flawless API integration and smooth app performance.`,
      descriptionThird: ` iii). Delivered an engaging user experience with a polished UI,
      pop-ups for game completion, and implicit intents for sharing
      game results across apps.`,
      githubUrl:
        "https://github.com/KSHAHASH/BlackJackAndWar-Card-Game-Mobile-",
      deployedUrl: "",
      imageFirst: cardFirst,
      imageSecond: cardSecond,
      imageThird: cardThird,
      imageFourth: cardFourth,
      
    },
    {
      id: 2,
      title: "MOUNTAINEER MOMENTS",
      descriptionFirst: `i). Developed a mobile app to record and share campus
      experiences, improving scalability and reducing crash rates by
      implementing ViewModel and Repository patterns.`,
      descriptionSecond: `ii). Integrated Retrofit for seamless RESTful API communication,
      Coil for efficient image loading, and RecyclerView with Kotlin
      coroutines for smooth data handling display.`,
      descriptionThird: `iii). Conducted comprehensive UI testing and utilized implicit
      intents to enable reliable functionality and efficient content
      sharing between apps.`,
      imageFirst: mountaineerFirst,
      imageSecond: mountaineerSecond,
      imageThird: mountaineerThird,
      imageFourth: mountaineerFourth,
      githubUrl:"https://github.com/KSHAHASH/MountaineerMoments-MobileApp-",
      deployedUrl:""
    },
    {
      id: 3,
      title: "CRIMINAL INTENT",
      descriptionFirst: `i). Developed an Android mobile app to record crimes, assign suspects from the
      contact list, add photos for evidence, and log events using date and time pickers.`,
      descriptionSecond: `ii). Implemented RecyclerView for efficiently displaying list of crimes, utilizing implicit intents
      to access and select contacts directly form the device's contact list, and leveraged coroutines to handle background tasks seamlessly.`,
      descriptionThird: `iii). Applied Repository pattern to manage data access and utilized Room library
      for database operations, leveraging SQLite as the underlying database for seamless data storage and retrival. `,
      imageFirst: criminalFirst,
      imageSecond: criminalSecond,
      imageThird: criminalThird,
      imageFourth: criminalFourth,
      githubUrl:"https://github.com/KSHAHASH/Criminal-Intent",
      deployedUrl:""
    },
    {
      id: 4,
      title: "EXERCISE TRACKER",
      descriptionFirst: `i). Developed a web application for tracking exercise logs with full CRUD functionalities.`,
      descriptionSecond: `ii). Implemented Node.js with Express.js backend to create scalable API endpoints for smooth MongoDB interactions, providing routing and handling
      HTTP requests and responses, CORS to allow the frontend(React.js) to fetch data from the backend API.`,
      descriptionThird: `iii). Utilized useState for managing component state, useEffect for handling side effects via Axios, props to pass data between components,
      and React Router for smooth navigation between pages`,
      imageFirst: exerciseFirst,
      imageSecond: exerciseSecond,
      imageThird: exerciseThird,
      imageFourth: exerciseFourth,
      githubUrl:"https://github.com/KSHAHASH/Exercise-Tracker",
      deployedUrl:"https://exercisetracker-bc245.firebaseapp.com/create"
    },
    {
      id: 5,
      title: "WEATHER WIZARD",
      descriptionFirst: `i). Developed a weather app, built using the React supported by OpenWeather API, offers
      real-time weather forecast for cities.`,
      descriptionSecond: `ii). Utilized useState hook to effectively manage and update the state, React Router for dynamic navigation between
      pages of the weather app.`,
      descriptionThird: `iii). Made API requests using fetch to retrieve real-time weather information from the OpenWeather API, and controlled
      asynchronous tasks with JavaScript promises for seamless data retrival and error handling.`,
      imageFirst: weatherFirst,
      imageSecond: weatherSecond,
      imageThird: weatherThird,
      imageFourth: weatherFourth,
      githubUrl:"https://github.com/KSHAHASH/Weather-Wizard",
      deployedUrl:"https://weatherapp-363a5.firebaseapp.com/"
    },
    {
      id: 6,
      title: "HACKER NEWS",
      descriptionFirst: `i). Created a news app using React integrated with Aloglia's API, fetches and populates search results
      dynamically as user types in the search bar.`,
      descriptionSecond: `ii). Utilized React's useState and UseEffect for efficiently handling the search queries and
      manage data fetching efficiently.`,
      descriptionThird: `iii). Used CSS Flexbox for a responsive and visually appelaing layout that adapts seamlessly
      to different screen sizes.`,
      imageFirst: newsFirst,
      imageSecond: newSecond,
      imageThird: newsThird,
      imageFourth: newsFourth,
      githubUrl:"https://github.com/KSHAHASH/HackerNews",
      deployedUrl:"https://newsapp-adcd8.firebaseapp.com/"
    },
  ];

  const forwardButton = () => {
    if (currentFlexBox < projects.length) {
      setNextFlexBox((preValue) => preValue + 1);
    }
  };
  const backwardButton = () => {
    if (currentFlexBox > 1) {
      setNextFlexBox((preValue) => preValue - 1);
    }
  };

  return (
    <div className="background-contact">
      <p className="firstParagraph">
        Explore a collection of my work showcasing diverse skills in Web and
        Mobile development:
      </p>
      {/* Main flex container */}

      <div
        className="flex-items-project"
        // style={{ display: currentFlexBox === 1 ? "block" : "none" }}
      >
        {projects
          .filter((project) => project.id === currentFlexBox)
          .map((project) => (
            <div>
              <div className="para-flex-container">
                <p className="project-heading">{project.title}</p>
                <p className="flex-description-items">
                  {project.descriptionFirst}
                </p>
                <p className="flex-description-items">
                  {project.descriptionSecond}
                </p>
                <p className="flex-description-items">
                  {project.descriptionThird}
                </p>
              </div>
              {/* second items inside the flex box */}
              <div>
                {/* here define the flex-container */}
                <div className="flex-container-project-images">
                  <div className="firstImageCard">
                    <img src={project.imageFirst} alt="First Card" />
                  </div>

                  <div className="secondImageCard">
                    <img src={project.imageSecond} alt="Second Card" />
                  </div>
                  <div className="thirdImageCard">
                    <img src={project.imageThird} alt="Second Card" />
                  </div>
                  <div className="fourthImageCard">
                    <img src={project.imageFourth} alt="Second Card" />
                  </div>
                </div>
              </div>

              {/* This div is third item inside the flex box */}
            </div>
          ))}
      </div>
      {projects
        .filter((project) => project.id === currentFlexBox)
        .map((project) => (
          <div>
            <div className="iconImages">
              {/* define the flex container for two buttons or images */}
              <div className="flex-laptop-container">
                <div className="flex-inner-laptop-container">
                  <button onClick={backwardButton} className="bottom-style">
                    <img
                      src={require("../images/backward.png")}
                      alt="Backward Arrow"
                    />
                  </button>
                </div>
              </div>
              <div className="flex-github-container">
                <div className="flex-inner-github-container">
                  <Link to={project.githubUrl}>
                    <img src={githubImage} alt="Github Image" />
                  </Link>
                </div>
              </div>
              <div className="flex-laptop-container">
                <div className="flex-inner-laptop-container">
                  {project.deployedUrl !== "" ? (
                    <Link to={project.deployedUrl}>
                    <img src={laptopImage} alt="Github Image" />
                  </Link>
                  ) : (
                    <Link to={project.githubUrl}>
                    <img src={githubImage} alt="Github Image" />
                  </Link>
                  )}
                </div>
              </div>
              <div className="flex-laptop-container">
                <div className="flex-inner-laptop-container">
                  <button onClick={forwardButton}>
                    <img
                      src={require("../images/forward.png")}
                      alt="Forward Arrow"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Projects;
