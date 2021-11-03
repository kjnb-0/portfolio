import React from "react";
import { ProjectCard } from "./ProjectCard";

// import images
import cityScanImg from "../images/City-Scan-Results.jpeg";

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
    name: "City Scan",
    desc: "Collaborative project built with Foundation, jQuery, Teleport API and CovidActNow API. User inputs a city and chooses a state, page displays quality of life data on the city as well as current COVID information for the state.",
    url: "https://michaelhermes.github.io/City-Scan/",
    img: cityScanImg,
    repo: "https://github.com/MichaelHermes/City-Scan",
    alt: "",
    id: 2,
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
