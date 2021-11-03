import React from "react";
import { ProjectCard } from "./ProjectCard";

// import images
import cityScanImg from "../images/City-Scan-Results.jpeg";
import ReadMeImg from "../images/readme.png";
import WorkoutImg from '../images/workout-tracker.png';
import EmployeeImg from "../images/tracker.png";
import WeatherImg from "../images/weather.png";
import RegexImg from "../images/regex.png";

const data = [
  {
    name: "City Scan",
    desc: "Collaborative project built with Foundation, jQuery, Teleport API and CovidActNow API. User inputs a city and chooses a state, page displays quality of life data on the city as well as current COVID information for the state.",
    url: "https://michaelhermes.github.io/City-Scan/",
    img: cityScanImg,
    repo: "https://github.com/MichaelHermes/City-Scan",
    alt: "",
    id: 1,
  },
  {
    name: "README Generator",
    desc: "This is an automated README generator built with node.js and inquirer. The user enters answers to prompts in the command line and then a README file is automatically generated with their input.",
    url: "https://github.com/kjnb-0/readme-generator",
    img: ReadMeImg,
    repo: "https://github.com/kjnb-0/readme-generator",
    alt: "",
    id: 2,
  },
  {
    name: "CMS Employee Tracker",
    desc: "Built with Node.js, Express.js and MySql, this is a command line application that allows the user to view, input, edit and manage information on departments, roles and employees in their company.",
    url: "https://drive.google.com/file/d/1Qc--G5TPV5II7gdySbeqUDwYpBLwYC9v/view",
    img: EmployeeImg,
    repo: "https://github.com/kjnb-0/node-mysql-employeetracker",
    alt: "",
    id: 3,
  },
  {
    name: "Fitness Tracker",
    desc: "This is an app to track workouts and see stats over time. Built with MongoDB (and MongoDB Atlas). App allows users to keep track of their workouts by creating and storing in a database. Users can choose between cardio or resistence workouts with specific exercises. The dashboard page also offers a chart based summary of their weekly workouts.",
    url: "https://obscure-waters-71106.herokuapp.com/",
    img: WorkoutImg,
    repo: "https://github.com/kjnb-0/workout-tracker",
    alt: "",
    id: 4,
  },
  {
    name: "Weather Dashboard",
    desc: "Dashboard built with Javascript and OpenWeather API. User inputs city name to view current weather for that location as well as the five-day forecast.",
    url: "https://kjnb-0.github.io/weather-display-dashboard/",
    img: WeatherImg,
    repo: "https://github.com/kjnb-0/weather-display-dashboard",
    alt: "",
    id: 5,
  },
  {
    name: "Regex Tutorial - Matching an Email",
    desc: "This is an overview of the regular expression used to match an email address.",
    url: "https://gist.github.com/kjnb-0/2b390384632141c8ab6e09c39bdb5621",
    img: RegexImg,
    repo: "https://gist.github.com/kjnb-0/2b390384632141c8ab6e09c39bdb5621",
    alt: "",
    id: 6,
  },
];

export const Project = () => {
  return (
      <div className="container"> 
          <div className="projects">
            {data.map((project) => (
              <ProjectCard
                name={project.name}
                desc={project.desc}
                url={project.url}
                img={project.img}
                repo={project.repo}
                alt={project.alt}
                key={project.id}
              />
            ))}
          </div>
          </div>
  );
};
